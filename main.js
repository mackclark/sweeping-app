
var streetSweeper = angular.module('streetSweeper', [])
streetSweeper.controller('sweeperSchedule', ["$scope", function ($scope) {
	$scope.schedule = [

      {
        "property1": "Garfield",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Broadway to Blakeley",
        "index": 1,
        "url": "http://www.somervillema.gov/residents/street-sweeping-schedule"
      },
      {
        "property1": "Kensington",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Broadway to Blakeley",
        "index": 2,
        "url": "http://www.somervillema.gov/residents/street-sweeping-schedule"
      },
      {
        "property1": "Cross",
        "property2": "Street East",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 3,
        "url": "http://www.somervillema.gov/residents/street-sweeping-schedule"
      },
      {
        "property1": "Pennsylvania",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 4,
        "url": "http://www.somervillema.gov/residents/street-sweeping-schedule"
      },
      {
        "property1": "Minnesota",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 5,
        "url": "http://www.somervillema.gov/residents/street-sweeping-schedule"
      },
      {
        "property1": "Connecticut",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 6,
        "url": "http://www.somervillema.gov/residents/street-sweeping-schedule"
      },
      {
        "property1": "Rhode Island",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 7,
        "url": "http://www.somervillema.gov/residents/street-sweeping-schedule"
      },
      {
        "property1": "Wisconsin",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 8,
        "url": "http://www.somervillema.gov/residents/street-sweeping-schedule"
      },
      {
        "property1": "Michigan",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 9,
        "url": "http://www.somervillema.gov/residents/street-sweeping-schedule"
      },
      {
        "property1": "Vermont",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 10,
        "url": "http://www.somervillema.gov/residents/street-sweeping-schedule"
      },
      {
        "property1": "New Hampshire",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 11,
        "url": "http://www.somervillema.gov/sweeper?page=1"
      },
      {
        "property1": "Illinois",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 12,
        "url": "http://www.somervillema.gov/sweeper?page=1"
      },
      {
        "property1": "Indiana",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 13,
        "url": "http://www.somervillema.gov/sweeper?page=1"
      },
      {
        "property1": "Maine",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 14,
        "url": "http://www.somervillema.gov/sweeper?page=1"
      },
      {
        "property1": "Maine",
        "property2": "Terrace",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 15,
        "url": "http://www.somervillema.gov/sweeper?page=1"
      },
      {
        "property1": "Austin",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 16,
        "url": "http://www.somervillema.gov/sweeper?page=1"
      },
      {
        "property1": "Benedict",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 17,
        "url": "http://www.somervillema.gov/sweeper?page=1"
      },
      {
        "property1": "Mt Vernon",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 18,
        "url": "http://www.somervillema.gov/sweeper?page=1"
      },
      {
        "property1": "Wheeler",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 19,
        "url": "http://www.somervillema.gov/sweeper?page=1"
      },
      {
        "property1": "Perkins",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 20,
        "url": "http://www.somervillema.gov/sweeper?page=1"
      },
      {
        "property1": "Mt Pleasant",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 21,
        "url": "http://www.somervillema.gov/sweeper?page=2"
      },
      {
        "property1": "Lincoln",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 22,
        "url": "http://www.somervillema.gov/sweeper?page=2"
      },
      {
        "property1": "Lincoln",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 23,
        "url": "http://www.somervillema.gov/sweeper?page=2"
      },
      {
        "property1": "Arlington",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 24,
        "url": "http://www.somervillema.gov/sweeper?page=2"
      },
      {
        "property1": "Hathorn",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 25,
        "url": "http://www.somervillema.gov/sweeper?page=2"
      },
      {
        "property1": "George",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 26,
        "url": "http://www.somervillema.gov/sweeper?page=2"
      },
      {
        "property1": "Franklin",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 27,
        "url": "http://www.somervillema.gov/sweeper?page=2"
      },
      {
        "property1": "Pearl",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Franklin to Mt. Vernon",
        "index": 28,
        "url": "http://www.somervillema.gov/sweeper?page=2"
      },
      {
        "property1": "Short Pearl",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Short end- Mt Vernon to Crescent Sts",
        "index": 29,
        "url": "http://www.somervillema.gov/sweeper?page=2"
      },
      {
        "property1": "Crescent",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 30,
        "url": "http://www.somervillema.gov/sweeper?page=2"
      },
      {
        "property1": "Pinckney",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 31,
        "url": "http://www.somervillema.gov/sweeper?page=3"
      },
      {
        "property1": "Florence",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 32,
        "url": "http://www.somervillema.gov/sweeper?page=3"
      },
      {
        "property1": "Myrtle",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 33,
        "url": "http://www.somervillema.gov/sweeper?page=3"
      },
      {
        "property1": "Franklin",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 34,
        "url": "http://www.somervillema.gov/sweeper?page=3"
      },
      {
        "property1": "Putnam",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 35,
        "url": "http://www.somervillema.gov/sweeper?page=3"
      },
      {
        "property1": "Puritan",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 36,
        "url": "http://www.somervillema.gov/sweeper?page=3"
      },
      {
        "property1": "Governor Winthrop",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 37,
        "url": "http://www.somervillema.gov/sweeper?page=3"
      },
      {
        "property1": "Bailey",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 38,
        "url": "http://www.somervillema.gov/sweeper?page=3"
      },
      {
        "property1": "Pearl",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Franklin St. to McGrath Hwy",
        "index": 39,
        "url": "http://www.somervillema.gov/sweeper?page=3"
      },
      {
        "property1": "Glen",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Broadway to Pearl St.",
        "index": 40,
        "url": "http://www.somervillema.gov/sweeper?page=3"
      },
      {
        "property1": "Webster",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 41,
        "url": "http://www.somervillema.gov/sweeper?page=4"
      },
      {
        "property1": "Cutter",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 42,
        "url": "http://www.somervillema.gov/sweeper?page=4"
      },
      {
        "property1": "Ellsworth",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 43,
        "url": "http://www.somervillema.gov/sweeper?page=4"
      },
      {
        "property1": "Rush",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Broadway to Comm School",
        "index": 44,
        "url": "http://www.somervillema.gov/sweeper?page=4"
      },
      {
        "property1": "Brook",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 45,
        "url": "http://www.somervillema.gov/sweeper?page=4"
      },
      {
        "property1": "Bonair",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Cross St to McGrath Hwy.",
        "index": 46,
        "url": "http://www.somervillema.gov/sweeper?page=4"
      },
      {
        "property1": "Autumn",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "No Parking Anytime",
        "index": 47,
        "url": "http://www.somervillema.gov/sweeper?page=4"
      },
      {
        "property1": "MacArthur",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 48,
        "url": "http://www.somervillema.gov/sweeper?page=4"
      },
      {
        "property1": "Otis",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Cross St. to McGrath Hwy.",
        "index": 49,
        "url": "http://www.somervillema.gov/sweeper?page=4"
      },
      {
        "property1": "Everett",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 50,
        "url": "http://www.somervillema.gov/sweeper?page=4"
      },
      {
        "property1": "Cross",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 51,
        "url": "http://www.somervillema.gov/sweeper?page=5"
      },
      {
        "property1": "Delaware",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 52,
        "url": "http://www.somervillema.gov/sweeper?page=5"
      },
      {
        "property1": "Flint",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 53,
        "url": "http://www.somervillema.gov/sweeper?page=5"
      },
      {
        "property1": "Flint",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 54,
        "url": "http://www.somervillema.gov/sweeper?page=5"
      },
      {
        "property1": "Gilman",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Cross St. to Aldrich St.",
        "index": 55,
        "url": "http://www.somervillema.gov/sweeper?page=5"
      },
      {
        "property1": "Auburn",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 56,
        "url": "http://www.somervillema.gov/sweeper?page=5"
      },
      {
        "property1": "Chester",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 57,
        "url": "http://www.somervillema.gov/sweeper?page=5"
      },
      {
        "property1": "Alston",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 58,
        "url": "http://www.somervillema.gov/sweeper?page=5"
      },
      {
        "property1": "Tufts",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 59,
        "url": "http://www.somervillema.gov/sweeper?page=5"
      },
      {
        "property1": "Dell",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 60,
        "url": "http://www.somervillema.gov/sweeper?page=5"
      },
      {
        "property1": "Fountain",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 61,
        "url": "http://www.somervillema.gov/sweeper?page=6"
      },
      {
        "property1": "Oliver",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 62,
        "url": "http://www.somervillema.gov/sweeper?page=6"
      },
      {
        "property1": "Rush",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 63,
        "url": "http://www.somervillema.gov/sweeper?page=6"
      },
      {
        "property1": "Knowlton",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 64,
        "url": "http://www.somervillema.gov/sweeper?page=6"
      },
      {
        "property1": "Morton",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 65,
        "url": "http://www.somervillema.gov/sweeper?page=6"
      },
      {
        "property1": "Glen",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Tufts St. to Pearl St.",
        "index": 66,
        "url": "http://www.somervillema.gov/sweeper?page=6"
      },
      {
        "property1": "Temple",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 67,
        "url": "http://www.somervillema.gov/sweeper?page=6"
      },
      {
        "property1": "Ten Hills",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 68,
        "url": "http://www.somervillema.gov/sweeper?page=6"
      },
      {
        "property1": "Melville",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 69,
        "url": "http://www.somervillema.gov/sweeper?page=6"
      },
      {
        "property1": "Crest Hill",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Monday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 70,
        "url": "http://www.somervillema.gov/sweeper?page=6"
      },
      {
        "property1": "Liberty",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Hall Ave. to Broadway",
        "index": 71,
        "url": "http://www.somervillema.gov/sweeper?page=7"
      },
      {
        "property1": "Powder House",
        "property2": "Terrace",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 72,
        "url": "http://www.somervillema.gov/sweeper?page=7"
      },
      {
        "property1": "Kidder",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from College Ave. to Willow Ave.",
        "index": 73,
        "url": "http://www.somervillema.gov/sweeper?page=7"
      },
      {
        "property1": "Francesca",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 74,
        "url": "http://www.somervillema.gov/sweeper?page=7"
      },
      {
        "property1": "Hall",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 75,
        "url": "http://www.somervillema.gov/sweeper?page=7"
      },
      {
        "property1": "Bay State",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 76,
        "url": "http://www.somervillema.gov/sweeper?page=7"
      },
      {
        "property1": "Lowden",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 77,
        "url": "http://www.somervillema.gov/sweeper?page=7"
      },
      {
        "property1": "Mallet",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 78,
        "url": "http://www.somervillema.gov/sweeper?page=7"
      },
      {
        "property1": "Foskett",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 79,
        "url": "http://www.somervillema.gov/sweeper?page=7"
      },
      {
        "property1": "Thorndike",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 80,
        "url": "http://www.somervillema.gov/sweeper?page=7"
      },
      {
        "property1": "Howard",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 81,
        "url": "http://www.somervillema.gov/sweeper?page=8"
      },
      {
        "property1": "Jay",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 82,
        "url": "http://www.somervillema.gov/sweeper?page=8"
      },
      {
        "property1": "Gorham",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 83,
        "url": "http://www.somervillema.gov/sweeper?page=8"
      },
      {
        "property1": "Elmwood",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 84,
        "url": "http://www.somervillema.gov/sweeper?page=8"
      },
      {
        "property1": "Cameron",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 85,
        "url": "http://www.somervillema.gov/sweeper?page=8"
      },
      {
        "property1": "Malvern",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 86,
        "url": "http://www.somervillema.gov/sweeper?page=8"
      },
      {
        "property1": "Yorktown",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 87,
        "url": "http://www.somervillema.gov/sweeper?page=8"
      },
      {
        "property1": "Glendale",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 88,
        "url": "http://www.somervillema.gov/sweeper?page=8"
      },
      {
        "property1": "Mead",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 89,
        "url": "http://www.somervillema.gov/sweeper?page=8"
      },
      {
        "property1": "Claremon",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 90,
        "url": "http://www.somervillema.gov/sweeper?page=8"
      },
      {
        "property1": "Moore",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 91,
        "url": "http://www.somervillema.gov/sweeper?page=9"
      },
      {
        "property1": "Newbury",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 92,
        "url": "http://www.somervillema.gov/sweeper?page=9"
      },
      {
        "property1": "Clarendon",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 93,
        "url": "http://www.somervillema.gov/sweeper?page=9"
      },
      {
        "property1": "Endicott",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 94,
        "url": "http://www.somervillema.gov/sweeper?page=9"
      },
      {
        "property1": "Farragut",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 95,
        "url": "http://www.somervillema.gov/sweeper?page=9"
      },
      {
        "property1": "Garrison",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 96,
        "url": "http://www.somervillema.gov/sweeper?page=9"
      },
      {
        "property1": "Hooker",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 97,
        "url": "http://www.somervillema.gov/sweeper?page=9"
      },
      {
        "property1": "Victoria",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 98,
        "url": "http://www.somervillema.gov/sweeper?page=9"
      },
      {
        "property1": "Woodstock",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 99,
        "url": "http://www.somervillema.gov/sweeper?page=9"
      },
      {
        "property1": "Waterhouse",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 100,
        "url": "http://www.somervillema.gov/sweeper?page=9"
      },
      {
        "property1": "Hamilton",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 101,
        "url": "http://www.somervillema.gov/sweeper?page=10"
      },
      {
        "property1": "Barton",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 102,
        "url": "http://www.somervillema.gov/sweeper?page=10"
      },
      {
        "property1": "Belknap",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 103,
        "url": "http://www.somervillema.gov/sweeper?page=10"
      },
      {
        "property1": "Russell",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 104,
        "url": "http://www.somervillema.gov/sweeper?page=10"
      },
      {
        "property1": "Watson",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 105,
        "url": "http://www.somervillema.gov/sweeper?page=10"
      },
      {
        "property1": "Dickson",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 106,
        "url": "http://www.somervillema.gov/sweeper?page=10"
      },
      {
        "property1": "Hill",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 107,
        "url": "http://www.somervillema.gov/sweeper?page=10"
      },
      {
        "property1": "Fairmount",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 108,
        "url": "http://www.somervillema.gov/sweeper?page=10"
      },
      {
        "property1": "Curtis",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Broadway to Powder House Blvd.",
        "index": 109,
        "url": "http://www.somervillema.gov/sweeper?page=10"
      },
      {
        "property1": "Ware",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 110,
        "url": "http://www.somervillema.gov/sweeper?page=10"
      },
      {
        "property1": "Dow",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 111,
        "url": "http://www.somervillema.gov/sweeper?page=11"
      },
      {
        "property1": "Ossipee",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 112,
        "url": "http://www.somervillema.gov/sweeper?page=11"
      },
      {
        "property1": "Electric",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 113,
        "url": "http://www.somervillema.gov/sweeper?page=11"
      },
      {
        "property1": "Westminster",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 114,
        "url": "http://www.somervillema.gov/sweeper?page=11"
      },
      {
        "property1": "Lovell",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 115,
        "url": "http://www.somervillema.gov/sweeper?page=11"
      },
      {
        "property1": "Packard",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Broadway to Powder House Blvd.",
        "index": 116,
        "url": "http://www.somervillema.gov/sweeper?page=11"
      },
      {
        "property1": "Whitman",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 117,
        "url": "http://www.somervillema.gov/sweeper?page=11"
      },
      {
        "property1": "Mason",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 118,
        "url": "http://www.somervillema.gov/sweeper?page=11"
      },
      {
        "property1": "Burnham",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 119,
        "url": "http://www.somervillema.gov/sweeper?page=11"
      },
      {
        "property1": "Leonard",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 120,
        "url": "http://www.somervillema.gov/sweeper?page=11"
      },
      {
        "property1": "Walker",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 121,
        "url": "http://www.somervillema.gov/sweeper?page=12"
      },
      {
        "property1": "Paulina",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 122,
        "url": "http://www.somervillema.gov/sweeper?page=12"
      },
      {
        "property1": "Corinthian",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 123,
        "url": "http://www.somervillema.gov/sweeper?page=12"
      },
      {
        "property1": "Cady",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 124,
        "url": "http://www.somervillema.gov/sweeper?page=12"
      },
      {
        "property1": "Simpson",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 125,
        "url": "http://www.somervillema.gov/sweeper?page=12"
      },
      {
        "property1": "Irving",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 126,
        "url": "http://www.somervillema.gov/sweeper?page=12"
      },
      {
        "property1": "Wallace",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 127,
        "url": "http://www.somervillema.gov/sweeper?page=12"
      },
      {
        "property1": "Chandler",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 128,
        "url": "http://www.somervillema.gov/sweeper?page=12"
      },
      {
        "property1": "Chapel",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 129,
        "url": "http://www.somervillema.gov/sweeper?page=12"
      },
      {
        "property1": "William",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 130,
        "url": "http://www.somervillema.gov/sweeper?page=12"
      },
      {
        "property1": "Summit",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 131,
        "url": "http://www.somervillema.gov/sweeper?page=13"
      },
      {
        "property1": "Kenwood",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 132,
        "url": "http://www.somervillema.gov/sweeper?page=13"
      },
      {
        "property1": "Billingham",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 133,
        "url": "http://www.somervillema.gov/sweeper?page=13"
      },
      {
        "property1": "Winter",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 134,
        "url": "http://www.somervillema.gov/sweeper?page=13"
      },
      {
        "property1": "Chetwynd",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 135,
        "url": "http://www.somervillema.gov/sweeper?page=13"
      },
      {
        "property1": "Curtis",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 136,
        "url": "http://www.somervillema.gov/sweeper?page=13"
      },
      {
        "property1": "Conwell",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 137,
        "url": "http://www.somervillema.gov/sweeper?page=13"
      },
      {
        "property1": "Raymond",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 138,
        "url": "http://www.somervillema.gov/sweeper?page=13"
      },
      {
        "property1": "Curtis",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Powder House Blvd. to Medford city line",
        "index": 139,
        "url": "http://www.somervillema.gov/sweeper?page=13"
      },
      {
        "property1": "Teele",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 140,
        "url": "http://www.somervillema.gov/sweeper?page=13"
      },
      {
        "property1": "Whitfield",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 141,
        "url": "http://www.somervillema.gov/sweeper?page=14"
      },
      {
        "property1": "Packard",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Powder House Blvd. to Tufts College",
        "index": 142,
        "url": "http://www.somervillema.gov/sweeper?page=14"
      },
      {
        "property1": "Powder House",
        "property2": "Boulevard",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 143,
        "url": "http://www.somervillema.gov/sweeper?page=14"
      },
      {
        "property1": "College",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Dearborn Rd. to Powder House Circle",
        "index": 144,
        "url": "http://www.somervillema.gov/sweeper?page=14"
      },
      {
        "property1": "Warner",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 145,
        "url": "http://www.somervillema.gov/sweeper?page=14"
      },
      {
        "property1": "Bromfield",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 146,
        "url": "http://www.somervillema.gov/sweeper?page=14"
      },
      {
        "property1": "Pearson",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 147,
        "url": "http://www.somervillema.gov/sweeper?page=14"
      },
      {
        "property1": "Dearborn",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Tuesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 148,
        "url": "http://www.somervillema.gov/sweeper?page=14"
      },
      {
        "property1": "Meacham",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 149,
        "url": "http://www.somervillema.gov/sweeper?page=14"
      },
      {
        "property1": "Kingston",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 150,
        "url": "http://www.somervillema.gov/sweeper?page=14"
      },
      {
        "property1": "Campbell",
        "property2": "Park",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 151,
        "url": "http://www.somervillema.gov/sweeper?page=15"
      },
      {
        "property1": "Dover",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "(excluding meters)",
        "index": 152,
        "url": "http://www.somervillema.gov/sweeper?page=15"
      },
      {
        "property1": "Day",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "(excluding meters)",
        "index": 153,
        "url": "http://www.somervillema.gov/sweeper?page=15"
      },
      {
        "property1": "Chester",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "(excluding meters)",
        "index": 154,
        "url": "http://www.somervillema.gov/sweeper?page=15"
      },
      {
        "property1": "Orchard",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 155,
        "url": "http://www.somervillema.gov/sweeper?page=15"
      },
      {
        "property1": "Milton",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 156,
        "url": "http://www.somervillema.gov/sweeper?page=15"
      },
      {
        "property1": "Cottage",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 157,
        "url": "http://www.somervillema.gov/sweeper?page=15"
      },
      {
        "property1": "Russell",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 158,
        "url": "http://www.somervillema.gov/sweeper?page=15"
      },
      {
        "property1": "Windom",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 159,
        "url": "http://www.somervillema.gov/sweeper?page=15"
      },
      {
        "property1": "Elston",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 160,
        "url": "http://www.somervillema.gov/sweeper?page=15"
      },
      {
        "property1": "St James",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Summer to Elm",
        "index": 161,
        "url": "http://www.somervillema.gov/sweeper?page=16"
      },
      {
        "property1": "Willow",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Summer to Elm",
        "index": 162,
        "url": "http://www.somervillema.gov/sweeper?page=16"
      },
      {
        "property1": "Banks",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 163,
        "url": "http://www.somervillema.gov/sweeper?page=16"
      },
      {
        "property1": "Burnside",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 164,
        "url": "http://www.somervillema.gov/sweeper?page=16"
      },
      {
        "property1": "Hancock",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Summer to Elm",
        "index": 165,
        "url": "http://www.somervillema.gov/sweeper?page=16"
      },
      {
        "property1": "Cherry",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Summer to Elm",
        "index": 166,
        "url": "http://www.somervillema.gov/sweeper?page=16"
      },
      {
        "property1": "Holyoke",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 167,
        "url": "http://www.somervillema.gov/sweeper?page=16"
      },
      {
        "property1": "Sartwell",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 168,
        "url": "http://www.somervillema.gov/sweeper?page=16"
      },
      {
        "property1": "Ashland",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 169,
        "url": "http://www.somervillema.gov/sweeper?page=16"
      },
      {
        "property1": "Cedar",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Summer to Elm",
        "index": 170,
        "url": "http://www.somervillema.gov/sweeper?page=16"
      },
      {
        "property1": "Linden",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Summer to Elm",
        "index": 171,
        "url": "http://www.somervillema.gov/sweeper?page=17"
      },
      {
        "property1": "Porter",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Summer to Elm",
        "index": 172,
        "url": "http://www.somervillema.gov/sweeper?page=17"
      },
      {
        "property1": "Craigie",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 173,
        "url": "http://www.somervillema.gov/sweeper?page=17"
      },
      {
        "property1": "Ibbetson",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 174,
        "url": "http://www.somervillema.gov/sweeper?page=17"
      },
      {
        "property1": "Cutter",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Parking allowed on the Odd Side only",
        "index": 175,
        "url": "http://www.somervillema.gov/sweeper?page=17"
      },
      {
        "property1": "Summer",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Cutter Ave to Lowell St.",
        "index": 176,
        "url": "http://www.somervillema.gov/sweeper?page=17"
      },
      {
        "property1": "Hawthorne",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 177,
        "url": "http://www.somervillema.gov/sweeper?page=17"
      },
      {
        "property1": "West",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 178,
        "url": "http://www.somervillema.gov/sweeper?page=17"
      },
      {
        "property1": "Willow",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Summer to Highland",
        "index": 179,
        "url": "http://www.somervillema.gov/sweeper?page=17"
      },
      {
        "property1": "Charnwood",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 180,
        "url": "http://www.somervillema.gov/sweeper?page=17"
      },
      {
        "property1": "Windsor",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 181,
        "url": "http://www.somervillema.gov/sweeper?page=18"
      },
      {
        "property1": "Hancock",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Highland to Summer",
        "index": 182,
        "url": "http://www.somervillema.gov/sweeper?page=18"
      },
      {
        "property1": "Cherry",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Highland to Summer",
        "index": 183,
        "url": "http://www.somervillema.gov/sweeper?page=18"
      },
      {
        "property1": "Hall",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 184,
        "url": "http://www.somervillema.gov/sweeper?page=18"
      },
      {
        "property1": "Aberdeen",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 185,
        "url": "http://www.somervillema.gov/sweeper?page=18"
      },
      {
        "property1": "Cedar",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Highland to Summer",
        "index": 186,
        "url": "http://www.somervillema.gov/sweeper?page=18"
      },
      {
        "property1": "Linden",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Summer to Cedar St.",
        "index": 187,
        "url": "http://www.somervillema.gov/sweeper?page=18"
      },
      {
        "property1": "Brastow",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 188,
        "url": "http://www.somervillema.gov/sweeper?page=18"
      },
      {
        "property1": "Porter",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Summer to Highland",
        "index": 189,
        "url": "http://www.somervillema.gov/sweeper?page=18"
      },
      {
        "property1": "Francis",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 190,
        "url": "http://www.somervillema.gov/sweeper?page=18"
      },
      {
        "property1": "Conwell",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 191,
        "url": "http://www.somervillema.gov/sweeper?page=19"
      },
      {
        "property1": "Eastman",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 192,
        "url": "http://www.somervillema.gov/sweeper?page=19"
      },
      {
        "property1": "Willow",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Highland to Morrison",
        "index": 193,
        "url": "http://www.somervillema.gov/sweeper?page=19"
      },
      {
        "property1": "Lexington",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 194,
        "url": "http://www.somervillema.gov/sweeper?page=19"
      },
      {
        "property1": "Henry",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 195,
        "url": "http://www.somervillema.gov/sweeper?page=19"
      },
      {
        "property1": "Lesley",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 196,
        "url": "http://www.somervillema.gov/sweeper?page=19"
      },
      {
        "property1": "Hancock",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Highland to Lexington",
        "index": 197,
        "url": "http://www.somervillema.gov/sweeper?page=19"
      },
      {
        "property1": "Spencer",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 198,
        "url": "http://www.somervillema.gov/sweeper?page=19"
      },
      {
        "property1": "Hudson",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Cedar to Lowell",
        "index": 199,
        "url": "http://www.somervillema.gov/sweeper?page=19"
      },
      {
        "property1": "Albion",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Cedar to Lowell",
        "index": 200,
        "url": "http://www.somervillema.gov/sweeper?page=19"
      },
      {
        "property1": "Cedar",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Alpine to Highland",
        "index": 201,
        "url": "http://www.somervillema.gov/sweeper?page=20"
      },
      {
        "property1": "Princeton",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 202,
        "url": "http://www.somervillema.gov/sweeper?page=20"
      },
      {
        "property1": "Alpine",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 203,
        "url": "http://www.somervillema.gov/sweeper?page=20"
      },
      {
        "property1": "Crown",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 204,
        "url": "http://www.somervillema.gov/sweeper?page=20"
      },
      {
        "property1": "Crocker",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 205,
        "url": "http://www.somervillema.gov/sweeper?page=20"
      },
      {
        "property1": "Tower",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 206,
        "url": "http://www.somervillema.gov/sweeper?page=20"
      },
      {
        "property1": "Morrison",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 207,
        "url": "http://www.somervillema.gov/sweeper?page=20"
      },
      {
        "property1": "Appleton",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 208,
        "url": "http://www.somervillema.gov/sweeper?page=20"
      },
      {
        "property1": "Newberne",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 209,
        "url": "http://www.somervillema.gov/sweeper?page=20"
      },
      {
        "property1": "Clifton",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 210,
        "url": "http://www.somervillema.gov/sweeper?page=20"
      },
      {
        "property1": "Winslow",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 211,
        "url": "http://www.somervillema.gov/sweeper?page=21"
      },
      {
        "property1": "Grove",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 212,
        "url": "http://www.somervillema.gov/sweeper?page=21"
      },
      {
        "property1": "Willow",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Morrison to Broadway",
        "index": 213,
        "url": "http://www.somervillema.gov/sweeper?page=21"
      },
      {
        "property1": "Kidder",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Boston Ave. to Willow",
        "index": 214,
        "url": "http://www.somervillema.gov/sweeper?page=21"
      },
      {
        "property1": "Josephine",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 215,
        "url": "http://www.somervillema.gov/sweeper?page=21"
      },
      {
        "property1": "Rogers",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 216,
        "url": "http://www.somervillema.gov/sweeper?page=21"
      },
      {
        "property1": "Highland",
        "property2": "Road",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 217,
        "url": "http://www.somervillema.gov/sweeper?page=21"
      },
      {
        "property1": "Pearson",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 218,
        "url": "http://www.somervillema.gov/sweeper?page=21"
      },
      {
        "property1": "Prichard",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 219,
        "url": "http://www.somervillema.gov/sweeper?page=21"
      },
      {
        "property1": "Boston",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 220,
        "url": "http://www.somervillema.gov/sweeper?page=21"
      },
      {
        "property1": "Cedar",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Broadway to Morrison",
        "index": 221,
        "url": "http://www.somervillema.gov/sweeper?page=22"
      },
      {
        "property1": "Clyde",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 222,
        "url": "http://www.somervillema.gov/sweeper?page=22"
      },
      {
        "property1": "Warwick",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 223,
        "url": "http://www.somervillema.gov/sweeper?page=22"
      },
      {
        "property1": "Mossland",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 224,
        "url": "http://www.somervillema.gov/sweeper?page=22"
      },
      {
        "property1": "Acadia",
        "property2": "Park",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 225,
        "url": "http://www.somervillema.gov/sweeper?page=22"
      },
      {
        "property1": "Forest",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "to city line",
        "index": 226,
        "url": "http://www.somervillema.gov/sweeper?page=22"
      },
      {
        "property1": "Miller",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 227,
        "url": "http://www.somervillema.gov/sweeper?page=22"
      },
      {
        "property1": "Sacramento",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "to city line",
        "index": 228,
        "url": "http://www.somervillema.gov/sweeper?page=22"
      },
      {
        "property1": "Eustis",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "to city line",
        "index": 229,
        "url": "http://www.somervillema.gov/sweeper?page=22"
      },
      {
        "property1": "Kent",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "from Beacon to Harrison",
        "index": 230,
        "url": "http://www.somervillema.gov/sweeper?page=22"
      },
      {
        "property1": "Roseland",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 231,
        "url": "http://www.somervillema.gov/sweeper?page=23"
      },
      {
        "property1": "Museum",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 232,
        "url": "http://www.somervillema.gov/sweeper?page=23"
      },
      {
        "property1": "Harrison",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 233,
        "url": "http://www.somervillema.gov/sweeper?page=23"
      },
      {
        "property1": "Ivaloo",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 234,
        "url": "http://www.somervillema.gov/sweeper?page=23"
      },
      {
        "property1": "Morgan",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Wednesday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 235,
        "url": "http://www.somervillema.gov/sweeper?page=23"
      },
      {
        "property1": "Calvin",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 236,
        "url": "http://www.somervillema.gov/sweeper?page=23"
      },
      {
        "property1": "Magnus",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 237,
        "url": "http://www.somervillema.gov/sweeper?page=23"
      },
      {
        "property1": "Rose",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 238,
        "url": "http://www.somervillema.gov/sweeper?page=23"
      },
      {
        "property1": "Lewis",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 239,
        "url": "http://www.somervillema.gov/sweeper?page=23"
      },
      {
        "property1": "Parkdale",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 240,
        "url": "http://www.somervillema.gov/sweeper?page=23"
      },
      {
        "property1": "Leland",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 241,
        "url": "http://www.somervillema.gov/sweeper?page=24"
      },
      {
        "property1": "Dane",
        "property2": "Avenue",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 242,
        "url": "http://www.somervillema.gov/sweeper?page=24"
      },
      {
        "property1": "Dane",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 243,
        "url": "http://www.somervillema.gov/sweeper?page=24"
      },
      {
        "property1": "Skehan",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 244,
        "url": "http://www.somervillema.gov/sweeper?page=24"
      },
      {
        "property1": "Hanson",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 245,
        "url": "http://www.somervillema.gov/sweeper?page=24"
      },
      {
        "property1": "Druham",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 246,
        "url": "http://www.somervillema.gov/sweeper?page=24"
      },
      {
        "property1": "Properzzi",
        "property2": "Way",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Beacon St end",
        "index": 247,
        "url": "http://www.somervillema.gov/sweeper?page=24"
      },
      {
        "property1": "Eliot",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 248,
        "url": "http://www.somervillema.gov/sweeper?page=24"
      },
      {
        "property1": "Park",
        "property2": "Street",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "",
        "index": 249,
        "url": "http://www.somervillema.gov/sweeper?page=24"
      },
      {
        "property1": "Properzzi",
        "property2": "Way",
        "property3": "odd",
        "property4": "1st and 3rd Thursday",
        "property5": "8 a.m. - 12 p.m.",
        "property6": "Taylor St. end",
        "index": 250,
        "url": "http://www.somervillema.gov/sweeper?page=24"
      }
    ]
    $scope.selectedSpot = ""
	$scope.streets = $scope.schedule.results;
	console.log($scope.schedule);
	 
	 $scope.enterParkingSpot = function (street){
	 	$scope.selectedSpot = $('[type="radio"]:checked').val();
	 	console.log($scope.selectedSpot);
        $scope.selectedSpot = jQuery.parseJSON($scope.selectedSpot);
        console.log($scope.selectedSpot.property1);
	 }
}]);
streetSweeper.controller("date", ["$scope", function ($scope) {
	today = new Date();

	var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    $scope.dateToday = day+", "+monthNames[monthIndex]+", "+year
    console.log($scope.dateToday);
    console.log()
    console.log(date)

    //get the day name from the day number
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    
    //format date for finding the instance of the day in that month
    var n = weekday[d.getDay()];
    var newdate = n+", "+monthNames[monthIndex]+" "+day+", "+year;
    
    //format: Day, Month Date, YYYY
    var ordinals = [0, 1, 2, 3, 4, 5];
    var ordinalsVerbose = ["", "first", "second", "third", "fourth", "fifth"]
    var tokens = newdate.split(/[ ,]/);
    // tokens = ["Friday", "", "May", "10", "", "2013"];
    console.log(ordinals[Math.ceil(tokens[3]/7)] + " " + tokens[0]);
    
    var instance = ordinals[Math.ceil(tokens[3]/7)];
    
    console.log(instance);
    thisday = [instance, tokens[0], monthNames[monthIndex],day,year,ordinalsVerbose[instance]+" "+tokens[0]+" of "+monthNames[monthIndex]];
    console.log(thisday);

}])//END DATE \

