
var streetSweeper = angular.module('streetSweeper', [])
streetSweeper.controller('sweeperSchedule', ["$scope", '$http', function ($scope, $http) {
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
  
}])

streetSweeper.controller("map", ["$scope", function ($scope) {
      ////////get location
    $scope.currentLocation = navigator.geolocation.getCurrentPosition(success, error, options);

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      console.log('Your current position is:');
      console.log('Latitude : ' + crd.latitude);
      console.log('Longitude: ' + crd.longitude);
      console.log('More or less ' + crd.accuracy + ' meters.');

      // //////////translate to map
    var geocoder = new google.maps.Geocoder();
    var map;
    var infowindow = new google.maps.InfoWindow();
    var marker;
    
    function initialize() {
        console.log('1')
      map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: 8,
            center: {lat: crd.latitude, lng: crd.longitude}
          });
     }

      ///////translate to adress
    function codeLatLng() {
        console.log('2')
        var lat = crd.latitude;
        var lng = crd.longitude;
        var latlngStr = [ lat, lng];
        var input = lat+lng
          // this didn't work even though it came from the google documentation.... so I worked around it
          //var latlngStr = input.split(',', 2);
        var latlng = new google.maps.LatLng(latlngStr[0], latlngStr[1]);
        geocoder.geocode({'location': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
               
                map.setZoom(11);
                marker = new google.maps.Marker({
                  position: latlng,
                  map: map
            });
                infowindow.setContent(results[1].formatted_address);
                infowindow.open(map, marker);
                $scope.address = results
                console.log($scope.address)
            } else {
                window.alert('No results found');
              }
        } else {
              window.alert('Geocoder failed due to: ' + status);
            }
      });
    }
    initialize();
    codeLatLng()
    $scope.youAreHere = $scope.address
    console.log($scope.youAreHere)
};
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };
    
   }])
// need to process date to figure out what number day of the month it is
//need to maybe process the dates in the schedule data into some more manageable format
//compare the two to see if street will be swept
//maybe make a map showing which streets will be swept upcoming
