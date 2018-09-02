const countries = [{
	"name": "italy",
	"synonyms": ["italian republic"],
	"continent": "europe",
	"hints": ["Home of pasta", "Home of pizza"],
	"difficulty": "easy",
	"vertical": 1289.414932736013,
	"horizontal": 901.2340615175542,
	"bbArea": 1162064.656811061
}, {
	"name": "albania",
	"synonyms": ["republic of albania"],
	"continent": "europe",
	"hints": ["Its in the Balkans"],
	"difficulty": "hard",
	"vertical": 335.5645457089197,
	"horizontal": 144.30725512611312,
	"bbArea": 48424.39850889532
}, {
	"name": "afghanistan",
	"synonyms": ["islamic republic of afghanistan"],
	"continent": "medium",
	"hints": ["Graveyard of empires"],
	"difficulty": "easy",
	"vertical": 1010.437263798406,
	"horizontal": 1252.7754151943122,
	"bbArea": 1265850.9626828528
}, {
	"name": "morocco",
	"synonyms": ["kingdom of morocco"],
	"continent": "africa",
	"hints": ["It's in North Africa", "South of Spain", "West of Algeria"],
	"difficulty": "easy",
	"vertical": 1613.0567744888726,
	"horizontal": 1437.4217287794906,
	"bbArea": 2318642.8574052644
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
	"vertical": 5060.5163345261235,
	"horizontal": 5065.3492369167625,
	"bbArea": 25633282.55349671
}, {
	"name": "germany",
	"synonyms": ["federal republic of germany"],
	"continent": "europe",
	"hints": ["Krauts"],
	"difficulty": "medium",
	"vertical": 866,
	"horizontal": 583,
	"bbArea": 505666.02495790436
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
	"vertical": 4202.514399593459,
	"horizontal": 3911.272691854968,
	"bbArea": 16437179.808257172
}, {
	"name": "algeria",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in North Africa", "Has a Mediterranean coast"],
	"difficulty": "medium",
	"vertical": 2014.6745289923895,
	"horizontal": 1828.0176134539936,
	"bbArea": 3682860.5243752166
}, {
	"name": "angola",
	"synonyms": ["Republic of Angola"],
	"continent": "africa",
	"hints": ["Has an Atlantic coast", "In Southern Africa"],
	"difficulty": "hard",
	"vertical": 1516.7232455972664,
	"horizontal": 1373.9042725603317,
	"bbArea": 2083832.5474176577
}, {
	"name": "antarctica",
	"synonyms": [],
	"continent": "antarctica",
	"hints": ["The first hint was the really answer!"],
	"difficulty": "medium",
	"vertical": 3278.4525512013092,
	"horizontal": 9.123109439461801e-12,
	"bbArea": 2.990968141669229e-8
}, {
	"name": "argentina",
	"synonyms": ["argentine republic"],
	"continent": "south america",
	"hints": ["Second largest in Latin America"],
	"difficulty": "medium",
	"vertical": 3698.913030416937,
	"horizontal": 2056.015499853483,
	"bbArea": 7605022.523147241
}, {
	"name": "armenia",
	"synonyms": [],
	"continent": "asia",
	"hints": ["South of Georgia", "The first Christian nation"],
	"difficulty": "hard",
	"vertical": 269.8427831601255,
	"horizontal": 264.5284010305928,
	"bbArea": 71381.07995899298
}, {
	"name": "austria",
	"synonyms": [],
	"continent": "europe",
	"hints": ["They speak German here", "It's in the Alps"],
	"difficulty": "medium",
	"vertical": 292.5688657936268,
	"horizontal": 556.0637132525542,
	"bbArea": 162686.9298952923
}, {
	"name": "azerbaijan",
	"synonyms": ["republic of azerbaijan"],
	"continent": "asia",
	"hints": ["A country in the South Caucasus region", "Bounded by the Caspian Sea"],
	"difficulty": "hard",
	"vertical": 388.93779970842905,
	"horizontal": 484.24475633098734,
	"bbArea": 188341.09004771858
}, {
	"name": "bangladesh",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Surrounded by India", "Bounded by the Bay of Bengal"],
	"difficulty": "medium",
	"vertical": 654.364043490351,
	"horizontal": 459.3320047690137,
	"bbArea": 300570.347945181
}, {
	"name": "belarus",
	"synonyms": ["white russia"],
	"continent": "europe",
	"hints": ["Also known as (a certain color) Russia"],
	"difficulty": "medium",
	"vertical": 547.2618848101017,
	"horizontal": 591.17022206307,
	"bbArea": 323524.9299698421
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
	"vertical": 290.3422267884669,
	"horizontal": 153.27172745385565,
	"bbArea": 44501.25465266745
}, {
	"name": "benin",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "hard",
	"vertical": 687.7805268840343,
	"horizontal": 334.22331650416925,
	"bbArea": 229872.28872216688
}, {
	"name": "bhutan",
	"synonyms": ["kingdom of bhutan"],
	"continent": "asia",
	"hints": ["Landlocked nation in the Himalayas", "Sandwiched between China and India"],
	"difficulty": "hard",
	"vertical": 184.83397061108715,
	"horizontal": 328.6423772377447,
	"bbArea": 60744.27549591912
}, {
	"name": "bolivia",
	"synonyms": [],
	"continent": "south america",
	"hints": ["A landlocked country located in western-central South America", "Mostly situated in the Andean mountain range"],
	"difficulty": "medium",
	"vertical": 1469.7138694002126,
	"horizontal": 1337.285396909419,
	"bbArea": 1965426.8951841414
}, {
	"name": "bosnia and herzegovina",
	"synonyms": ["bosnia", "bosnia & herzegovina", "bosnia–herzegovina"],
	"continent": "europe",
	"hints": ["It's in the Balkans"],
	"difficulty": "medium",
	"vertical":303.0412516973485,
	"horizontal":305.3080630100931,
	"bbArea":92520.93756787157
}, {
	"name": "botswana",
	"synonyms": [],
	"continent": "africa",
	"hints": ["Landlocked country in Southern Africa"],
	"difficulty": "medium",
	"vertical": 1012.9856877999517,
	"horizontal": 992.2022150922472,
	"bbArea": 1005086.6432918557
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
	"vertical": 332.5100278632061,
	"horizontal": 498.5471405999342,
	"bbArea": 165771.92361200586
}, {
	"name": "burkina faso",
	"synonyms": [],
	"continent": "africa",
	"hints": ["A landlocked country in West Africa"],
	"difficulty": "hard",
	"vertical": 632.4803854594165,
	"horizontal": 849.5138837128274,
	"bbArea": 537300.868623815
}, {
	"name": "burundi",
	"synonyms": [],
	"continent": "africa",
	"hints": ["A landlocked country in the African Great Lakes region of East Africa"],
	"difficulty": "hard",
	"vertical": 240.21268317034796,
	"horizontal": 205.2192624031716,
	"bbArea": 49296.26966010556
}, {
	"name": "cambodia",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in Southeast Asia"],
	"difficulty": "hard",
	"vertical": 476.8943479982906,
	"horizontal": 569.7059675255218,
	"bbArea": 271689.55593381904
}, {
	"name": "cameroon",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa", "Has an atlantic coast"],
	"difficulty": "medium",
	"vertical": 1270.5805202360416,
	"horizontal": 834.2407674405408,
	"bbArea": 1059970.068296717
}, {
	"name": "canada",
	"synonyms": [],
	"continent": "north america",
	"hints": ["The most northern country of the Americas's", "America's hat"],
	"difficulty": "easy",
	"vertical": 4602.036981817113,
	"horizontal": 1065.8040534084198,
	"bbArea": 4904869.6691561295
}, {
	"name": "central african republic",
	"synonyms": [],
	"continent": "african",
	"hints": ["A landlocked country in Central Africa"],
	"difficulty": "hard",
	"vertical":974.5553360653754,
	"horizontal":1424.7587488850575,
	"bbArea":1388506.241331761	
}, {
	"name": "chad",
	"synonyms": [],
	"continent": "african",
	"hints": ["Landlocked country mostly in the Sahara"],
	"difficulty": "medium",
	"vertical": 1777.9151773880487,
	"horizontal": 1074.5135574506771,
	"bbArea": 1910393.9621007838
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
	"vertical": 1980.9225283434853,
	"horizontal": 1604.6983907580457,
	"bbArea": 3178783.19344915
}, {
	"name": "costa rica",
	"synonyms": ["republic of costa rica"],
	"continent": "north america",
	"hints": ["It's in Central America", "Bordered by Nicaragua to the north", "Bordered by Panama to the southeast"],
	"difficulty": "medium",
	"vertical": 633.239851304466,
	"horizontal": 496.80675333839827,
	"bbArea": 314597.83461106184
}, {
	"name": "croatia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in the Balkans"],
	"difficulty": "medium",
	"vertical": 459.30816376635113,
	"horizontal": 451.5864927285995,
	"bbArea": 207417.36275685971
}, {
	"name": "cuba",
	"synonyms": [],
	"continent": "north america",
	"hints": ["It's in the Carribean", "Kind of communist"],
	"difficulty": "easy",
	"vertical": 382.26023558085217,
	"horizontal": 1104.7062417447196,
	"bbArea": 422285.26821697433
}, {
	"name": "cyprus",
	"synonyms": [],
	"continent": "europe",
	"hints": ["In the Mediterranean sea"],
	"difficulty": "medium",
	"vertical": 62.49860702278702,
	"horizontal": 166.06551072816288,
	"bbArea": 10378.863095037874
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
	"vertical": 353.88684904446654,
	"horizontal": 418.54850554470534,
	"bbArea": 148118.8117994862
}, {
	"name": "dominican republic",
	"synonyms": [],
	"continent": "north america",
	"hints": ["Located in the island of Hispaniola", "In the Carribean"],
	"difficulty": "medium",
	"vertical":265.9931466572127,
	"horizontal":384.7936081296375,
	"bbArea":102352.4626399847
}, {
	"name": "east timor",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Surrounded by Indonesia"],
	"difficulty": "medium",
	"vertical":151.91516628645257,
	"horizontal":361.4014094976405,
	"bbArea":54902.355219992394	
}, {
	"name": "ecuador",
	"synonyms": ["republic of ecuador"],
	"continent": "south america",
	"hints": ["Has a Pacific coast"],
	"difficulty": "medium",
	"vertical": 742.310186589391,
	"horizontal": 1865.5409857386578,
	"bbArea": 1384810.0772138196
}, {
	"name": "egypt",
	"synonyms": ["arab republic of egypt"],
	"continent": "africa",
	"hints": ["Land of the Pharaohs", "Land of the Suez Canal", "The Nile ends here"],
	"difficulty": "easy",
	"vertical": 1074.3792087598533,
	"horizontal": 1155.1558782689704,
	"bbArea": 1241075.4584889098
}, {
	"name": "el salvador",
	"synonyms": [],
	"continent": "north america",
	"hints": ["It's in Central America"],
	"difficulty": "medium",
	"vertical": 143.07869430099637,
	"horizontal": 260.7545133636203,
	"bbArea": 37308.4153051585
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
	"vertical": 627.6746917663444,
	"horizontal": 708.509483755077,
	"bbArea": 444713.4718294997
}, {
	"name": "estonia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Top of the Baltic Nations"],
	"difficulty": "medium",
	"vertical": 239.63272832773578,
	"horizontal": 356.6454585048115,
	"bbArea": 85463.92426720425
}, {
	"name": "ethiopia",
	"synonyms": [],
	"continent": "africa",
	"hints": ["In the Horn of Africa"],
	"difficulty": "medium",
	"vertical": 1276.0968386695083,
	"horizontal": 1610.5498055872367,
	"bbArea": 2055217.515429664
}, {
	"name": "falkland islands",
	"synonyms": [],
	"continent": "south america",
	"hints": ["A war was fought over these islands in 1982", "Part of Great Britain"],
	"difficulty": "medium"
}, {
	"name": "finland",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Not quite Scandinavian"],
	"difficulty": "medium",
	"vertical": 1141.3158314898303,
	"horizontal": 414.239217171667,
	"bbArea": 472777.77658197755
}, {
	"name": "france",
	"synonyms": [],
	"continent": "europe",
	"hints": ["The Hexagon", "It's in Western Europe"],
	"difficulty": "easy",
	"vertical": 996.49,
	"horizontal": 1002.66,
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
	"vertical": 696.0090595383648,
	"horizontal": 644.7815785059461,
	"bbArea": 448773.8200635859
}, {
	"name": "georgia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["South of Russia"],
	"difficulty": "medium",
	"vertical": 281.5161172949304,
	"horizontal": 540.293968092382,
	"bbArea": 152101.46009523838
}, {
	"name": "ghana",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "medium",
	"vertical": 714.5183829027785,
	"horizontal": 485.5039780122007,
	"bbArea": 346901.5172621438
}, {
	"name": "greece",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Southern Europe", "Home of democracy"],
	"difficulty": "medium",
	"vertical": 771.1898225318428,
	"horizontal": 714.2358354945611,
	"bbArea": 550811.407220933
}, {
	"name": "greenland",
	"synonyms": [],
	"continent": "north america",
	"hints": ["Very cold, doesn't do its name justice"],
	"difficulty": "easy",
	"vertical": 2651.0543200935085,
	"horizontal": 724.6574690588548,
	"bbArea": 1921106.313936505
}, {
	"name": "guatemala",
	"synonyms": [],
	"continent": "north america",
	"hints": ["It's in Central America"],
	"difficulty": "medium",
	"vertical": 454.18915758819253,
	"horizontal": 426.12260223460777,
	"bbArea": 193540.26573822496
}, {
	"name": "guinea-bissau",
	"synonyms": ["republic of guinea-bissau"],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "medium",
	"vertical": 194.79096723051492,
	"horizontal": 332.79534601903424,
	"bbArea": 64825.527340861576
}, {
	"name": "guinea",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "medium",
	"vertical": 609.7025872172317,
	"horizontal": 804.7954814593428,
	"bbArea": 490685.8872264989
}, {
	"name": "guyana",
	"synonyms": [],
	"continent": "south america",
	"hints": ["In the north of South America"],
	"difficulty": "medium",
	"vertical": 819.7512526535075,
	"horizontal": 540.4233119101158,
	"bbArea": 443012.68690147466
}, {
	"name": "haiti",
	"synonyms": [],
	"continent": "north america",
	"hints": ["Located in the island of Hispaniola", "In the Carribean"],
	"difficulty": "medium",
	"vertical": 229.4891628443233,
	"horizontal": 297.62610305138605,
	"bbArea": 68301.96522988088
}, {
	"name": "honduras",
	"synonyms": ["republic of honduras"],
	"continent": "north america",
	"hints": ["It's in Central America"],
	"difficulty": "medium",
	"vertical": 493.5804199536173,
	"horizontal": 661.3039202690759,
	"bbArea": 326406.6666833839
}, {
	"name": "hungary",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Landlocked nation in Central Europe"],
	"difficulty": "medium",
	"vertical": 314.4473891693427,
	"horizontal": 498.9667345231382,
	"bbArea": 156898.78695315335
}, {
	"name": "iceland",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Very cold but there's also lava"],
	"difficulty": "medium",
	"vertical": 352.20372036078936,
	"horizontal": 487.47233555909906,
	"bbArea": 171689.5701568778
}, {
	"name": "india",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Second-most populous nation on Earth"],
	"difficulty": "medium",
	"vertical": 3196.8424035159683,
	"horizontal": 2635.38485378806,
	"bbArea": 8424910.0501734
}, {
	"name": "indonesia",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Archipelago on the equator"],
	"difficulty": "medium",
	"vertical": 1871.7159825323176,
	"horizontal": 5082.362449947651,
	"bbArea": 9512739.026589125
}, {
	"name": "iran",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Formerly known as Persia", "A prominent revolution occured here in 1979"],
	"difficulty": "medium",
	"vertical": 1635.9152340407109,
	"horizontal": 1646.6626086783824,
	"bbArea": 2693800.4468621835
}, {
	"name": "iraq",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in the Middle East", "Fought a war with it's Eastern neighbour in the 80's"],
	"difficulty": "medium",
	"vertical": 924.2936304226857,
	"horizontal": 864.2300405298708,
	"bbArea": 798802.3216816991
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
	"vertical": 81.5783049726157,
	"horizontal": 56.0918823344601,
	"bbArea": 4575.880683568661
}, {
	"name": "madagascar",
	"synonyms": [],
	"continent": "africa",
	"hints": ["East of the African continent", "An island nation with unique flora and fauna"],
	"difficulty": "medium",
	"vertical": 1518.3630292155294,
	"horizontal": 792.0624658398871,
	"bbArea": 1202638.3649605727
}, {
	"name": "malawi",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's a landlocked nation in East Africa"],
	"difficulty": "hard",
	"vertical": 862.2178095563629,
	"horizontal": 355.56107619704204,
	"bbArea": 306571.09228211665
}, {
	"name": "malaysia",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in Southeast Asia"],
	"difficulty": "medium",
	"vertical": 723.2583918217899,
	"horizontal": 2164.9355107464976,
	"bbArea": 1565807.7759003972
}, {
	"name": "mali",
	"synonyms": [],
	"continent": "africa",
	"hints": ["landlocked nation in the Sahara"],
	"difficulty": "medium",
	"vertical": 1651.8040932018844,
	"horizontal": 1661.830658386481,
	"bbArea": 2745018.683731172
}, {
	"name": "mauritania",
	"synonyms": [],
	"continent": "africa",
	"hints": ["Mostly in the Sahara", "Has an Atlantic coast"],
	"difficulty": "medium",
	"vertical": 1395.611325092199,
	"horizontal": 1211.0373530722347,
	"bbArea": 1690137.4450572908
}, {
	"name": "mexico",
	"synonyms": ["méxico"],
	"continent": "north america",
	"hints": ["It is bordered to the north by the United States"],
	"difficulty": "easy",
	"vertical": 2020.0317552871975,
	"horizontal": 2951.5827107264085,
	"bbArea": 5962290.804024012
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
	"vertical": 1172.378559775332,
	"horizontal": 2177.873797397425,
	"bbArea": 2553292.545965226
}, {
	"name": "mozambique",
	"synonyms": [],
	"continent": "africa",
	"hints": ["Has an Indian Ocean coast"],
	"difficulty": "medium",
	"vertical": 1822.627852561413,
	"horizontal": 1162.72546320782,
	"bbArea": 2119215.814124943
}, {
	"name": "myanmar",
	"synonyms": ["burma"],
	"continent": "asia",
	"hints": ["It's in Southeast Asia", "Its bordered by India and Bangladesh to its west", "Its bordered by Thailand and Laos to its east", "Its bordered by China to its north and northeast"],
	"difficulty": "medium",
	"vertical": 2084.6574561434563,
	"horizontal": 878.8446826363032,
	"bbArea": 1832090.120449799
}, {
	"name": "namibia",
	"synonyms": [],
	"continent": "africa",
	"hints": ["Has an Atlantic coast"],
	"difficulty": "medium",
	"vertical": 1335.265099888041,
	"horizontal": 1440.1133707278527,
	"bbArea": 1922933.1238150299
}, {
	"name": "nepal",
	"synonyms": [],
	"continent": "asia",
	"hints": ["In the Himalayas", "Has the highest mountain peak on Earth"],
	"difficulty": "medium",
	"vertical": 452.91272802175763,
	"horizontal": 780.2646208135544,
	"bbArea": 353391.7779915292
}, {
	"name": "new caledonia",
	"synonyms": ["nouvelle-calédonie", "nouvelle-caledonie"],
	"continent": "oceania",
	"hints": ["A special collectivity of France"],
	"difficulty": "hard",
	"vertical": 338.8065591421731,
	"horizontal": 809.3393228566264,
	"bbArea": 274209.47115550993
}, {
	"name": "new zealand",
	"synonyms": [],
	"continent": "oceania",
	"hints": ["East of Australia"],
	"difficulty": "medium",
	"vertical": 4898.931262663449,
	"horizontal": 351.663858239775,
	"bbArea": 1722777.069079681
}, {
	"name": "nicaragua",
	"synonyms": [],
	"continent": "north america",
	"hints": ["Largest country in Central America", "It's bordered by Honduras to the north", "It's bordered by Costa Rica to the south", "Has both a Carribean and Pacific coast"],
	"difficulty": "medium",
	"vertical": 480.08346937893265,
	"horizontal": 532.6596037143914,
	"bbArea": 255721.07054921245
}, {
	"name": "nigeria",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa", "Its coast in the south lies on the Gulf of Guinea in the Atlantic Ocean", "Most populous country in Africa"],
	"difficulty": "medium",
	"vertical": 1068.3766366868333,
	"horizontal": 1295.1164886884987,
	"bbArea": 1383672.1983026795
}, {
	"name": "north korea",
	"synonyms": [],
	"continent": "asia",
	"hints": ["The Hermit Kingdom", "Has a southern brother it doesn't really like", "Has a chubby dictator"],
	"difficulty": "medium",
	"vertical": 593.18853816525,
	"horizontal": 527.4562390436458,
	"bbArea": 312880.99538444093
}, {
	"name": "norway",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Scandinavia"],
	"difficulty": "medium",
	"vertical": 1900,
	"horizontal": 745.4507623245572,
	"bbArea": 11209490.785884045
}, {
	"name": "oman",
	"synonyms": [],
	"continent": "asia",
	"hints": ["On the Arabian peninsula"],
	"difficulty": "medium",
	"vertical": 1083.4371551030968,
	"horizontal": 783.4131419565008,
	"bbArea": 848778.9057917297
}, {
	"name": "pakistan",
	"synonyms": [],
	"continent": "asia",
	"hints": [""],
	"difficulty": "medium",
	"vertical": 1485.5616109558207,
	"horizontal": 1436.2578259049385,
	"bbArea": 2133649.489599245
}, {
	"name": "palestine",
	"synonyms": ["palestina"],
	"continent": "asia",
	"hints": ["It's in the Middle East", "It's complicated"],
	"difficulty": "medium",
	"vertical": 148.0219031721724,
	"horizontal": 128.63058568303927,
	"bbArea": 19040.14409895466
}, {
	"name": "panama",
	"synonyms": [],
	"continent": "north america",
	"hints": ["Home to a famous canal", "In Central America"],
	"difficulty": "medium",
	"vertical": 269.4898660987446,
	"horizontal": 645.7008053250328,
	"bbArea": 174009.82356689463
}, {
	"name": "papua new guinea",
	"synonyms": [],
	"continent": "asia",
	"hints": ["North of Australia", "Shares a border with Indonesia"],
	"difficulty": "medium",
	"vertical": 1144.1926700496508,
	"horizontal": 1680.6169680640958,
	"bbArea": 1922949.6160200064
}, {
	"name": "paraguay",
	"synonyms": [],
	"continent": "south america",
	"hints": ["Landlocked nation that borders Brazil"],
	"difficulty": "medium",
	"vertical": 922.9317894710005,
	"horizontal": 882.0635640564248,
	"bbArea": 814084.5036017646
}, {
	"name": "peru",
	"synonyms": [],
	"continent": "south america",
	"hints": ["Land of the Inca's"],
	"difficulty": "medium",
	"vertical": 2035.8321942742205,
	"horizontal": 1406.98508769136,
	"bbArea": 2864385.5383858075
}, {
	"name": "philippines",
	"synonyms": ["the philippines"],
	"continent": "asia",
	"hints": ["Former Spanish colony"],
	"difficulty": "medium",
	"vertical": 1831.0132261214726,
	"horizontal": 1002.1074575723624,
	"bbArea": 1834872.008809958
}, {
	"name": "poland",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Cenral Europe", "It has a Baltic coast"],
	"difficulty": "medium",
	"vertical": 649,
	"horizontal": 641,
	"bbArea": 416586.24265442614
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
	"vertical": 177.9377153623679,
	"horizontal": 86.38694075876016,
	"bbArea": 15371.494875758004
}, {
	"name": "republic of macedonia",
	"synonyms": ["macedonia"],
	"continent": "europe",
	"hints": ["It's in the Balkans"],
	"difficulty": "medium",
	"vertical":169.12112939387512,
	"horizontal":210.74527029531535,
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
	"vertical": 514.2530398006796,
	"horizontal": 699.4193278625819,
	"bbArea": 359678.5154486809
}, {
	"name": "rwanda",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in Central and East Africa", "It's one of the smallest countries on the African continent"],
	"difficulty": "medium",
	"vertical": 196.61078291135047,
	"horizontal": 225.75126072286767,
	"bbArea": 44385.13211394742
}, {
	"name": "saudi arabia",
	"synonyms": [],
	"continent": "asia",
	"hints": ["In the Arabian peninsula"],
	"difficulty": "medium",
	"vertical": 1751.365903443985,
	"horizontal": 1980.563602734978,
	"bbArea": 3468691.5634322185
}, {
	"name": "senegal",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "medium",
	"vertical": 487.67702655327884,
	"horizontal": 655.890392941135,
	"bbArea": 319862.6765743944
}, {
	"name": "serbia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in the Balkans"],
	"difficulty": "medium",
	"vertical": 437.98968230708414,
	"horizontal": 318.71045147483835,
	"bbArea": 139591.8893894118
}, {
	"name": "sierra leone",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in West Africa"],
	"difficulty": "medium",
	"vertical": 342.1012601403004,
	"horizontal": 330.58555085115285,
	"bbArea": 113093.73353035474
}, {
	"name": "slovakia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Central Europe", "Used to be to together with Czech republic"],
	"difficulty": "medium",
	"vertical": 205.90807788793063,
	"horizontal": 410.3240590846053,
	"bbArea": 84489.03831728477
}, {
	"name": "slovenia",
	"synonyms": [],
	"continent": "europe",
	"hints": ["Most northern country of the Balkans"],
	"difficulty": "medium",
	"vertical": 160.15711187000386,
	"horizontal": 239.4743609086479,
	"bbArea": 38353.522010044
}, {
	"name": "solomon islands",
	"synonyms": [],
	"continent": "oceania",
	"hints": ["Former British colony", "East of Papua New Guinea"],
	"difficulty": "medium",
	"vertical":632.7839819429598,
	"horizontal":1471.0240069615625,
	"bbArea":930840.4286588257	
}, {
	"name": "south africa",
	"synonyms": [],
	"continent": "africa",
	"hints": ["The Rainbow Nation", "It's in Southern Africa"],
	"difficulty": "easy",
	"vertical": 2762.008060745779,
	"horizontal": 2213.5684640378154,
	"bbArea": 6113893.940685099
}, {
	"name": "south korea",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Has a crazy northern brother"],
	"difficulty": "medium",
	"vertical": 603.428770313292,
	"horizontal": 629.561296577708,
	"bbArea": 379895.3990307281
}, {
	"name": "south sudan",
	"synonyms": [],
	"continent": "africa",
	"hints": ["Young nation that split with the North"],
	"difficulty": "medium",
	"vertical":970.2830624074201,
	"horizontal":1282.2109291015518,
	"bbArea":1244107.546940917
}, {
	"name": "spain",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in South Europe", "On the Iberian peninsula"],
	"difficulty": "medium",
	"vertical": 1061,
	"horizontal": 920,
	"bbArea": 976120
}, {
	"name": "sri lanka",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's an island nation in the Indian Ocean", "India's teardrop"],
	"difficulty": "medium",
	"vertical": 434.3105367729,
	"horizontal": 244.8215959679609,
	"bbArea": 106328.59875844314
}, {
	"name": "sudan",
	"synonyms": ["north sudan"],
	"continent": "africa",
	"hints": ["It's a country in Northeast Africa", "Bordeded by Egypt to the North"],
	"difficulty": "hard",
	"vertical": 1506.1732865585363,
	"horizontal": 1727.7974177890922,
	"bbArea": 2602362.3152587493
}, {
	"name": "suriname",
	"synonyms": [],
	"continent": "south america",
	"hints": ["Former Dutch colony", "On of the few countries in South America that doen't speak Spanish"],
	"difficulty": "medium",
	"vertical": 464.5804942853228,
	"horizontal": 451.32749831813544,
	"bbArea": 209677.95225319755
}, {
	"name": "sweden",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Scandinavia"],
	"difficulty": "medium",
	"vertical": 1522.6695756435067,
	"horizontal": 518.3954904199816,
	"bbArea": 789345.0414133009
}, {
	"name": "switzerland",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in the Alps mountain range"],
	"difficulty": "medium",
	"vertical": 220.2160287795615,
	"horizontal": 336.9414345187907,
	"bbArea": 74199.90464101675
}, {
	"name": "syria",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in the Middle East", "Bounded by the Mediterranean sea"],
	"difficulty": "medium",
	"vertical": 557.2946889852913,
	"horizontal": 588.229011013999,
	"bbArea": 327816.903745172
}, {
	"name": "taiwan",
	"synonyms": ["republic of china"],
	"continent": "asia",
	"hints": ["It's an island Nation", "Recognized by few other nations"],
	"difficulty": "medium",
	"vertical": 376.15210735249804,
	"horizontal": 374.58276769338886,
	"bbArea": 140900.09744579945
}, {
	"name": "tajikistan",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in Central Asia"],
	"difficulty": "medium",
	"vertical": 484.9590904333051,
	"horizontal": 655.7566886135926,
	"bbArea": 318015.16725560394
}, {
	"name": "tanzania",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in East Africa"],
	"difficulty": "medium",
	"vertical": 1194.8403189157,
	"horizontal": 1206.9797575568532,
	"bbArea": 1442148.0784440248
}, {
	"name": "thailand",
	"synonyms": ["siam", "kingdom of thailand"],
	"continent": "asia",
	"hints": ["It's in Southeast Asia"],
	"difficulty": "medium",
	"vertical": 1647.3680538760646,
	"horizontal": 864.6481137207342,
	"bbArea": 1424393.680387736
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
	"vertical":83.94957019245724,
	"horizontal":325.112678742088,
	"bbArea":27293.06964451672	
}, {
	"name": "trinidad and tobago",
	"synonyms": ["trinidad & tobago"],
	"continent": "north america",
	"hints": ["It's in the Carribean"],
	"difficulty": "medium",
	"vertical": 145.55443252488786,
	"horizontal": 153.34924198980963,
	"bbArea": 22320.661895948444
}, {
	"name": "tunisia",
	"synonyms": [],
	"continent": "africa",
	"hints": ["On the Mediterranean"],
	"difficulty": "medium",
	"vertical": 791.2970578724414,
	"horizontal": 361.0220163113014,
	"bbArea": 285675.65933430934
}, {
	"name": "turkey",
	"synonyms": [],
	"continent": "asia",
	"hints": ["Successor to the Ottoman Empire", "Both in Europe and Asia"],
	"difficulty": "medium",
	"vertical": 698.1942532687104,
	"horizontal": 1576.1457699856055,
	"bbArea": 1100455.9189177365
}, {
	"name": "turkish republic of northern cyprus",
	"synonyms": ["northern cyprus"],
	"continent": "europe",
	"hints": ["Half of an Island in the Mediterranean"],
	"difficulty": "medium",
	"vertical":76.6400423921839,
	"horizontal":179.7693370224784,
	"bbArea":13777.52961021754	
}, {
	"name": "turkmenistan",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's one of the stans", "It shares the first four letters with a country to the south-west"],
	"difficulty": "medium",
	"vertical": 850.7024949724546,
	"horizontal": 1157.9894627026245,
	"bbArea": 985104.5250729348
}, {
	"name": "uganda",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's a landlocked country in East Africa"],
	"difficulty": "medium",
	"vertical": 633.2446254652244,
	"horizontal": 605.2577973808583,
	"bbArea": 383276.2472123483
}, {
	"name": "ukraine",
	"synonyms": [],
	"continent": "europe",
	"hints": ["It's in Eastern Europe", "North of the Black Sea"],
	"difficulty": "medium",
	"vertical": 795.6431480508245,
	"horizontal": 1220.709399835938,
	"bbArea": 971249.0697406983
}, {
	"name": "united arab emirates",
	"synonyms": [],
	"continent": "asia",
	"hints": ["On the Arabian Peninsula", "On the Persian Gulf"],
	"difficulty": "medium",
	"vertical": 384.05068630892765,
	"horizontal": 480.81320021796375,
	"bbArea": 184656.63953010083
}, {
	"name": "united kingdom",
	"synonyms": ["great britain", "uk", "u.k."],
	"continent": "europe",
	"hints": ["The Island nation of Europe"],
	"difficulty": "medium",
	"vertical": 1216.2821563051343,
	"horizontal": 835.6073541452089,
	"bbArea": 1016334.3145241627
}, {
	"name": "uruguay",
	"synonyms": [],
	"continent": "south america",
	"hints": ["South of Brazil", "Has an Atlantic coast"],
	"difficulty": "medium",
	"vertical": 542.2464548455008,
	"horizontal": 512.5769522352541,
	"bbArea": 277943.03518507816
}, {
	"name": "uzbekistan",
	"synonyms": [],
	"continent": "asia",
	"hints": ["It's in Central Asia", "Bordered by five landlocked countries"],
	"difficulty": "medium",
	"vertical": 931.0999630121551,
	"horizontal": 1334.4506812256539,
	"bbArea": 1242506.9799307515
}, {
	"name": "vanuatu",
	"synonyms": [],
	"continent": "oceania",
	"hints": ["Formerly and Anglo-French condominium"],
	"difficulty": "medium",
	"vertical": 799.2960809015723,
	"horizontal": 365.93659959692576,
	"bbArea": 292491.6899162706
}, {
	"name": "venezuela",
	"synonyms": [],
	"continent": "south america",
	"hints": ["On the northern coast of South America"],
	"difficulty": "medium",
	"vertical": 1673.8899090036616,
	"horizontal": 1452.9453760546787,
	"bbArea": 2432070.603311457
}, {
	"name": "vietnam",
	"synonyms": [],
	"continent": "asia",
	"hints": ["South of China", "Formerly known as Indo-China"],
	"difficulty": "medium",
	"vertical": 1645.7646469499346,
	"horizontal": 750.5603628930721,
	"bbArea": 1235245.7106513316
}, {
	"name": "yemen",
	"synonyms": [],
	"continent": "asia",
	"hints": ["On the Arabian peninsula"],
	"difficulty": "medium",
	"vertical": 765.4884864931943,
	"horizontal": 1260.8590424375684,
	"bbArea": 965173.0800767924
}, {
	"name": "zambia",
	"synonyms": [],
	"continent": "africa",
	"hints": ["It's in Southern Africa"],
	"difficulty": "medium",
	"vertical": 1094.9893143591453,
	"horizontal": 1286.9404746679866,
	"bbArea": 1409186.0679777316
}, {
	"name": "zimbabwe",
	"synonyms": [],
	"continent": "africa",
	"hints": ["In Southern Africa"],
	"difficulty": "medium",
	"vertical": 754.1841607933984,
	"horizontal": 837.7699453159987,
	"bbArea": 631832.8231460778
}]

export default countries;