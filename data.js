const buildings = [
    {
        "no": "1",
        "loc": "30.07229, 31.3961"
    },
    {
        "no": "2",
        "loc": "30.07221, 31.39563"
    },
    {
        "no": "3",
        "loc": "30.07214, 31.39528"
    },
    {
        "no": "4",
        "loc": "30.07208, 31.39493"
    },
    {
        "no": "5",
        "loc": "30.07201, 31.39457"
    },
    {
        "no": "6",
        "loc": "30.07195, 31.39421"
    },
    {
        "no": "7",
        "loc": "30.07188, 31.39387"
    },
    {
        "no": "8",
        "loc": "30.07232, 31.39372"
    },
    {
        "no": "9",
        "loc": "30.07232, 31.3941"
    },
    {
        "no": "10",
        "loc": "30.07233, 31.39447"
    },
    {
        "no": "11",
        "loc": "30.07255, 31.39485"
    },
    {
        "no": "12",
        "loc": "30.07256, 31.39523"
    },
    {
        "no": "13",
        "loc": "30.07258, 31.3956"
    },
    {
        "no": "14",
        "loc": "30.0726, 31.3961"
    },
    {
        "no": "15",
        "loc": "30.07291, 31.3961"
    },
    {
        "no": "16",
        "loc": "30.07296, 31.39562"
    },
    {
        "no": "17",
        "loc": "30.07299, 31.39525"
    },
    {
        "no": "18",
        "loc": "30.07301, 31.39491"
    },
    {
        "no": "19",
        "loc": "30.07306, 31.39455"
    },
    {
        "no": "20",
        "loc": "30.07271, 31.39444"
    },
    {
        "no": "21",
        "loc": "30.0727, 31.39407"
    },
    {
        "no": "22",
        "loc": "30.0731, 31.39418"
    },
    {
        "no": "23",
        "loc": "30.07312, 31.39383"
    },
    {
        "no": "24",
        "loc": "30.07268, 31.39372"
    },
    {
        "no": "25",
        "loc": "30.07273, 31.39323"
    },
    {
        "no": "26",
        "loc": "30.07318, 31.39329"
    },
    {
        "no": "27",
        "loc": "30.07322, 31.39293"
    },
     {
        "no": "28",
        "loc": "30.07279, 31.39289"
    },
    {
        "no": "29",
        "loc": "30.0728, 31.39251"
    },
    {
        "no": "30",
        "loc": "30.07324, 31.39258"
    },
    {
        "no": "31",
        "loc": "30.07324, 31.39258"
    },
     {
        "no": "32",
        "loc": "30.07324, 31.39258"
    },
     {
        "no": "33",
        "loc": "30.07199, 31.39221"
    },
    {
        "no": "34",
        "loc": "30.07208, 31.39255"
    },
    {
        "no": "35",
        "loc": "30.07213, 31.39291"
    },
    {
        "no": "36",
        "loc": "30.07221, 31.39326"
    },
    {
        "no": "37",
        "loc": "30.07177, 31.39338"
    },
    {
        "no": "38",
        "loc": "30.0717, 31.39302"
    },
    {
        "no": "39",
        "loc": "30.07164, 31.39267"
    },
    {
        "no": "40",
        "loc": "30.07156, 31.39233"
    },
    {
        "no": "41",
        "loc": "30.07148, 31.3918"
    },
    {
        "no": "42",
        "loc": "30.0714, 31.39145"
    },
    {
        "no": "43",
        "loc": "30.07134, 31.39109"
    },
    {
        "no": "44",
        "loc": "30.07127, 31.39075"
    },
    {
        "no": "45",
        "loc": "30.0717, 31.39063"
    },
    {
        "no": "46",
        "loc": "30.07176, 31.39098"
    },
    {
        "no": "47",
        "loc": "30.07183, 31.39134"
    },
    {
        "no": "48",
        "loc": "30.0719, 31.39168"
    },
    {
        "no": "49",
        "loc": "30.0729, 31.39162"
    },
    {
        "no": "50",
        "loc": "30.07334, 31.39168"
    },
    {
        "no": "51",
        "loc": "30.07338, 31.39133"
    },
    {
        "no": "52",
        "loc": "30.07293, 31.39127"
    },
    {
        "no": "53",
        "loc": "30.07296, 31.39091"
    },
    {
        "no": "54",
        "loc": "30.07341, 31.39097"
    },
    {
        "no": "55",
        "loc": "30.07344, 31.3906"
    },
    {
        "no": "56",
        "loc": "30.07344, 31.3906"
    },
    {
        "no": "57",
        "loc": "30.07345, 31.39"
    },
    {
        "no": "58",
        "loc": "30.07328, 31.38967"
    },
    {
        "no": "59",
        "loc": "30.07301, 31.38945"
    },
    {
        "no": "60",
        "loc": "30.07291, 31.39008"
    },
    {
        "no": "61",
        "loc": "30.0726, 31.3901"
    },
    {
        "no": "62",
        "loc": "30.07269, 31.38938"
    },
    {
        "no": "63",
        "loc": "30.07198, 31.38929"
    },
    {
        "no": "64",
        "loc": "30.07205, 31.38971"
    },
    {
        "no": "65",
        "loc": "30.07206, 31.39012"
    },
    {
        "no": "66",
        "loc": "30.07206, 31.39012"
    },
    {
        "no": "67",
        "loc": "30.07164, 31.38929"
    },
    {
        "no": "68",
        "loc": "30.07132, 31.38947"
    },
    {
        "no": "69",
        "loc": "30.07114, 31.38983"
    },
    {
        "no": "70",
        "loc": "30.07117, 31.39024"
    },
    {
        "no": "",
        "loc": ""
    },
];
