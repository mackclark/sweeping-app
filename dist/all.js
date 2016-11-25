

//angular.module('streetSweeper', ['geolocation'])


//SPLIT BETWEEN FUNCTIONS YO





// function sweepingDate(){

// var Dateobject = {
//   month:0,
//   day:0,
//   year:0,
//   monthDay:0,
//   date:0,

//   monthVerbose:"0",
//   dayVerbose:"0",

//   dateVerbose:"0"
// }; //END DATEOBJECT

// var date = new Date();
// var month = date.getMonth();
// var day = date.getDay();
// var year = date.getFullYear();
// var today = (day+" "+month+" "+year);
// var monthDay = date.getDate();

//  var weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";

// var monthNames = new Array(12);
//   monthNames[0] = "January";
//   monthNames[1]= "February";
//   monthNames[2]= "March";
//   monthNames[3]= "April";
//   monthNames[4]= "May";
//   monthNames[5]= "June";
//   monthNames[6]= "July";
//   monthNames[7]= "August";
//   monthNames[8]= "September";
//   monthNames[9]= "October";
//   monthNames[10]= "November";
//   monthNames[11]= "December";

// var newdate = (weekday[day]+", "+monthNames[month]+" "+monthDay+", "+year);
// var ordinals = [0,1,2,3,4,5];
// var ordinalsVerbose = ["","first","second","third","fourth","fifth"];
// var tokens = newdate.split(/[ ,]/);
// var instance = (ordinalsVerbose[Math.ceil(tokens[3]/7)]+" "+ tokens[0]);

// console.log(newdate)
// console.log(tokens)
// console.log(tokens[3])

// Dateobject.day = day;
// Dateobject.month = month;
// Dateobject.year = year;
// Dateobject.monthDay = monthDay;
// Dateobject.date = date;

// Dateobject.dayVerbose = weekday[day];
// Dateobject.monthVerbose = monthNames[month];

// Dateobject.dateVerbose = instance;

// return Dateobject;

// }//END SWEEPINGDATE FUNCTION

// console.log(sweepingDate());

