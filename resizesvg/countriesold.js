const countries = [
  {
    "name": "italy",
    "synonyms": ["italian republic"],
    "continent": "europe",
    "hints": ["Home of pasta", "Home of pizza"],
		"difficulty": "easy"    
  },
  {
    "name": "albania",
    "synonyms": ["republic of albania"],
    "continent": "europe",
    "hints": ["Its in the Balkans"],
		"difficulty": "hard"    
  },  
  {
    "name": "afghanistan",
    "synonyms": ["islamic republic of afghanistan"],
    "continent": "medium",
    "hints": ["Graveyard of empires"],
		"difficulty": "easy"    
  },  
  {
    "name": "morocco",
    "synonyms": ["kingdom of morocco"],
    "continent": "africa",
    "hints": ["It's in North Africa", "South of Spain", "West of Algeria"],
		"difficulty": "easy"
  },
  {
    "name": "usa",
    "synonyms": ["u.s.a.", "us", "united states of america"],
    "continent": "north america",
    "hints": ["Uncle Sam", "The worlds superpower"],
		"difficulty": "easy"
  },
  {
    "name": "australia",
    "synonyms": ["commonwealth of australia"],
    "continent": "oceania",
    "hints": ["Down under"],
		"difficulty": "easy"    
  },
  {
    "name": "germany",
    "synonyms": ["federal republic of germany"],
    "continent": "europe",
    "hints": ["Krauts"],
		"difficulty": "medium"
  },
  {
    "name": "russia",
    "synonyms": ["russian federation"],
    "continent": "europe, asia",    
    "hints": ["Largest nation on Earth", "Successor to the Soviet Union"],
		"difficulty": "medium"
  },
  {
    "name": "niger",
    "synonyms": ["republic of niger"],
    "continent": "africa",
    "hints": ["It's in West Africa", "It's a landlocked nation east of Mali"],
		"difficulty": "hard"    
  },
  {
    "name": "netherlands",
    "synonyms": ["the netherlands", "holland"],
    "continent": "europe",    
    "hints": ["It's in Western Europe"],
		"difficulty": "medium"    
  },
  {
    "name": "china",
    "synonyms": ["people's republic of china", "peoples republic of china"],
    "continent": "asia",    
    "hints": ["The Red Dragon", "Most populous nation on Earth"],
		"difficulty": "easy"
  },
  {
    "name": "algeria",
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's in North Africa", "Has a Mediterranean coast"],
		"difficulty": "medium"    
  },
  {
    "name": "angola",
    "synonyms": ["Republic of Angola"],
    "continent": "africa",
    "hints": ["Has an Atlantic coast", "In Southern Africa"],
		"difficulty": "hard"    
  },
  {
    "name": "antarctica",
    "synonyms": [],
    "continent": "antarctica",
    "hints": ["The first hint was the really answer!"],
		"difficulty": "medium"    
  },

  {
    "name": "argentina",
    "synonyms": ["argentine republic"],
    "continent": "south america",
    "hints": ["Second largest in Latin America"],
		"difficulty": "medium"    
  },
  {
    "name": "armenia",
    "synonyms": [],
    "continent": "asia",
    "hints": ["South of Georgia", "The first Christian nation"],
		"difficulty": "hard"    
  },
  {
    "name": "austria",
    "synonyms": [],
    "continent": "europe",
    "hints": ["They speak German here", "It's in the Alps"],
		"difficulty": "medium"    
  },
  {
    "name": "azerbaijan",
    "synonyms": ["republic of azerbaijan"],
    "continent": "asia",
    "hints": ["A country in the South Caucasus region", "Bounded by the Caspian Sea"],
		"difficulty": "hard"
  },
  {
    "name": "bangladesh",
    "synonyms": [],
    "continent": "asia",
    "hints": ["Surrounded by India", "Bounded by the Bay of Bengal"],
		"difficulty": "medium"    
  },
  {
    "name": "belarus",
    "synonyms": ["white russia"],
    "continent": "europe",
    "hints": ["Also known as (a certain color) Russia"],
		"difficulty": "medium"    
  },
  {
    "name": "belgium",
    "synonyms": [],
    "continent": "europe",
    "hints": ["It's in Western Europe", "Has three official languages"],
		"difficulty": "medium"    
  },
  {
    "name": "belize",
    "synonyms": [],
    "continent": "north america",
    "hints": ["Former British colony", "In Central America", "They don't speak Spanish here"],
		"difficulty": "hard"    
  },
  {
    "name": "benin",
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's in West Africa"],
		"difficulty": "hard"    
  },
  {
    "name": "bhutan",
    "synonyms": ["kingdom of bhutan"],
    "continent": "asia",
    "hints": ["Landlocked nation in the Himalayas", "Sandwiched between China and India"],
		"difficulty": "hard"    
  },
  {
    "name": "bolivia",
    "synonyms": [],
    "continent": "south america",
    "hints": ["A landlocked country located in western-central South America", "Mostly situated in the Andean mountain range"],
		"difficulty": "medium"    
  },
  {
    "name": "bosnia and herzegovina",
    "synonyms": ["bosnia", "bosnia & herzegovina", "bosnia–herzegovina"],
    "continent": "europe",
    "hints": ["It's in the Balkans"],
		"difficulty": "medium"    
  },
  {
    "name": "botswana",
    "synonyms": [],
    "continent": "africa",
    "hints": ["Landlocked country in Southern Africa"],
		"difficulty": "medium"    
  },
  {
    "name": "brazil",
    "synonyms": [],
    "continent": "south america",
    "hints": ["They speak Portuguese here", "Largest country of South America"],
		"difficulty": "easy"    
  },
  {
    "name": "bulgaria",
    "synonyms": [],
    "continent": "europe",
    "hints": ["Has a Black Sea coast"],
		"difficulty": "medium"    
  },
  {
    "name": "burkina faso",
    "synonyms": [],
    "continent": "africa",
    "hints": ["A landlocked country in West Africa"],
		"difficulty": "hard"    
  },
  {
    "name": "burundi",
    "synonyms": [],
    "continent": "africa",
    "hints": ["A landlocked country in the African Great Lakes region of East Africa"],
		"difficulty": "hard"    
  },
  {
    "name": "cambodia",
    "synonyms": [],
    "continent": "asia",
    "hints": ["It's in Southeast Asia"],
		"difficulty": "hard"    
  },
  {
    "name": "cameroon",
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's in West Africa", "Has an atlantic coast"],
		"difficulty": "medium"    
  },
  {
    "name": "canada",
    "synonyms": [],
    "continent": "north america",
    "hints": ["The most northern country of the Americas's", "America's hat"],
		"difficulty": "easy"    
  },
  {
    "name": "central african republic",
    "synonyms": [],
    "continent": "african",
    "hints": ["A landlocked country in Central Africa"],
		"difficulty": "hard"    
  },
  {
    "name": "chad",
    "synonyms": [],
    "continent": "african",
    "hints": ["Landlocked country mostly in the Sahara"],
		"difficulty": "medium"    
  },
  {
    "name": "chile",
    "synonyms": ["chili"],
    "continent": "south america",
    "hints": ["Has a Pacific coast"],
		"difficulty": "easy"    
  },
  {
    "name": "colombia",
    "synonyms": ["republic of colombia"],
    "continent": "south america",
    "hints": ["Has both a Pacific and Carribean coast"],
		"difficulty": "medium"    
  },
  {
    "name": "costa rica",
    "synonyms": ["republic of costa rica"],
    "continent": "north america",
    "hints": ["It's in Central America", "Bordered by Nicaragua to the north", "Bordered by Panama to the southeast"],
		"difficulty": "medium"    
  },
  {
    "name": "croatia",
    "synonyms": [],
    "continent": "europe",
    "hints": ["It's in the Balkans"],
		"difficulty": "medium"    
  },
  {
    "name": "cuba",
    "synonyms": [],
    "continent": "north america",
    "hints": ["It's in the Carribean", "Kind of communist"],
		"difficulty": "easy"    
  },
  {
    "name": "cyprus",
    "synonyms": [],
    "continent": "europe",
    "hints": ["In the Mediterranean sea"],
		"difficulty": "medium"    
  },
  {
    "name": "czech republic",
    "synonyms": [],
    "continent": "europe",
    "hints": ["A landlocked country in Central Europe", "bordered by Germany to the west"],
		"difficulty": "medium"    
  },
  {
    "name": "democratic republic of the congo",
    "synonyms": ["congo", "big congo"],
    "continent": "africa",
    "hints": [],
		"difficulty": "medium"    
  },
  {
    "name": "denmark",
    "synonyms": ["czechia"],
    "continent": "europe",
    "hints": ["It's in Scandinavia", "North of Germany"],
		"difficulty": "medium"    
  },
  {
    "name": "dominican republic",
    "synonyms": [],
    "continent": "north america",
    "hints": ["Located in the island of Hispaniola", "In the Carribean"],
		"difficulty": "medium"    
  },
  {
    "name": "east timor",
    "synonyms": [],
    "continent": "asia",
    "hints": ["Surrounded by Indonesia"],
		"difficulty": "medium"    
  },
  {
    "name": "ecuador",
    "synonyms": ["republic of ecuador"],
    "continent": "south america",
    "hints": ["Has a Pacific coast"],
		"difficulty": "medium"    
  },
  {
    "name": "egypt",
    "synonyms": ["arab republic of egypt"],
    "continent": "africa",
    "hints": ["Land of the Pharaohs", "Land of the Suez Canal", "The Nile ends here"],
		"difficulty": "easy"    
  },
  {
    "name": "el salvador",
    "synonyms": [],
    "continent": "north america",
    "hints": ["It's in Central America"],
		"difficulty": "medium"    
  },
  {
    "name": "equatorial guinea",
    "synonyms": [],
    "continent": "africa",
    "hints": ["Has an Atlantic coast"],
		"difficulty": "medium"    
  },
  {
    "name": "eritrea",
    "synonyms": [],
    "continent": "africa",
    "hints": ["In the Horn of Africa"],
		"difficulty": "medium"    
  },
  {
    "name": "estonia",
    "synonyms": [],
    "continent": "europe",
    "hints": ["Top of the Baltic Nations"],
		"difficulty": "medium"    
  },
  {
    "name": "ethiopia",
    "synonyms": [],
    "continent": "africa",
    "hints": ["In the Horn of Africa"],
		"difficulty": "medium"    
  },
  {
    "name": "falkland islands",
    "synonyms": [],
    "continent": "south america",
    "hints": ["A war was fought over these islands in 1982", "Part of Great Britain"],
		"difficulty": "medium"    
  },
  {
    "name": "finland",
    "synonyms": [],
    "continent": "europe",
    "hints": ["Not quite Scandinavian"],
		"difficulty": "medium"    
  },
  {
    "name": "france",
    "synonyms": [],
    "continent": "europe",
    "hints": ["The Hexagon", "It's in Western Europe"],
		"difficulty": "easy"    
  },
  {
    "name": "french polynesia",
    "synonyms": [],
    "continent": "oceania",
    "hints": ["An archipelago in the Pacific Ocean"],
		"difficulty": "hard"    
  },
  {
    "name": "gabon",
    "synonyms": ["gabonese republic"],
    "continent": "africa",
    "hints": [],
		"difficulty": "medium"    
  },
  {
    "name": "georgia",
    "synonyms": [],
    "continent": "europe",
    "hints": ["South of Russia"],
		"difficulty": "medium"    
  },
  {
    "name": "ghana",
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's in West Africa"],
		"difficulty": "medium"    
  },
  {
    "name": "greece",
    "synonyms": [],
    "continent": "europe",
    "hints": ["It's in Southern Europe", "Home of democracy"],
		"difficulty": "medium"    
  },
  {
    "name": "greenland",
    "synonyms": [],
    "continent": "north america",
    "hints": ["Very cold, doesn't do its name justice"],
		"difficulty": "easy"    
  },
  {
    "name": "guatemala",
    "synonyms": [],
    "continent": "north america",
    "hints": ["It's in Central America"],
		"difficulty": "medium"    
  },
  {
    "name": "guinea-bissau",
    "synonyms": ["republic of guinea-bissau"],
    "continent": "africa",
    "hints": ["It's in West Africa"],
		"difficulty": "medium"    
  },
  {
    "name": "guinea",
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's in West Africa"],
		"difficulty": "medium"    
  },
  {
    "name": "guyana",
    "synonyms": [],
    "continent": "south america",
    "hints": ["In the north of South America"],
		"difficulty": "medium"    
  },
  {
    "name": "haiti",
    "synonyms": [],
    "continent": "north america",
    "hints": ["Located in the island of Hispaniola", "In the Carribean"],
		"difficulty": "medium"    
  },
  {
    "name": "honduras",
    "synonyms": ["republic of honduras"],
    "continent": "north america",
    "hints": ["It's in Central America"],
		"difficulty": "medium"    
  },
  {
    "name": "hungary",
    "synonyms": [],
    "continent": "europe",
    "hints": ["Landlocked nation in Central Europe"],
		"difficulty": "medium"    
  },
  {
    "name": "iceland",
    "synonyms": [],
    "continent": "europe",
    "hints": ["Very cold but there's also lava"],
		"difficulty": "medium"    
  },
  {
    "name": "india",
    "synonyms": [],
    "continent": "asia",
    "hints": ["Second-most populous nation on Earth"],
		"difficulty": "medium"    
  },
  {
    "name": "indonesia",
    "synonyms": [],
    "continent": "asia",
    "hints": ["Archipelago on the equator"],
		"difficulty": "medium"    
  },
  {
    "name": "iran",
    "synonyms": [],
    "continent": "asia",
    "hints": ["Formerly known as Persia", "A prominent revolution occured here in 1979"],
		"difficulty": "medium"    
  },
  {
    "name": "iraq",
    "synonyms": [],
    "continent": "asia",
    "hints": ["It's in the Middle East", "Fought a war with it's Eastern neighbour in the 80's"],
		"difficulty": "medium"    
  },
  {
    "name": "ireland",
    "synonyms": ["republic of ireland"],
    "continent": "europe",
    "hints": ["Only shares a border with the UK"],
		"difficulty": "medium"    
  },
  {
    "name": "israel",
    "synonyms": [],
    "continent": "asia",
    "hints": ["The Holy Land", "Bounded by the Mediterranean sea"],
		"difficulty": "medium"    
  },
  {
    "name": "ivory coast",
    "synonyms": ["cote d'ivoire", "cote divoire"],
    "continent": "africa",
    "hints": ["It's in West Africa"],
		"difficulty": "medium"    
  },
  {
    "name": "japan",
    "synonyms": [],
    "continent": "asia",
    "hints": ["Land of the rising sun", "Konichiwa"],
		"difficulty": "medium"    
  },
  {
    "name": "jordan",
    "synonyms": ["kingdom of jordan"],
    "continent": "asia",
    "hints": ["It's in the Middle East"],
		"difficulty": "medium"    
  },
  {
    "name": "kazakhstan",
    "synonyms": [],
    "continent": "asia",
    "hints": ["The largest -stan"],
		"difficulty": "medium"    
  },
  {
    "name": "kenya",
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's in East Africa"],
		"difficulty": "medium"    
  },
  {
    "name": "kosovo",
    "synonyms": [],
    "continent": "europe",
    "hints": ["Small nation in the Balkans"],
		"difficulty": "medium"    
  },
  {
    "name": "kuwait",
    "synonyms": [],
    "continent": "asia",
    "hints": ["On the Persian gulf"],
		"difficulty": "medium"    
  },
  {
    "name": "kyrgyzstan",
    "synonyms": [],
    "continent": "asia",
    "hints": ["It's in central Asia"],
		"difficulty": "hard"    
  },
  {
    "name": "laos",
    "synonyms": [],
    "continent": "asia",
    "hints": ["The only landlocked country in Southeast Asia"],
		"difficulty": "medium"    
  },
  {
    "name": "latvia",
    "synonyms": [],
    "continent": "europe",
    "hints": ["One of the Baltic nations"],
		"difficulty": "medium"    
  },
  {
    "name": "lebanon",
    "synonyms": [],
    "continent": "asia",
    "hints": ["It's in the Middle East", "Bounded by the Mediterranean sea"],
    "difficulty": "medium"
  },  
  {
    "name": "liberia",
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's in West Africa"],
		"difficulty": "hard"    
  },
  {
    "name": "libya",
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's in North Africa", "Bounded by the Mediterranean sea", "West of Egypt"],
		"difficulty": "medium"    
  },

  {
    "name": "lithuania",
    "synonyms": [],
    "continent": "europe",
    "hints": ["One of the Baltic nations"],
		"difficulty": "medium"    
  },
  {
    "name": "luxembourg",
    "synonyms": ["luxemburg"],
    "continent": "europe",
    "hints": ["Small nation in West Europe", "Sandwiched between Belgium, France and Germany"],
		"difficulty": "hard"    
  },
  {
    "name": "madagascar",
    "synonyms": [],
    "continent": "africa",
    "hints": ["East of the African continent", "An island nation with unique flora and fauna"],
		"difficulty": "medium"    
  },
  {
    "name": "malawi",
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's a landlocked nation in East Africa"],
		"difficulty": "hard"    
  },
  {
    "name": "malaysia",
    "synonyms": [],
    "continent": "asia",
    "hints": ["It's in Southeast Asia"],
		"difficulty": "medium"    
  },
  {
    "name": "mali",
    "synonyms": [],
    "continent": "africa",
    "hints": ["landlocked nation in the Sahara"],
		"difficulty": "medium"    
  },
  {
    "name": "mauritania",
    "synonyms": [],
    "continent": "africa",
    "hints": ["Mostly in the Sahara", "Has an Atlantic coast"],
		"difficulty": "medium"    
  },
  {
    "name": "mexico",
    "synonyms": ["méxico"],
    "continent": "north america",
    "hints": ["It is bordered to the north by the United States"],
		"difficulty": "easy"    
  },
  {
    "name": "moldova",
    "synonyms": [],
    "continent": "europe",
    "hints": ["Landlocked nation in Eastern Europe"],
		"difficulty": "medium"    
  },
  {
    "name": "mongolia",
    "synonyms": [],
    "continent": "asia",
    "hints": ["It is sandwiched between China to the south and Russia to the north"],
		"difficulty": "medium"    
  },
  {
    "name": "mozambique",
    "synonyms": [],
    "continent": "africa",
    "hints": ["Has an Indian Ocean coast"],
		"difficulty": "medium"    
  },
  {
    "name": "myanmar",
    "synonyms": ["burma"],
    "continent": "asia",
    "hints": ["It's in Southeast Asia", "Its bordered by India and Bangladesh to its west", "Its bordered by Thailand and Laos to its east", "Its bordered by China to its north and northeast"],
		"difficulty": "medium"    
  },
  {
    "name": "namibia",
    "synonyms": [],
    "continent": "africa",
    "hints": ["Has an Atlantic coast"],
		"difficulty": "medium"    
  },
  { 
    "name": "nepal",
    "synonyms": [],
    "continent": "asia",
    "hints": ["In the Himalayas", "Has the highest mountain peak on Earth"],
		"difficulty": "medium"    
  },  
  { 
    "name": "new caledonia",   
  "synonyms": ["nouvelle-calédonie", "nouvelle-caledonie"],
    "continent": "oceania",
    "hints": ["A special collectivity of France"],
		"difficulty": "hard"    
  },
  { 
    "name": "new zealand",  
    "synonyms": [],
    "continent": "oceania",
    "hints": ["East of Australia"],    
    "difficulty": "medium"    
  },  
  { 
    "name": "nicaragua",
  "synonyms": [],
    "continent": "north america",
    "hints": ["Largest country in Central America", "It's bordered by Honduras to the north", "It's bordered by Costa Rica to the south", "Has both a Carribean and Pacific coast"],
		"difficulty": "medium"    
  },  
  { 
    "name": "nigeria",
  "synonyms": [],
    "continent": "africa",
    "hints": ["It's in West Africa", "Its coast in the south lies on the Gulf of Guinea in the Atlantic Ocean", "Most populous country in Africa"],
		"difficulty": "medium"    
  },  
  { 
    "name": "north korea",
  "synonyms": [],
    "continent": "asia",
    "hints": ["The Hermit Kingdom", "Has a southern brother it doesn't really like", "Has a chubby dictator"],
		"difficulty": "medium"    
  },  
  { 
    "name": "norway",
  "synonyms": [],
    "continent": "europe",
    "hints": ["It's in Scandinavia"],
		"difficulty": "medium"    
  },  
  { 
    "name": "oman",
  "synonyms": [],
    "continent": "asia",
    "hints": ["On the Arabian peninsula"],
		"difficulty": "medium"    
  },  
  { 
    "name": "pakistan",
   "synonyms": [],
    "continent": "asia",
    "hints": [""],
		"difficulty": "medium"    
  },
  { 
    "name": "palestine",
    "synonyms": ["palestina"],
    "continent": "asia",
    "hints": ["It's in the Middle East", "It's complicated"],
		"difficulty": "medium"    
  },  
  { 
    "name": "panama",   
    "synonyms": [],
    "continent": "north america",
    "hints": ["Home to a famous canal", "In Central America"],
		"difficulty": "medium"    
  },  
  { 
    "name": "papua new guinea",
  "synonyms": [],
    "continent": "asia",
    "hints": ["North of Australia", "Shares a border with Indonesia"],
		"difficulty": "medium"    
  },  
  { 
    "name": "paraguay",
    "synonyms": [],
    "continent": "south america",
    "hints": ["Landlocked nation that borders Brazil"],
		"difficulty": "medium"    
  },
  { 
    "name": "peru",
  "synonyms": [],
    "continent": "south america",
    "hints": ["Land of the Inca's"],
		"difficulty": "medium"    
  },  
  { 
    "name": "philippines",
    "synonyms": ["the philippines"],
    "continent": "asia",
    "hints": ["Former Spanish colony"],
		"difficulty": "medium"    
  },  
  { 
    "name": "poland",
    "synonyms": [],
    "continent": "europe",
    "hints": ["It's in Cenral Europe", "It has a Baltic coast"],
		"difficulty": "medium"    
  },  
  { 
    "name": "portugal",
    "synonyms": [],
    "continent": "europe",
    "hints": ["It's in South Europe", "On the Iberian peninsula"],
		"difficulty": "medium"    
  },
  { 
    "name": "qatar",
    "synonyms": [],
    "continent": "asia",
    "hints": ["It's in the Persian Gulf"],
		"difficulty": "medium"    
  },  
  { 
    "name": "republic of macedonia",
    "synonyms": ["macedonia"],
    "continent": "europe",
    "hints": ["It's in the Balkans"],
		"difficulty": "medium"    
  },  
  { 
    "name": "republic of the congo",
    "synonyms": ["the congo", "congo"],
    "continent": "africa",
    "hints": ["It's in Central Africa", "Bounded by the Atlantic Ocean"],
		"difficulty": "hard"    
  },  
  { 
    "name": "romania",
   "synonyms": [],
    "continent": "europe",
    "hints": ["Bounded by the Black Sea to the east"],
		"difficulty": "medium"    
  },  
  { 
    "name": "rwanda",    
   "synonyms": [],
    "continent": "africa",
    "hints": ["It's in Central and East Africa", "It's one of the smallest countries on the African continent"],
		"difficulty": "medium"    
  },  
  { 
    "name": "saudi arabia",    
    "synonyms": [],
    "continent": "asia",
    "hints": ["In the Arabian peninsula"],
		"difficulty": "medium"    
  },  
  { 
    "name": "senegal",    
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's in West Africa"],
		"difficulty": "medium"    
  },  
  { 
    "name": "serbia",    
    "synonyms": [],
    "continent": "europe",
    "hints": ["It's in the Balkans"],
		"difficulty": "medium"    
  },  
  { 
    "name": "sierra leone",    
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's in West Africa"],
		"difficulty": "medium"    
  },  
  { 
    "name": "slovakia",    
  "synonyms": [],
    "continent": "europe",
    "hints": ["It's in Central Europe", "Used to be to together with Czech republic"],
		"difficulty": "medium"    
  },  
  { 
    "name": "slovenia",   
  "synonyms": [],
    "continent": "europe",
    "hints": ["Most northern country of the Balkans"],
		"difficulty": "medium"    
  },  
  { 
    "name": "solomon islands",    
  "synonyms": [],
    "continent": "oceania",
    "hints": ["Former British colony", "East of Papua New Guinea"],
		"difficulty": "medium"    
  },  

  { 
    "name": "south africa",    
  "synonyms": [],
    "continent": "africa",
    "hints": ["The Rainbow Nation", "It's in Southern Africa"],
		"difficulty": "easy"    
  },  
  { 
    "name": "south korea",    
  "synonyms": [],
    "continent": "asia",
    "hints": ["Has a crazy northern brother"],
		"difficulty": "medium"    
  },  
  { 
    "name": "south sudan",    
  "synonyms": [],
    "continent": "africa",
    "hints": ["Young nation that split with the North"],
		"difficulty": "medium"    
  },  
  { 
    "name": "spain",    
  "synonyms": [],
    "continent": "europe",
    "hints": ["It's in South Europe", "On the Iberian peninsula"],
		"difficulty": "medium"    
  },  
  { 
    "name": "sri lanka",    
  "synonyms": [],
    "continent": "asia",
    "hints": ["It's an island nation in the Indian Ocean", "India's teardrop"],
		"difficulty": "medium"    
  },  
  { 
    "name": "sudan",    
  "synonyms": ["north sudan"],
    "continent": "africa",
    "hints": ["It's a country in Northeast Africa", "Bordeded by Egypt to the North"],
		"difficulty": "hard"    
  },  
  { 
    "name": "suriname",    
  "synonyms": [],
    "continent": "south america",
    "hints": ["Former Dutch colony", "On of the few countries in South America that doen't speak Spanish"],
		"difficulty": "medium"    
  },  
  { 
    "name": "sweden",   
  "synonyms": [],
    "continent": "europe",
    "hints": ["It's in Scandinavia"],
		"difficulty": "medium"    
  },  
  { 
    "name": "switzerland",    
  "synonyms": [],
    "continent": "europe",
    "hints": ["It's in the Alps mountain range"],
		"difficulty": "medium"    
  },  
  { 
    "name": "syria",    
  "synonyms": [],
    "continent": "asia",
    "hints": ["It's in the Middle East", "Bounded by the Mediterranean sea"],
		"difficulty": "medium"    
  },  
  { 
    "name": "taiwan",    
    "synonyms": ["republic of china"],
    "continent": "asia",
    "hints": ["It's an island Nation", "Recognized by few other nations"],
		"difficulty": "medium"    
  },  
  { 
    "name": "tajikistan",    
  "synonyms": [],
    "continent": "asia",
    "hints": ["It's in Central Asia"],
		"difficulty": "medium"    
  },  
  { 
    "name": "tanzania",    
  "synonyms": [],
    "continent": "africa",
    "hints": ["It's in East Africa"],
		"difficulty": "medium"    
  },  
  { 
    "name": "thailand",    
  "synonyms": ["siam", "kingdom of thailand"],
    "continent": "asia",
    "hints": ["It's in Southeast Asia"],
		"difficulty": "medium"    
  },  
  { 
    "name": "the bahamas",    
  "synonyms": ["bahamas"],
    "continent": "north america",
    "hints": ["An archipelago in the Carribean", "South East of Florida"],
		"difficulty": "medium"    
  },  
  { 
    "name": "the gambia",    
    "synonyms": ["gambia"],
    "continent": "africa",
    "hints": ["It's in West Africa", "Has an Atlantic coast", "Surrounded Entirely by Senegal"],
		"difficulty": "medium"    
  },  
  { 
    "name": "trinidad and tobago",    
    "synonyms": ["trinidad & tobago"],
    "continent": "north america",
    "hints": ["It's in the Carribean"],
		"difficulty": "medium"    
  },  
  { 
    "name": "tunisia",    
    "synonyms": [],
    "continent": "africa",
    "hints": ["On the Mediterranean"],
		"difficulty": "medium"    
  },  
  { 
    "name": "turkey",    
    "synonyms": [],
    "continent": "asia",
    "hints": ["Successor to the Ottoman Empire", "Both in Europe and Asia"],
		"difficulty": "medium"    
  },
  { 
    "name": "turkish republic of northern cyprus",    
    "synonyms": ["northern cyprus"],
    "continent": "europe",
    "hints": ["Half of an Island in the Mediterranean"],
		"difficulty": "medium"    
  },
  {
    "name": "turkmenistan",    
    "synonyms": [],
    "continent": "asia",
    "hints": ["It's one of the stans", "It shares the first four letters with a country to the south-west"],
		"difficulty": "medium"    
  },  
  { 
    "name": "uganda",    
    "synonyms": [],
    "continent": "africa",
    "hints": ["It's a landlocked country in East Africa"],
		"difficulty": "medium"    
  },  
  { 
    "name": "ukraine",    
    "synonyms": [],
    "continent": "europe",
    "hints": ["It's in Eastern Europe","North of the Black Sea"],
		"difficulty": "medium"    
  },  
  {
    "name": "united arab emirates",    
  "synonyms": [],
    "continent": "asia",
    "hints": ["On the Arabian Peninsula","On the Persian Gulf"],
		"difficulty": "medium"    
  },  
  { 
    "name": "united kingdom",    
  "synonyms": ["great britain", "uk", "u.k."],
    "continent": "europe",
    "hints": ["The Island nation of Europe"],
		"difficulty": "medium"    
  }, 
  { 
    "name": "uruguay",   
  "synonyms": [],
    "continent": "south america",
    "hints": ["South of Brazil", "Has an Atlantic coast"],
		"difficulty": "medium"    
  },  
  { 
    "name": "uzbekistan",   
  "synonyms": [],
    "continent": "asia",
    "hints": ["It's in Central Asia", "Bordered by five landlocked countries"],
		"difficulty": "medium"    
  },  
  { 
    "name": "vanuatu",   
  "synonyms": [],
    "continent": "oceania",
    "hints": ["Formerly and Anglo-French condominium"],
		"difficulty": "medium"    
  },  

  { 
    "name": "venezuela",    
  "synonyms": [],
    "continent": "south america",
    "hints": ["On the northern coast of South America"],
		"difficulty": "medium"    
  },  
  { 
    "name": "vietnam",    
  "synonyms": [],
    "continent": "asia",
    "hints": ["South of China", "Formerly known as Indo-China"],
		"difficulty": "medium"
  },
  { 
    "name": "yemen",    
  "synonyms": [],
    "continent": "asia",
    "hints": ["On the Arabian peninsula"],
		"difficulty": "medium"    
  },  
  { 
    "name": "zambia",    
  "synonyms": [],
    "continent": "africa",
    "hints": ["It's in Southern Africa"],
		"difficulty": "medium"    
  },  
  { 
    "name": "zimbabwe",
  "synonyms": [],
    "continent": "africa",
    "hints": ["In Southern Africa"],
		"difficulty": "medium"    
  }
]

export default countries;