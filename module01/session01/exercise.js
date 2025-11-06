var width = 3;
var len = 5;
var result;
result = width * len;
console.log(result);
// ==========
var r = 5;
var PI = 3.14;
// const MY_NAME = "dimas"
var circ;
var area;
circ = 2 * PI * r;
area = PI * r * r;
console.log(circ);
console.log(area);
// ==== 
var days = 366; // days 
var yearDays = 365;
var monthDays = 30;
var year = Math.floor(days / yearDays); // pembulatan tahun 
var leftDays = days % yearDays; // sisa hari 
var month = Math.floor(leftDays / monthDays); // pembulatan bulan 
var leftMonthDays = leftDays % monthDays; // sisa hari 
console.log(year, " year ,", month, " month ,", leftMonthDays, " days");
var date1 = new Date("2022-01-20");
var date2 = new Date("2020-01-22");
var result = date1 - date2;
console.log(result / (24 * 60 * 60 * 1000));
