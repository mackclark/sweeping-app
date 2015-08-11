
angular.module('streetSweeper', ['geolocation'])
.controller('sweeperSchedule', ["$scope", '$http', 'geolocation',function ($scope, $http,geolocation) {
	$http.get('somervilleschedule.json').
        success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
          $scope.schedule = data.results.collection1;
          angular.forEach($scope.schedule, function(schedule){
              schedule.concatName = schedule.property1+" "+schedule.property2;
              schedule.sweepDate = {
                instance1: schedule.property4.split(" and")[0],
                instance2: schedule.property4.split(" and")[0] == "1st"?"3rd":"4th",
                 day: schedule.property4.split(" ")[3]
              };
          })
          console.log($scope.schedule);
      }).
        error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    $scope.selectedSpot = "";
    //I don't know why I have to do this to get this to work but apparently I do
	$scope.streets = $scope.schedule;
	$scope.chooseStreet = false;
  $scope.showList =function (){
    if( $scope.chooseStreet == false){
      $scope.chooseStreet = true;
    }
    else{
      $scope.chooseStreet = false;
    }
  }
	 
	 $scope.enterParkingSpot = function (street){
	 	$scope.selectedSpot = $('[type="radio"]:checked').val();
        $scope.selectedSpot = jQuery.parseJSON($scope.selectedSpot);
	 }


///////here's the geolocation stuff
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
                    $scope.street = results[0].address_components[1].long_name;
                    var houseNumber = Number($scope.address[0].address_components[0].long_name)
                   if(houseNumber%2 != 0){
                      $scope.side = 'odd';
                    }
                    else{
                      $scope.side = 'even';
                    }
                    $scope.$apply($scope.side);
                    $scope.$apply($scope.street);
                    $scope.$apply($scope.address);
                } else {
                    window.alert('No results found');
                    showList();
                  }
            } else {
                  window.alert('Geocoder failed due to: ' + status);
                  showList();
                }
          });
      }
/////let's do some comparing ...this doesn't work yet i'll get back to this

 // $scope.locationSweepDate 
 //  if(!$scope.chooseStreet){
 //    angular.forEach($scope.streets, function(street){
 //      if($scope.street == street.concatName && $scope.side == street.property3){
 //        $scope.locationSweepDate = street.property4
 //      }
      
 //    })
 //    console.log($scope.locationSweepDate);
 //  }
 //  else{
    $scope.compareDate = function(street, date){
        if($scope.selectedSpot.sweepDate.day == $scope.dateObject.dayVerbose && $scope.selectedSpot.sweepDate.instance1 == $scope.dateObject.instance || $scope.selectedSpot.sweepDate.instance2 == $scope.dateObject.instance2 ){
        alert("move your car");
      }
      else{
        alert("you're good to go");
      }
    }
  //}
 
/////////////////////////////////// woooooooo date logic /////////////////////////////////////////////////
  
var Dateobject = {
  month: 0,
  day: 0,
  date:0,
  year: 0,

  monthVerbose:"0",
  dayVerbose:"0",
  dateVerbose:"0"
}; //END DATE OBJECT

function GetDateObject(days, dates, months, years) {
  
var today = (days+" "+months+" "+years);

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var monthNames = new Array(12);
monthNames[0] = "January";
monthNames[1]= "February";
monthNames[2]= "March";
monthNames[3]= "April";
monthNames[4]= "May";
monthNames[5]= "June";
monthNames[6]= "July";
monthNames[7]= "August";
monthNames[8]= "September";
monthNames[9]= "October";
monthNames[10]= "November";
monthNames[11]= "December";

var newdate = (weekday[days]+", "+monthNames[months]+" "+dates+", "+years);
var ordinals = [0,1,2,3,4,5];
var ordinalsVerbose = ["","1st","2nd","3d","4th","5th"];
var tokens = newdate.split(/[ ,]/);
var instance = (ordinalsVerbose[Math.ceil(tokens[3]/7)]+" "+ tokens[0]);
var instance2 = (ordinalsVerbose[Math.ceil(tokens[3]/7)]);

Dateobject.month = months;
Dateobject.day = days;
Dateobject.year = years;
Dateobject.date = dates;
Dateobject.instance = instance2;

Dateobject.dayVerbose = weekday[days];
Dateobject.monthVerbose = monthNames[months];

Dateobject.dateVerbose = instance;

return Dateobject;

} //END FUNCTION YO


//var selector = prompt("Today or Tomorrow?");
var selector = "today";

if (selector == "tomorrow"){
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var dayss= tomorrow.getDay();
var datess = tomorrow.getDate();
var monthss = tomorrow.getMonth();
var yearss = tomorrow.getFullYear();
} else {
var todays = new Date();
var dayss = todays.getDay();
var datess = todays.getDate();
var monthss = todays.getMonth();
var yearss = todays.getFullYear();  

}

$scope.dateObject = GetDateObject(dayss, datess, monthss, yearss);
//console.log(dayss,datess,monthss,yearss);
console.log($scope.dateObject);

//GetDateObject(dayss,datess,monthss,yearss);

$scope.TodaysDate = Dateobject.dateVerbose;
}])






// need to process date to figure out what number day of the month it is
//need to maybe process the dates in the schedule data into some more manageable format
//compare the two to see if street will be swept
//maybe make a map showing which streets will be swept upcoming

//http://blog.challengepost.com/post/124154812036/no-api-no-problem-fake-it-with-browser?utm_source=ChallengePost+New+Competitions+Newsletter&utm_campaign=312e982097-Hacker_07_16_15&utm_medium=email&utm_term=0_294421ffd0-312e982097-225284717