angular.module('streetSweeper', ['geolocation'])
.controller('sweeperSchedule', 
    ["$scope", 
    '$http', 
    'geolocation',function ($scope, $http,geolocation) {
    var citySchedule;
    geolocation.getLocation().then(function(data){
        $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
        initialize(data.coords.latitude, data.coords.longitude);
        codeLatLng(data.coords.latitude, data.coords.longitude);
        $scope.watch($scope.city, function(){ 
            if($scope.city == "Somerville"){
                citySchedule = 'somervilleschedule.json';
            }else if($scope.city == 'Boston'){
                citySchedule = 'boston.json';
            }else if ($scope.city == 'Cambridge'){
                citySchedule = 'cambridge.json';
            }else{
                alert("Sorry! we're not currently serving that area, but hopefully we can soon!");
            }
            ///this is just for testing in case i'm not in somerville 
            citySchedule = 'somervilleschedule.json';


            if(citySchedule){
                $http.get(citySchedule).success(function(data, status, headers, config) {
                    //this cleans up the city of somerville endpoint to make it usable
                    $scope.schedule = data.results.collection1;
                    if(citySchedule == 'somervilleschedule.json'){

                      angular.forEach($scope.schedule, function(schedule){
                          schedule.concatName = schedule.property1+" "+schedule.property2;
                          schedule.sweepDate = {
                            sweepDate: schedule.property4,
                            instance1: schedule.property4.split(" and")[0],
                            instance2: schedule.property4.split(" and")[0] == "1st"?"3rd":"4th",
                            day: schedule.property4.split(" ")[3]
                          };
                            });
                             
                    }else if(citySchedule == 'boston.json'){
                        //this cleans up the city of boston endpoint to make it usable, but it doesn't work yet
                        angular.forEach($scope.schedule, function(schedule){
                          schedule.sweepDate = String(schedule.property5.text);
                        });
                        ///i don't understand why this doesn't work, because splitting it with " " seems to be working in the 
                        //console but not when the code itself runs. maybe it has something to do with that \ character- 
                        //it seems to turn into a line break. 
                        angular.forEach($scope.schedule, function(schedule){
                            schedule.concatName = schedule.property1;
                            schedule.sweepDates = {
                                //sweepDate: schedule.property5.text,
                                instance1: schedule.sweepDate.split(" ")[0],
                                instance2: schedule.sweepDate.split(" ")[0] == "1st"?"3rd":"4th",
                                day: String(schedule.sweepDate.split("\n")[0]).split(" ")
                            };
                        });
                    }
                }).error(function(data, status, headers, config) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  alert('oops');
                });  
            }
        }); 
    });
  
    //I don't know why I have to do this to get this to work but apparently I do
    $scope.streets = $scope.schedule;
    $scope.selectedSpot = "";
    $scope.chooseStreet = false;
    $scope.moveToday = false;
    $scope.moveTomorrow = false;
    $scope.comparing = false;
    $scope.explanation;
    $scope.begin = 0;  
    $scope.end = 10;
    //allows user to toggle between map prediction and choosing from a list
    $scope.showList =function (){
      if( $scope.chooseStreet === false){
        $scope.chooseStreet = true;
      }else{
        $scope.chooseStreet = false;
      }
    };
 
    $scope.enterParkingSpot = function (street){
      $scope.selectedSpot = $('[type="radio"]:checked').val();
          $scope.selectedSpot = jQuery.parseJSON($scope.selectedSpot);
    };
     //forward button
    $scope.loadMore = function(){
        if($scope.begin < $scope.schedule.length-9){
          $scope.begin += 10;  
          $scope.end += 10;
        }
    };
    //back button
    $scope.loadFewer = function(){
        if($scope.begin !== 0){
          $scope.begin -= 10;
          $scope.end -= 10;
        }
    };

    ///////here's the geolocation stuff, it should probably be in a service
    var geocoder = new google.maps.Geocoder();
    var map;
    var infowindow = new google.maps.InfoWindow();
    var marker;
    $scope.address;
  

    function initialize(latitude, longitude) {
        map = new google.maps.Map(document.getElementById('map-canvas'), {
              zoom: 8,
              center: {lat: latitude, lng: longitude}
        });
    }
    ///////translate to adress
    function codeLatLng(latitude, longitude) {
        var lat = latitude;
        var lng = longitude;
        var latlngStr = [ lat, lng];
        var input = lat+lng;
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
                    ///this figures out which side of the street you're on from the geolocation- i should insert code to check 
                    //this since geolocation is not alwas accurate enough to predict side of street. 
                    //@TODO: Have a modal pop up which prompts the user to verify the results (after switch to ionic)
                    $scope.address = results;
                    $scope.city = results[0].address_components[3].long_name;
                    $scope.street = results[0].address_components[1].long_name;
                    var houseNumber = Number($scope.address[0].address_components[0].long_name);
                    if(houseNumber%2 !== 0){
                        $scope.side = 'odd';
                    }else{
                        $scope.side = 'even';
                    }
                    $scope.$apply($scope.side);
                    $scope.$apply($scope.street);
                    $scope.$apply($scope.address);
                    $scope.$apply($scope.city);
                    console.log($scope.city);
                    console.log('address', $scope.address);
                } else {
                    window.alert('No results found');
                    showList();
                  }
            }else {
                window.alert('Geocoder failed due to: ' + status);
                showList();
            }
        });
    }
    $scope.locationSweepDate; 
        function compareGeolocation(){
            setTimeout(function(){ 
            angular.forEach($scope.schedule, function(street){
              if($scope.street == street.concatName && $scope.side == street.property3){
                $scope.locationSweepDate = street.sweepDate;
              }
                
            });
            if($scope.locationSweepDate.day == $scope.DateToday.dayVerbose && $scope.locationSweepDate.instance1 == $scope.DateToday.instance || $scope.locationSweepDate.instance2 == $scope.DateToday.instance ){
              $scope.moveToday = true;
              $scope.moveTomorrow = false;
            }else if($scope.locationSweepDate.day == $scope.DateTomorrow.dayVerbose && $scope.locationSweepDate.instance1 == $scope.DateTomorrow.instance || $scope.locationSweepDate.instance2 == $scope.DateTomorrow.instance){
              $scope.moveTomorrow =true;
              $scope.moveToday = false;
            }else{
              $scope.moveTomorrow = false;
              $scope.moveToday = false;
            }
           $scope.$apply($scope.locationSweepDate);
           // console.log($scope.locationSweepDate);
           $scope.comparing = true;

        }, 2000);
    }

    $scope.compareDate = function(street, date){
        if(!$scope.chooseStreet){
            //call the location if choose street is not selected/////////////////////////
            geolocation.getLocation().then(function(data){
                $scope.coords = {
                    lat:data.coords.latitude, long:data.coords.longitude
                };

                initialize(data.coords.latitude, data.coords.longitude);
                codeLatLng(data.coords.latitude, data.coords.longitude);
           
                compareGeolocation();
            });
      
        } else{
          ///this is the select from list comparison function
          //@TODO these messages should come from an endpoint
            if($scope.selectedSpot.sweepDate.day == $scope.DateToday.dayVerbose && ($scope.selectedSpot.sweepDate.instance1 == $scope.DateToday.instance || $scope.selectedSpot.sweepDate.instance2 == $scope.DateToday.instance) && $scope.DateToday.hour<12){
                $scope.moveToday = true;
                $scope.moveTomorrow = false;
                $scope.explanation = "You need to move your car! "+$scope.selectedSpot.concatName+" will be swept today between 8 AM and 12 PM.";

            }else if($scope.selectedSpot.sweepDate.day == $scope.DateToday.dayVerbose && ($scope.selectedSpot.sweepDate.instance1 == $scope.DateToday.instance || $scope.selectedSpot.sweepDate.instance2 == $scope.DateToday.instance)){
                $scope.moveToday = false;
                $scope.moveTomorrow = false;
                $scope.explanation = "Youre good to go- "+$scope.selectedSpot.concatName+" was already swept today between 8 AM and 12 PM.";
            }else if($scope.selectedSpot.sweepDate.day == $scope.DateTomorrow.dayVerbose && ($scope.selectedSpot.sweepDate.instance1 == $scope.DateTomorrow.instance || $scope.selectedSpot.sweepDate.instance2 == $scope.DateTomorrow.instance)){
                $scope.moveTomorrow =true;
                $scope.moveToday = false;
                $scope.explanation = "Better move you car before tomorrow at 8AM- "+$scope.selectedSpot.concatName+" will be swept tomorrow between 8AM and 12 PM";
            }else{
                $scope.moveTomorrow = false;
                $scope.moveToday = false;
                $scope.explanation="breathe a sigh of relief- your car can stay put for now.";
            }
        }
        $scope.comparing = true;
    };

