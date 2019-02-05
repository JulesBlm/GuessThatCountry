const countries = [{
	"name": "italy",
	"synonyms": ["italian republic"],
	"continent": "europe",
	"hints": ["Home of pasta", "Home of pizza"],
	"difficulty": "easy",
	"vertical": 1289,
	"horizontal": 901,
	"bbArea": 1162064
}, {
	"name": "albania",
	"synonyms": ["republic of albania"],
	"continent": "europe",
	"hints": ["Its in the Balkans"],
	"difficulty": "hard",
	"vertical": 335,
	"horizontal": 144,
	"bbArea": 48424
}, {
	"name": "afghanistan",
	"synonyms": ["islamic republic of afghanistan"],
	"continent": "medium",
	"hints": ["Graveyard of empires"],
	"difficulty": "easy",
	"vertical": 1010,
	"horizontal": 1252,
	"bbArea": 1265850
}, {
	"name": "morocco",
	"synonyms": ["kingdom of morocco"],
	"continent": "africa",
	"hints": ["It's in North Africa", "South of Spain", "West of Algeria"],
	"difficulty": "easy",
	"vertical": 1613,
	"horizontal": 1437,
	"bbArea": 2318642
}, {
	"name": "usa",
	"synonyms": ["u.s.a.", "us", "united states of america"],
	"continent": "north america",
	"hints": ["Uncle Sam", "The worlds superpower"],
	"difficulty": "easy",
	"vertical": 2660,
	"horizontal": 4500,
	"bbArea": 111970000
}, {
	"name": "australia",
	"synonyms": ["commonwealth of australia"],
	"continent": "oceania",
	"hints": ["Down under"],
	"difficulty": "easy",
	"vertical": 5060,
	"horizontal": 5065,
	"bbArea": 25633282
}, {
	"name": "germany",
	"synonyms": ["federal republic of germany"],
	"continent": "europe",
	"hints": ["Krauts"],
	"difficulty": "medium",
	"vertical": 866,
	"horizontal": 583,
	"bbArea": 505666
}, {
	"name": "russia",
	"synonyms": ["russian federation"],
	"continent": "europe, asia",
	"hints": ["Largest nation on Earth", "Successor to the Soviet Union"],
	"difficulty": "medium",
	"vertical": 4521.86,
	"horizontal": 9000,
	"bbArea": 40699000
}, {
	"name": "niger",
	"synonyms": ["republic of niger"],
	"continent": "africa",
	"hints": ["It's in West Africa", "It's a landlocked nation east of Mali"],
	"difficulty": "hard",
	"vertical": 1314,
	"horizontal": 1611,
	"bbArea": 2118852
}, {
	"name": "netherlands",
	"synonyms": ["the netherlands", "holland"],
	"continent": "europe",
	"hints": ["It's in Western Europe"],
	"difficulty": "medium",
	"vertical": 316.933,
	"horizontal": 261,
	"bbArea": 82476
}, {
	"name": "china",
	"synonyms": ["people's republic of china", "peoples republic of china"],
	"continent": "asia",
	"hints": ["The Red Dragon", "Most populous nation on Earth"],
	"difficulty": "easy",
	"vertical": 4202,
	"horizontal": 3911,
	"bbArea": 16437179
}, {
	"name": "algeria",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in North Africa", "Has a Mediterranean coast"],
	"difficulty": "medium",
	"vertical": 2014,
	"horizontal": 1828,
	"bbArea": 3682860
}, {
	"name": "angola",
	"synonyms": ["Republic of Angola"],
	"continent": "africa",
	"hints": ["Has an Atlantic coast", "In Southern Africa"],
	"difficulty": "hard",
	"vertical": 1516,
	"horizontal": 1373,
	"bbArea": 2083832
}, {
	"name": "antarctica",
	"synonyms": [],
	"continent": "antarctica",
	"hints": ["The first hint was the really answer!"],
	"difficulty": "medium",
	"vertical": 3278,
	"horizontal": 9.1201e-12,
	"bbArea": 2.99096829e-8
}, {
	"name": "argentina",
	"synonyms": ["argentine republic"],
	"continent": "south america",
	"hints": ["Second largest in Latin America"],
	"difficulty": "medium",
	"vertical": 3698,
	"horizontal": 2056,
	"bbArea": 7605022
}, {
	"name": "armenia",
	"synonyms": [],
	"continent": "asia",
	"hints": ["South of Georgia", "The first Christian nation"],
	"difficulty": "hard",
	"vertical": 269,
	"horizontal": 264,
	"bbArea": 71381
}, {
	"name": "austria",
	"synonyms": [],
	"continent": "europe",
	"hints": ["They speak German here", "It's in the Alps"],
	"difficulty": "medium",
	"vertical": 292,
	"horizontal": 556,
	"bbArea": 162686
}, {
	"name": "azerbaijan",
	"synonyms": ["republic of azerbaijan"],
	"continent": "asia",
	"hints": ["A country in the South Caucasus region", "Bounded by the Caspian Sea"],
	"difficulty": "hard",
	"vertical": 388,
	"horizontal": 484,
	"bbArea": 188341
}, {
	"name": "bangladesh",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Surrounded by India", "Bounded by the Bay of Bengal"],
	"difficulty": "medium",
	"vertical": 654,
	"horizontal": 459,
	"bbArea": 300570
}, {
	"name": "belarus",
	"synonyms": ["white russia"],
	"continent": "europe",
	"hints": ["Also known as (a certain color) Russia"],
	"difficulty": "medium",
	"vertical": 820.5,
	"horizontal": 887,
	"bbArea": 323524
}, {
	"name": "belgium",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Western Europe", "Has three official languages"],
	"difficulty": "medium",
	"vertical": 222.5030023464361,
	"horizontal": 266.6790573421889,
	"bbArea": 59336.890921554426
}, {
	"name": "belize",
	"synonyms": [],
	"continent": "north america",
	"hints": ["Former British colony", "In Central America", "They don't speak Spanish here"],
	"difficulty": "hard",
	"vertical": 290,
	"horizontal": 153,
	"bbArea": 44501
}, {
	"name": "benin",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "hard",
	"vertical": 687,
	"horizontal": 334,
	"bbArea": 229872
}, {
	"name": "bhutan",
	"synonyms": ["kingdom of bhutan"],
	"continent": "asia",
	"hints": ["Landlocked nation in the Himalayas", "Sandwiched between China and India"],
	"difficulty": "hard",
	"vertical": 184,
	"horizontal": 328,
	"bbArea": 60744
}, {
	"name": "bolivia",
	"synonyms": [],
	"continent": "south america",
	"hints": ["A landlocked country located in western-central South America", "Mostly situated in the Andean mountain range"],
	"difficulty": "medium",
	"vertical": 1469,
	"horizontal": 1337,
	"bbArea": 1965426
}, {
	"name": "bosnia and herzegovina",
	"synonyms": ["bosnia", "bosnia & herzegovina", "bosnia–herzegovina"],
	"continent": "europe",
	"hints": ["It's in the Balkans"],
	"difficulty": "medium",
	"vertical":303,
	"horizontal":305,
	"bbArea":92520
}, {
	"name": "botswana",
	"synonyms": [],
	"continent": "africa",
	"hints": ["Landlocked country in Southern Africa"],
	"difficulty": "medium",
	"vertical": 1012,
	"horizontal": 992,
	"bbArea": 1005086
}, {
	"name": "brazil",
	"synonyms": [],
	"continent": "south america",
	"hints": ["They speak Portuguese here", "Largest country of South America"],
	"difficulty": "easy",
	"vertical": 4337,
	"horizontal": 4997,
	"bbArea": 21675947
}, {
	"name": "bulgaria",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Has a Black Sea coast"],
	"difficulty": "medium",
	"vertical": 332,
	"horizontal": 498,
	"bbArea": 165771
}, {
	"name": "burkina faso",
	"synonyms": [],
	"continent": "africa",
	"hints": ["A landlocked country in West Africa"],
	"difficulty": "hard",
	"vertical": 632,
	"horizontal": 849,
	"bbArea": 537300
}, {
	"name": "burundi",
	"synonyms": [],
	"continent": "africa",
	"hints": ["A landlocked country in the African Great Lakes region of East Africa"],
	"difficulty": "hard",
	"vertical": 240,
	"horizontal": 205,
	"bbArea": 49296
}, {
	"name": "cambodia",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in Southeast Asia"],
	"difficulty": "hard",
	"vertical": 476,
	"horizontal": 569,
	"bbArea": 271689
}, {
	"name": "cameroon",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa", "Has an atlantic coast"],
	"difficulty": "medium",
	"vertical": 1270,
	"horizontal": 834,
	"bbArea": 1059970
}, {
	"name": "canada",
	"synonyms": [],
	"continent": "north america",
	"hints": ["The most northern country of the Americas's", "America's hat"],
	"difficulty": "easy",
	"vertical": 3800 ,
	"horizontal": 3950,
	"bbArea": 4904869
}, {
	"name": "central african republic",
	"synonyms": [],
	"continent": "african",
	"hints": ["A landlocked country in Central Africa"],
	"difficulty": "hard",
	"vertical":974,
	"horizontal":1424,
	"bbArea":1388506	
}, {
	"name": "chad",
	"synonyms": [],
	"continent": "african",
	"hints": ["Landlocked country mostly in the Sahara"],
	"difficulty": "medium",
	"vertical": 1777,
	"horizontal": 1074,
	"bbArea": 1910393
}, {
	"name": "chile",
	"synonyms": ["chili"],
	"continent": "south america",
	"hints": ["Has a Pacific coast"],
	"difficulty": "easy",
	"vertical": 4271, 
	"horizontal": 356,
	"bbArea": 1520000
}, {
	"name": "colombia",
	"synonyms": ["republic of colombia"],
	"continent": "south america",
	"hints": ["Has both a Pacific and Carribean coast"],
	"difficulty": "medium",
	"vertical": 1980,
	"horizontal": 1604,
	"bbArea": 3178783
}, {
	"name": "costa rica",
	"synonyms": ["republic of costa rica"],
	"continent": "north america",
	"hints": ["It's in Central America", "Bordered by Nicaragua to the north", "Bordered by Panama to the southeast"],
	"difficulty": "medium",
	"vertical": 633,
	"horizontal": 496,
	"bbArea": 314597
}, {
	"name": "croatia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in the Balkans"],
	"difficulty": "medium",
	"vertical": 459,
	"horizontal": 451,
	"bbArea": 207417
}, {
	"name": "cuba",
	"synonyms": [],
	"continent": "north america",
	"hints": ["It's in the Carribean", "Kind of communist"],
	"difficulty": "easy",
	"vertical": 382,
	"horizontal": 1104,
	"bbArea": 422285
}, {
	"name": "cyprus",
	"synonyms": [],
	"continent": "europe",
	"hints": ["In the Mediterranean sea"],
	"difficulty": "medium",
	"vertical": 62,
	"horizontal": 166,
	"bbArea": 10378
}, {
	"name": "czech republic",
	"synonyms": [],
	"continent": "europe",
	"hints": ["A landlocked country in Central Europe", "bordered by Germany to the west"],
	"difficulty": "medium",
	"vertical":275,
	"horizontal":472,
	"bbArea":130425.
}, {
	"name": "democratic republic of the congo",
	"synonyms": ["congo", "big congo"],
	"continent": "africa",
	"hints": [],
	"difficulty": "medium",
	"vertical":2094,
	"horizontal":2109,
	"bbArea":4418440
}, {
	"name": "denmark",
	"synonyms": ["czechia"],
	"continent": "europe",
	"hints": ["It's in Scandinavia", "North of Germany"],
	"difficulty": "medium",
	"vertical": 353,
	"horizontal": 418,
	"bbArea": 148118
}, {
	"name": "dominican republic",
	"synonyms": [],
	"continent": "north america",
	"hints": ["Located in the island of Hispaniola", "In the Carribean"],
	"difficulty": "medium",
	"vertical":265,
	"horizontal":384,
	"bbArea":102352
}, {
	"name": "east timor",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Surrounded by Indonesia"],
	"difficulty": "medium",
	"vertical":151,
	"horizontal":361,
	"bbArea":54902	
}, {
	"name": "ecuador",
	"synonyms": ["republic of ecuador"],
	"continent": "south america",
	"hints": ["Has a Pacific coast"],
	"difficulty": "medium",
	"vertical": 742,
	"horizontal": 1865,
	"bbArea": 1384810
}, {
	"name": "egypt",
	"synonyms": ["arab republic of egypt"],
	"continent": "africa",
	"hints": ["Land of the Pharaohs", "Land of the Suez Canal", "The Nile ends here"],
	"difficulty": "easy",
	"vertical": 1074,
	"horizontal": 1155,
	"bbArea": 1241075
}, {
	"name": "el salvador",
	"synonyms": [],
	"continent": "north america",
	"hints": ["It's in Central America"],
	"difficulty": "medium",
	"vertical": 143,
	"horizontal": 260,
	"bbArea": 37308
}, {
	"name": "equatorial guinea",
	"synonyms": [],
	"continent": "africa",
	"hints": ["Has an Atlantic coast"],
	"difficulty": "medium",
	"vertical":583.5615178627804,
	"horizontal":635,
	"bbArea":370642.9141200562	
}, {
	"name": "eritrea",
	"synonyms": [],
	"continent": "africa",
	"hints": ["In the Horn of Africa"],
	"difficulty": "medium",
	"vertical": 627,
	"horizontal": 708,
	"bbArea": 444713
}, {
	"name": "estonia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Top of the Baltic Nations"],
	"difficulty": "medium",
	"vertical": 239,
	"horizontal": 356,
	"bbArea": 85463
}, {
	"name": "ethiopia",
	"synonyms": [],
	"continent": "africa",
	"hints": ["In the Horn of Africa"],
	"difficulty": "medium",
	"vertical": 1276,
	"horizontal": 1610,
	"bbArea": 2055217
}, {
	"name": "falkland islands",
	"synonyms": [],
	"continent": "south america",
	"hints": ["A war was fought over these islands in 1982", "Part of Great Britain"],
	"difficulty": "medium",

}, {
	"name": "finland",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Not quite Scandinavian"],
	"difficulty": "medium",
	"vertical": 1141,
	"horizontal": 414,
	"bbArea": 472777
}, {
	"name": "france",
	"synonyms": [],
	"continent": "europe",
	"hints": ["The Hexagon", "It's in Western Europe"],
	"difficulty": "easy",
	"vertical": 1950,
	"horizontal": 2000,
	"bbArea": 999140
}, {
	"name": "french polynesia",
	"synonyms": [],
	"continent": "oceania",
	"hints": ["An archipelago in the Pacific Ocean"],
	"difficulty": "hard",
	"vertical":2189,
	"horizontal":2157,
	"bbArea":4724201
}, {
	"name": "gabon",
	"synonyms": ["gabonese republic"],
	"continent": "africa",
	"hints": [],
	"difficulty": "medium",
	"vertical": 696,
	"horizontal": 644,
	"bbArea": 448773
}, {
	"name": "georgia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["South of Russia"],
	"difficulty": "medium",
	"vertical": 281,
	"horizontal": 540,
	"bbArea": 152101
}, {
	"name": "ghana",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "medium",
	"vertical": 714,
	"horizontal": 485,
	"bbArea": 346901
}, {
	"name": "greece",
	"synonyms": [],
	"continent": "europe",
	"hints": [ "Home of democracy"],
	"difficulty": "medium",
	"vertical": 771,
	"horizontal": 714,
	"bbArea": 550811
}, {
	"name": "greenland",
	"synonyms": [],
	"continent": "north america",
	"hints": ["Very cold, doesn't do its name justice"],
	"difficulty": "easy",
	"vertical": 2651,
	"horizontal": 724,
	"bbArea": 1921106
}, {
	"name": "guatemala",
	"synonyms": [],
	"continent": "north america",
	"hints": ["It's in Central America"],
	"difficulty": "medium",
	"vertical": 454,
	"horizontal": 426,
	"bbArea": 193540
}, {
	"name": "guinea-bissau",
	"synonyms": ["republic of guinea-bissau"],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "medium",
	"vertical": 194,
	"horizontal": 332,
	"bbArea": 64825
}, {
	"name": "guinea",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "medium",
	"vertical": 609,
	"horizontal": 804,
	"bbArea": 490685
}, {
	"name": "guyana",
	"synonyms": [],
	"continent": "south america",
	"hints": ["In the north of South America"],
	"difficulty": "medium",
	"vertical": 819,
	"horizontal": 540,
	"bbArea": 443012
}, {
	"name": "haiti",
	"synonyms": [],
	"continent": "north america",
	"hints": ["Located in the island of Hispaniola", "In the Carribean"],
	"difficulty": "medium",
	"vertical": 229,
	"horizontal": 297,
	"bbArea": 68301
}, {
	"name": "honduras",
	"synonyms": ["republic of honduras"],
	"continent": "north america",
	"hints": ["It's in Central America"],
	"difficulty": "medium",
	"vertical": 493,
	"horizontal": 661,
	"bbArea": 326406
}, {
	"name": "hungary",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Landlocked nation in Central Europe"],
	"difficulty": "medium",
	"vertical": 314,
	"horizontal": 498,
	"bbArea": 156898
}, {
	"name": "iceland",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Very cold but also has lava"],
	"difficulty": "medium",
	"vertical": 700,
	"horizontal": 850,
	"bbArea": 171689
}, {
	"name": "india",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Second-most populous nation on Earth"],
	"difficulty": "medium",
	"vertical": 3196,
	"horizontal": 2635,
	"bbArea": 8424910
}, {
	"name": "indonesia",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Archipelago on the equator"],
	"difficulty": "medium",
	"vertical": 1871,
	"horizontal": 5082,
	"bbArea": 9512739
}, {
	"name": "iran",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Formerly known as Persia", "A prominent revolution occured here in 1979"],
	"difficulty": "medium",
	"vertical": 1635,
	"horizontal": 1646,
	"bbArea": 2693800
}, {
	"name": "iraq",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in the Middle East", "Fought a war with it's Eastern neighbour in the 80's"],
	"difficulty": "medium",
	"vertical": 924,
	"horizontal": 864,
	"bbArea": 798802
}, {
	"name": "ireland",
	"synonyms": ["republic of ireland"],
	"continent": "europe",
	"hints": ["Only shares a border with the UK"],
	"difficulty": "medium",
	"vertical": 438.18354247864346,
	"horizontal": 283.2164262220592,
	"bbArea": 124100.77693012328
}, {
	"name": "israel",
	"synonyms": [],
	"continent": "asia",
	"hints": ["The Holy Land", "Bounded by the Mediterranean sea"],
	"difficulty": "medium",
	"vertical": 435.5544903684336,
	"horizontal": 152.20361322880117,
	"bbArea": 66292.96719210468
}, {
	"name": "ivory coast",
	"synonyms": ["cote d'ivoire", "cote divoire"],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "medium"
}, {
	"name": "japan",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Land of the rising sun", "Konichiwa"],
	"difficulty": "medium",
	"vertical": 2369.3791198891113,
	"horizontal": 2403.6317225985276,
	"bbArea": 5695114.815428047
}, {
	"name": "jordan",
	"synonyms": ["kingdom of jordan"],
	"continent": "asia",
	"hints": ["It's in the Middle East"],
	"difficulty": "medium",
	"vertical": 464.9882937912627,
	"horizontal": 403.23119167384004,
	"bbArea": 187497.7838198365
}, {
	"name": "kazakhstan",
	"synonyms": [],
	"continent": "asia",
	"hints": ["The largest -stan"],
	"difficulty": "medium",
	"vertical": 1651.235222952034,
	"horizontal": 2539.34597933776,
	"bbArea": 4193057.5243441374
}, {
	"name": "kenya",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in East Africa"],
	"difficulty": "medium",
	"vertical": 1079.4684941195414,
	"horizontal": 879.414879957703,
	"bbArea": 949300.6561742589
}, {
	"name": "kosovo",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Small nation in the Balkans"],
	"difficulty": "medium",
	"vertical": 157.7925648345061,
	"horizontal": 141.54033953469613,
	"bbArea": 22334.013202726546
}, {
	"name": "kuwait",
	"synonyms": [],
	"continent": "asia",
	"hints": ["On the Persian gulf"],
	"difficulty": "medium",
	"vertical": 173.98813105040765,
	"horizontal": 182.81553289313302,
	"bbArea": 31807.732895060537
}, {
	"name": "kyrgyzstan",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in central Asia"],
	"difficulty": "hard",
	"vertical": 452.83802783402734,
	"horizontal": 892.6153146791506,
	"bbArea": 404210.1587137563
}, {
	"name": "laos",
	"synonyms": [],
	"continent": "asia",
	"hints": ["The only landlocked country in Southeast Asia"],
	"difficulty": "medium",
	"vertical": 954.1191001684269,
	"horizontal": 777.3335940662903,
	"bbArea": 741668.8293012182
}, {
	"name": "latvia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["One of the Baltic nations"],
	"difficulty": "medium",
	"vertical": 267.7741637058751,
	"horizontal": 426.02244014392295,
	"bbArea": 114077.80262947519
}, {
	"name": "lebanon",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in the Middle East", "Bounded by the Mediterranean sea"],
	"difficulty": "medium",
	"vertical": 181.46676499587082,
	"horizontal": 137.5566379097817,
	"bbArea": 24961.95808519645
}, {
	"name": "liberia",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "hard",
	"vertical": 469.0386607649435,
	"horizontal": 449.9406141581182,
	"bbArea": 211039.54308847993
}, {
	"name": "libya",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in North Africa", "Bounded by the Mediterranean sea", "West of Egypt"],
	"difficulty": "medium",
	"vertical": 1521.7159655234698,
	"horizontal": 1475.4783823093944,
	"bbArea": 2245259.0111449473
}, {
	"name": "lithuania",
	"synonyms": [],
	"continent": "europe",
	"hints": ["One of the Baltic nations"],
	"difficulty": "medium",
	"vertical": 284.18808403440715,
	"horizontal": 361.0708518897954,
	"bbArea": 102612.03359923215
}, {
	"name": "luxembourg",
	"synonyms": ["luxemburg"],
	"continent": "europe",
	"hints": ["Small nation in West Europe", "Sandwiched between Belgium, France and Germany"],
	"difficulty": "hard",
	"vertical": 81,
	"horizontal": 56,
	"bbArea": 4575
}, {
	"name": "madagascar",
	"synonyms": [],
	"continent": "africa",
	"hints": ["East of the African continent", "An island nation with unique flora and fauna"],
	"difficulty": "medium",
	"vertical": 1518,
	"horizontal": 792,
	"bbArea": 1202638
}, {
	"name": "malawi",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's a landlocked nation in East Africa"],
	"difficulty": "hard",
	"vertical": 862,
	"horizontal": 355,
	"bbArea": 306571
}, {
	"name": "malaysia",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in Southeast Asia"],
	"difficulty": "medium",
	"vertical": 723,
	"horizontal": 2164,
	"bbArea": 1565807
}, {
	"name": "mali",
	"synonyms": [],
	"continent": "africa",
	"hints": ["landlocked nation in the Sahara"],
	"difficulty": "medium",
	"vertical": 1651,
	"horizontal": 1661,
	"bbArea": 2745018
}, {
	"name": "mauritania",
	"synonyms": [],
	"continent": "africa",
	"hints": ["Mostly in the Sahara", "Has an Atlantic coast"],
	"difficulty": "medium",
	"vertical": 1395,
	"horizontal": 1211,
	"bbArea": 1690137
}, {
	"name": "mexico",
	"synonyms": ["méxico"],
	"continent": "north america",
	"hints": ["It is bordered to the north by the United States"],
	"difficulty": "easy",
	"vertical": 2020,
	"horizontal": 2951,
	"bbArea": 5962290
}, {
	"name": "moldova",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Landlocked nation in Eastern Europe"],
	"difficulty": "medium",
	"vertical": 336.28281633421653,
	"horizontal": 258.93736182955,
	"bbArea": 87076.18529019314
}, {
	"name": "mongolia",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It is sandwiched between China to the south and Russia to the north"],
	"difficulty": "medium",
	"vertical": 1172,
	"horizontal": 2177,
	"bbArea": 2553292
}, {
	"name": "mozambique",
	"synonyms": [],
	"continent": "africa",
	"hints": ["Has an Indian Ocean coast"],
	"difficulty": "medium",
	"vertical": 1822,
	"horizontal": 1162,
	"bbArea": 2119215
}, {
	"name": "myanmar",
	"synonyms": ["burma"],
	"continent": "asia",
	"hints": ["It's in Southeast Asia", "Its bordered by India and Bangladesh to its west", "Its bordered by Thailand and Laos to its east", "Its bordered by China to its north and northeast"],
	"difficulty": "medium",
	"vertical": 2084,
	"horizontal": 878,
	"bbArea": 1832090
}, {
	"name": "namibia",
	"synonyms": [],
	"continent": "africa",
	"hints": ["Has an Atlantic coast"],
	"difficulty": "medium",
	"vertical": 1335,
	"horizontal": 1440,
	"bbArea": 1922933
}, {
	"name": "nepal",
	"synonyms": [],
	"continent": "asia",
	"hints": ["In the Himalayas", "Has the highest mountain peak on Earth"],
	"difficulty": "medium",
	"vertical": 452,
	"horizontal": 780,
	"bbArea": 353391
}, {
	"name": "new caledonia",
	"synonyms": ["nouvelle-calédonie", "nouvelle-caledonie"],
	"continent": "oceania",
	"hints": ["A special collectivity of France"],
	"difficulty": "hard",
	"vertical": 338,
	"horizontal": 809,
	"bbArea": 274209
}, {
	"name": "new zealand",
	"synonyms": [],
	"continent": "oceania",
	"hints": ["East of Australia"],
	"difficulty": "medium",
	"vertical": 4898,
	"horizontal": 351,
	"bbArea": 1722777
}, {
	"name": "nicaragua",
	"synonyms": [],
	"continent": "north america",
	"hints": ["Largest country in Central America", "It's bordered by Honduras to the north", "It's bordered by Costa Rica to the south", "Has both a Carribean and Pacific coast"],
	"difficulty": "medium",
	"vertical": 480,
	"horizontal": 532,
	"bbArea": 255721
}, {
	"name": "nigeria",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa", "Its coast in the south lies on the Gulf of Guinea in the Atlantic Ocean", "Most populous country in Africa"],
	"difficulty": "medium",
	"vertical": 1068,
	"horizontal": 1295,
	"bbArea": 1383672
}, {
	"name": "north korea",
	"synonyms": [],
	"continent": "asia",
	"hints": ["The Hermit Kingdom", "Has a southern brother it doesn't really like", "Has a chubby dictator"],
	"difficulty": "medium",
	"vertical": 593,
	"horizontal": 527,
	"bbArea": 312880
}, {
	"name": "norway",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Scandinavia"],
	"difficulty": "medium",
	"vertical": 1900,
	"horizontal": 745.,
	"bbArea": 11209490.
}, {
	"name": "oman",
	"synonyms": [],
	"continent": "asia",
	"hints": ["On the Arabian peninsula"],
	"difficulty": "medium",
	"vertical": 1083.,
	"horizontal": 783.,
	"bbArea": 848778.
}, {
	"name": "pakistan",
	"synonyms": [],
	"continent": "asia",
	"hints": [""],
	"difficulty": "medium",
	"vertical": 1485,
	"horizontal": 1436,
	"bbArea": 2133649
}, {
	"name": "palestine",
	"synonyms": ["palestina"],
	"continent": "asia",
	"hints": ["It's in the Middle East", "It's complicated"],
	"difficulty": "medium",
	"vertical": 128,
	"horizontal": 1,
	"bbArea": 19040
}, {
	"name": "panama",
	"synonyms": [],
	"continent": "north america",
	"hints": ["Home to a famous canal", "In Central America"],
	"difficulty": "medium",
	"vertical": 269,
	"horizontal": 645,
	"bbArea": 174009
}, {
	"name": "papua new guinea",
	"synonyms": [],
	"continent": "asia",
	"hints": ["North of Australia", "Shares a border with Indonesia"],
	"difficulty": "medium",
	"vertical": 1144,
	"horizontal": 1680,
	"bbArea": 1922949
}, {
	"name": "paraguay",
	"synonyms": [],
	"continent": "south america",
	"hints": ["Landlocked nation that borders Brazil"],
	"difficulty": "medium",
	"vertical": 922,
	"horizontal": 882,
	"bbArea": 814084
}, {
	"name": "peru",
	"synonyms": [],
	"continent": "south america",
	"hints": ["Land of the Inca's"],
	"difficulty": "medium",
	"vertical": 2035,
	"horizontal": 1406,
	"bbArea": 2864385
}, {
	"name": "philippines",
	"synonyms": ["the philippines"],
	"continent": "asia",
	"hints": ["Former Spanish colony"],
	"difficulty": "medium",
	"vertical": 1831,
	"horizontal": 1002,
	"bbArea": 1834872
}, {
	"name": "poland",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Central Europe", "It has a Baltic coast"],
	"difficulty": "medium",
	"vertical": 649,
	"horizontal": 641,
	"bbArea": 416586
}, {
	"name": "portugal",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in South Europe", "On the Iberian peninsula"],
	"difficulty": "medium",
	"vertical": 580,
	"horizontal": 275,
	"bbArea": 159500
}, {
	"name": "qatar",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in the Persian Gulf"],
	"difficulty": "medium",
	"vertical": 177,
	"horizontal": 86,
	"bbArea": 15371
}, {
	"name": "republic of macedonia",
	"synonyms": ["macedonia"],
	"continent": "europe",
	"hints": ["It's in the Balkans"],
	"difficulty": "medium",
	"vertical":169,
	"horizontal":210,
	"bbArea":35641	
}, {
	"name": "republic of the congo",
	"synonyms": ["the congo", "congo"],
	"continent": "africa",
	"hints": ["It's in Central Africa", "Bounded by the Atlantic Ocean"],
	"difficulty": "hard",
	"vertical":970,
	"horizontal":835,
	"bbArea":810721
}, {
	"name": "romania",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Bounded by the Black Sea to the east"],
	"difficulty": "medium",
	"vertical": 762,
	"horizontal": 1040,
	"bbArea": 359678
}, {
	"name": "rwanda",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in Central and East Africa", "It's one of the smallest countries on the African continent"],
	"difficulty": "medium",
	"vertical": 196,
	"horizontal": 225,
	"bbArea": 44385
}, {
	"name": "saudi arabia",
	"synonyms": [],
	"continent": "asia",
	"hints": ["In the Arabian peninsula"],
	"difficulty": "medium",
	"vertical": 1751,
	"horizontal": 1980,
	"bbArea": 3468691
}, {
	"name": "senegal",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "medium",
	"vertical": 487,
	"horizontal": 655,
	"bbArea": 319862
}, {
	"name": "serbia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in the Balkans"],
	"difficulty": "medium",
	"vertical": 437,
	"horizontal": 318,
	"bbArea": 139591
}, {
	"name": "sierra leone",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "medium",
	"vertical": 342,
	"horizontal": 330,
	"bbArea": 113093
}, {
	"name": "slovakia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Central Europe", "Used to be to together with Czech republic"],
	"difficulty": "medium",
	"vertical": 205,
	"horizontal": 410,
	"bbArea": 84489
}, {
	"name": "slovenia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Most northern country of the Balkans"],
	"difficulty": "medium",
	"vertical": 160,
	"horizontal": 239,
	"bbArea": 38353
}, {
	"name": "solomon islands",
	"synonyms": [],
	"continent": "oceania",
	"hints": ["Former British colony", "East of Papua New Guinea"],
	"difficulty": "medium",
	"vertical":632,
	"horizontal":1471,
	"bbArea":930840	
}, {
	"name": "south africa",
	"synonyms": [],
	"continent": "africa",
	"hints": ["The Rainbow Nation", "It's in Southern Africa"],
	"difficulty": "easy",
	"vertical": 2762,
	"horizontal": 2213,
	"bbArea": 6113893
}, {
	"name": "south korea",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Has a crazy northern brother"],
	"difficulty": "medium",
	"vertical": 603,
	"horizontal": 629,
	"bbArea": 379895
}, {
	"name": "south sudan",
	"synonyms": [],
	"continent": "africa",
	"hints": ["Young nation that split with the North"],
	"difficulty": "medium",
	"vertical":970,
	"horizontal":1282,
	"bbArea":1244107
}, {
	"name": "spain",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in South Europe", "On the Iberian peninsula"],
	"difficulty": "medium",
	"vertical": 1361,
	"horizontal": 1100,
	"bbArea": 976120
}, {
	"name": "sri lanka",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's an island nation in the Indian Ocean", "India's teardrop"],
	"difficulty": "medium",
	"vertical": 434,
	"horizontal": 244,
	"bbArea": 106328
}, {
	"name": "sudan",
	"synonyms": ["north sudan"],
	"continent": "africa",
	"hints": ["It's a country in Northeast Africa", "Bordeded by Egypt to the North"],
	"difficulty": "hard",
	"vertical": 1506,
	"horizontal": 1727,
	"bbArea": 2602362
}, {
	"name": "suriname",
	"synonyms": [],
	"continent": "south america",
	"hints": ["Former Dutch colony", "On of the few countries in South America that doen't speak Spanish"],
	"difficulty": "medium",
	"vertical": 464,
	"horizontal": 451,
	"bbArea": 209677
}, {
	"name": "sweden",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Scandinavia"],
	"difficulty": "medium",
	"vertical": 1522,
	"horizontal": 518,
	"bbArea": 789345
}, {
	"name": "switzerland",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in the Alps mountain range"],
	"difficulty": "medium",
	"vertical": 220,
	"horizontal": 336,
	"bbArea": 74199
}, {
	"name": "syria",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in the Middle East", "Bounded by the Mediterranean sea"],
	"difficulty": "medium",
	"vertical": 557,
	"horizontal": 588,
	"bbArea": 327816
}, {
	"name": "taiwan",
	"synonyms": ["republic of china"],
	"continent": "asia",
	"hints": ["It's an island Nation", "Recognized by few other nations"],
	"difficulty": "medium",
	"vertical": 376,
	"horizontal": 374,
	"bbArea": 140900
}, {
	"name": "tajikistan",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in Central Asia"],
	"difficulty": "medium",
	"vertical": 484,
	"horizontal": 655,
	"bbArea": 318015
}, {
	"name": "tanzania",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in East Africa"],
	"difficulty": "medium",
	"vertical": 1194,
	"horizontal": 1206,
	"bbArea": 1442148
}, {
	"name": "thailand",
	"synonyms": ["siam", "kingdom of thailand"],
	"continent": "asia",
	"hints": ["It's in Southeast Asia"],
	"difficulty": "medium",
	"vertical": 1647,
	"horizontal": 864,
	"bbArea": 1424393
}, {
	"name": "the bahamas",
	"synonyms": ["bahamas"],
	"continent": "north america",
	"hints": ["An archipelago in the Carribean", "South East of Florida"],
	"difficulty": "medium",
	"vertical":668,
	"horizontal":678,
	"bbArea":454108	
}, {
	"name": "the gambia",
	"synonyms": ["gambia"],
	"continent": "africa",
	"hints": ["It's in West Africa", "Has an Atlantic coast", "Surrounded Entirely by Senegal"],
	"difficulty": "medium",
	"vertical":83,
	"horizontal":325,
	"bbArea":27293	
}, {
	"name": "trinidad and tobago",
	"synonyms": ["trinidad & tobago"],
	"continent": "north america",
	"hints": ["It's in the Carribean"],
	"difficulty": "medium",
	"vertical": 145,
	"horizontal": 153,
	"bbArea": 22320
}, {
	"name": "tunisia",
	"synonyms": [],
	"continent": "africa",
	"hints": ["On the Mediterranean"],
	"difficulty": "medium",
	"vertical": 791,
	"horizontal": 361,
	"bbArea": 285675
}, {
	"name": "turkey",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Successor to the Ottoman Empire", "Both in Europe and Asia"],
	"difficulty": "medium",
	"vertical": 698,
	"horizontal": 1576,
	"bbArea": 1100455
}, {
	"name": "turkish republic of northern cyprus",
	"synonyms": ["northern cyprus"],
	"continent": "europe",
	"hints": ["Half of an Island in the Mediterranean"],
	"difficulty": "medium",
	"vertical":76,
	"horizontal":179,
	"bbArea":13777	
}, {
	"name": "turkmenistan",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's one of the stans", "It shares the first four letters with a country to the south-west"],
	"difficulty": "medium",
	"vertical": 850,
	"horizontal": 1157,
	"bbArea": 985104
}, {
	"name": "uganda",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's a landlocked country in East Africa"],
	"difficulty": "medium",
	"vertical": 633,
	"horizontal": 605,
	"bbArea": 383276
}, {
	"name": "ukraine",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Eastern Europe", "North of the Black Sea"],
	"difficulty": "medium",
	"vertical": 1431,
	"horizontal": 2500,
	"bbArea": 971249
}, {
	"name": "united arab emirates",
	"synonyms": [],
	"continent": "asia",
	"hints": ["On the Arabian Peninsula", "On the Persian Gulf"],
	"difficulty": "medium",
	"vertical": 384,
	"horizontal": 480,
	"bbArea": 184656
}, {
	"name": "united kingdom",
	"synonyms": ["great britain", "uk", "u.k."],
	"continent": "europe",
	"hints": ["The Island nation of Europe"],
	"difficulty": "medium",
	"vertical": 1216,
	"horizontal": 835,
	"bbArea": 1016334
}, {
	"name": "uruguay",
	"synonyms": [],
	"continent": "south america",
	"hints": ["South of Brazil", "Has an Atlantic coast"],
	"difficulty": "medium",
	"vertical": 542,
	"horizontal": 512,
	"bbArea": 277943
}, {
	"name": "uzbekistan",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in Central Asia", "Bordered by five landlocked countries"],
	"difficulty": "medium",
	"vertical": 931,
	"horizontal": 1334,
	"bbArea": 1242506
}, {
	"name": "vanuatu",
	"synonyms": [],
	"continent": "oceania",
	"hints": ["Formerly and Anglo-French condominium"],
	"difficulty": "medium",
	"vertical": 799,
	"horizontal": 365,
	"bbArea": 292491
}, {
	"name": "venezuela",
	"synonyms": [],
	"continent": "south america",
	"hints": ["On the northern coast of South America"],
	"difficulty": "medium",
	"vertical": 1673,
	"horizontal": 1452,
	"bbArea": 2432070
}, {
	"name": "vietnam",
	"synonyms": [],
	"continent": "asia",
	"hints": ["South of China", "Formerly known as Indo-China"],
	"difficulty": "medium",
	"vertical": 1645,
	"horizontal": 750,
	"bbArea": 1235245
}, {
	"name": "yemen",
	"synonyms": [],
	"continent": "asia",
	"hints": ["On the Arabian peninsula"],
	"difficulty": "medium",
	"vertical": 765,
	"horizontal": 1260,
	"bbArea": 965173
}, {
	"name": "zambia",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in Southern Africa"],
	"difficulty": "medium",
	"vertical": 1094,
	"horizontal": 1286,
	"bbArea": 1409186
}, {
	"name": "zimbabwe",
	"synonyms": [],
	"continent": "africa",
	"hints": ["In Southern Africa"],
	"difficulty": "medium",
	"vertical": 754,
	"horizontal": 837,
	"bbArea": 631832
}]

export default countries;