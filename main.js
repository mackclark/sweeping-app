
angular.module('streetSweeper', ['geolocation'])
.controller('sweeperSchedule', ["$scope", '$http', function ($scope, $http) {
	$http.get('sweeperschedule.json').
        success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
            $scope.schedule = data.results.collection1;
      }).
        error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('oops')
      });
    $scope.selectedSpot = "";
    //I don't know why I have to do this to get this to work but apparently I do
	$scope.streets = $scope.schedule;
	$scope.chooseStreet = false;
  $scope.showList =function (){
    $scope.chooseStreet = true;
  }
	 
	 $scope.enterParkingSpot = function (street){
	 	$scope.selectedSpot = $('[type="radio"]:checked').val();
	 	console.log($scope.selectedSpot);
        $scope.selectedSpot = jQuery.parseJSON($scope.selectedSpot);
        console.log($scope.selectedSpot.property1);
	 }
}])
.controller("date", ["$scope", function ($scope) {
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
.controller('geoCtrl', ['$scope', 'geolocation', function ($scope,geolocation) {
    var geocoder = new google.maps.Geocoder();
    var map;
    var infowindow = new google.maps.InfoWindow();
    var marker;
    $scope.address
    geolocation.getLocation().then(function(data){
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
      console.log($scope.coords)

      initialize(data.coords.latitude, data.coords.longitude);
      codeLatLng(data.coords.latitude, data.coords.longitude);
     

        });

      

    function initialize(latitude, longitude) {
          console.log('1')
        map = new google.maps.Map(document.getElementById('map-canvas'), {
              zoom: 8,
              center: {lat: latitude, lng: longitude}
            });
       }
      ///////translate to adress
      function codeLatLng(latitude, longitude) {
          console.log('2')
          var lat = latitude;
          var lng = longitude;
          var latlngStr = [ lat, lng];
          var input = lat+lng
            // this didn't work even though it came from the google documentation.... so I worked around it
            //var latlngStr = input.split(',', 2);
          var latlng = new google.maps.LatLng(latlngStr[0], latlngStr[1]);
          geocoder.geocode({'location': latlng}, function(results,          status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                   
                    map.setZoom(11);
                    marker = new google.maps.Marker({
                      position: latlng,
                      map: map
                });
                    infowindow.setContent(results[1].formatted_address);
                    infowindow.open(map, marker);
                   $scope.address = results;
                    console.log($scope.address)
                    var houseNumber = Number($scope.address[0].address_components[0].long_name)
                    console.log(houseNumber%2)
                   if(houseNumber%2 != 0){
                      $scope.side = 'odd';
                    }
                    else{
                      $scope.side = 'even';
                    }
                    $scope.$apply($scope.side);
                    $scope.$apply($scope.address);
                } else {
                    window.alert('No results found');
                  }
            } else {
                  window.alert('Geocoder failed due to: ' + status);
                }
          });
      }


    }])




// need to process date to figure out what number day of the month it is
//need to maybe process the dates in the schedule data into some more manageable format
//compare the two to see if street will be swept
//maybe make a map showing which streets will be swept upcoming

//http://blog.challengepost.com/post/124154812036/no-api-no-problem-fake-it-with-browser?utm_source=ChallengePost+New+Competitions+Newsletter&utm_campaign=312e982097-Hacker_07_16_15&utm_medium=email&utm_term=0_294421ffd0-312e982097-225284717