/////////////////////////////////// woooooooo date stuff /////////////////////////////////////////////////

//END DATE OBJECT

    function GetDateObject(days, dates, months, years, hour) {
        var Dateobject = {
        month: 0,
        day: 0,
        date:0,
        year: 0,
        hour: 0,

        monthVerbose:"0",
        dayVerbose:"0",
        dateVerbose:"0"
    }; 
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
    var ordinalsVerbose = ["","1st","2nd","3rd","4th","5th"];
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
    Dateobject.hour = hour;

    Dateobject.dateVerbose = instance;

    return Dateobject;

    } //END FUNCTION YO



    //var selector = prompt("Today or Tomorrow?");
    $scope.DateToday;
    $scope.DateTomorrow;
    function GetToday(){
        var todays = new Date();
        var tdyDay = todays.getDay();
        var tdyDate = todays.getDate();
        var tdyMonth = todays.getMonth();
        var tdyYear = todays.getFullYear(); 
        var tdyTime = todays.getHours(); 
        dateObjectToday = GetDateObject(tdyDay,tdyDate,tdyMonth, tdyYear, tdyTime);
        $scope.DateToday = dateObjectToday;
        //return $scope.DateToday
    } //END FUNCTION GetToday




    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var tmrwDay= tomorrow.getDay();
    var tmrwDate = tomorrow.getDate();
    var tmrwMonth = tomorrow.getMonth();
    var tmrwYear = tomorrow.getFullYear();
    dateObjectTomorrow = GetDateObject(tmrwDay, tmrwDate, tmrwMonth, tmrwYear);
    $scope.DateTomorrow = dateObjectTomorrow;
    //return $scope.DateTomorrow;
    //}//END FUNCTION GetTomorrow
//GetTomorrow();
    GetToday();
    //GetDateObject(dayss,datess,monthss,yearss);

    $scope.TodaysDate = dateObjectToday.dateVerbose;
}]); 






// need to process date to figure out what number day of the month it is
//need to maybe process the dates in the schedule data into some more manageable format
//compare the two to see if street will be swept
//maybe make a map showing which streets will be swept upcoming

//http://blog.challengepost.com/post/124154812036/no-api-no-problem-fake-it-with-browser?utm_source=ChallengePost+New+Competitions+Newsletter&utm_campaign=312e982097-Hacker_07_16_15&utm_medium=email&utm_term=0_294421ffd0-312e982097-225284717
