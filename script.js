// Filter the JSON data based on the search term
    function filterData() {
      const searchTerm = document.getElementById('search').value.trim().toLowerCase();
      const suggestionsList = document.getElementById('suggestions');
      suggestionsList.innerHTML = '';
      if (!searchTerm) {
        return;
      };
      const filteredData = buildings.filter(item => item.no==searchTerm);

      // Display the filtered data in the suggestions list
      for (const building of filteredData) {

        var resultItem =
          `<div id="container">
            <div>
                <span id="mapsLink" onclick="gotoLocation('${building.loc}')">
                <span>🏡</span>عمارة ${building.no}
                </span>
            </div>
            <spn id="copy-box" onclick="copyLocation('${building.loc}')">
              <span id="copy-text">نسخ الإحداثيات</span>
              <span id="copy-symbol">&#x2398;</span>
            </span>
          </div>`;
        const suggestionLi = document.createElement('li');
        suggestionLi.innerHTML = resultItem;
        suggestionsList.appendChild(suggestionLi);
      }
    }

    function gotoLocation(loc) {
      var url = `https://maps.google.com/?q=${loc}`;
      var mapInterface = document.querySelector("input[type='radio'][name=map]:checked").value;
      if (mapInterface == 'Openstreetmap')
        url = `https://www.openstreetmap.org/search?query=${loc}`;
      window.open(url, '_blank');
    }

    function copyLocation(loc) {
      try {
        navigator.clipboard.writeText(loc);
        console.log('Location copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
