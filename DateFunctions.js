

streetSweeper.controller("date", ["$scope", function ($scope) {
  
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
var ordinalsVerbose = ["","first","second","third","fourth","fifth"];
var tokens = newdate.split(/[ ,]/);
var instance = (ordinalsVerbose[Math.ceil(tokens[3]/7)]+" "+ tokens[0]);

Dateobject.month = months;
Dateobject.day = days;
Dateobject.year = years;
Dateobject.date = dates;

Dateobject.dayVerbose = weekday[days];
Dateobject.monthVerbose = monthNames[months];

Dateobject.dateVerbose = instance;

return Dateobject;

} //END FUNCTION YO


var selector = prompt("Today or Tomorrow?");

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

console.log(GetDateObject(dayss, datess, monthss, yearss));
console.log(dayss,datess,monthss,yearss);
console.log(Dateobject);

GetDateObject(dayss,datess,monthss,yearss);

$scope.TodaysDate = Dateobject.dateVerbose;
}])




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