streetSweeper.controller("map", ["$scope", function ($scope) {
    // $scope.address 
    //   ////////get location
    // $scope.currentLocation = navigator.geolocation.getCurrentPosition(success, error, options);

    // var options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };

    // function success(pos) {
    //   var crd = pos.coords;

    //   console.log('Your current position is:');
    //   console.log('Latitude : ' + crd.latitude);
    //   console.log('Longitude: ' + crd.longitude);
    //   console.log('More or less ' + crd.accuracy + ' meters.');

    //   // //////////translate to map
    // var geocoder = new google.maps.Geocoder();
    // var map;
    // var infowindow = new google.maps.InfoWindow();
    // var marker;
    
    // function initialize() {
    //     console.log('go')
    //   map = new google.maps.Map(document.getElementById('map-canvas'), {
    //         zoom: 8,
    //         center: {lat: crd.latitude, lng: crd.longitude}
    //       });
    //  }

    //   ///////translate to adress
    // //function codeLatLng() {
    //     var lat = crd.latitude;
    //     var lng = crd.longitude;
    //     var latlngStr = [ lat, lng];
    //     var input = lat+lng
    //   // this didn't work even though it came from the google documentation.... so I worked around it
    //   //var latlngStr = input.split(',', 2);
    //   var latlng = new google.maps.LatLng(latlngStr[0], latlngStr[1]);
    //   geocoder.geocode({'location': latlng}, function(results, status) {
    //     if (status == google.maps.GeocoderStatus.OK) {
    //      $scope.address = results
    //       if (results[1]) {
           
    //         map.setZoom(11);
    //         marker = new google.maps.Marker({
    //           position: latlng,
    //           map: map
    //         });
    //         infowindow.setContent(results[1].formatted_address);
    //         infowindow.open(map, marker);
    //         console.log($scope.address)
    //       } else {
    //         window.alert('No results found');
    //       }
    //     } else {
    //       window.alert('Geocoder failed due to: ' + status);
    //     }
    //   });
    // //}
    // initialize();
    
    // //codeLatLng();

    // };

    // function error(err) {
    //   console.warn('ERROR(' + err.code + '): ' + err.message);
    // }; //END
}])
// need to process date to figure out what number day of the month it is
//need to maybe process the dates in the schedule data into some more manageable format
//compare the two to see if street will be swept
//maybe make a map showing which streets will be swept upcoming
