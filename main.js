// var http = require("http");

// http.createServer(function (request, response) {
//    // Send the HTTP header
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});

//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

// "use strict";
// let count = 0;
// let months = [
//   "JAN",
//   "FEB",
//   "MAR",
//   "APR",
//   "MAY",
//   "JUN",
//   "JUL",
//   "AUG",
//   "SEP",
//   "OCT",
//   "NOV",
//   "DEC",
// ];
// function getDateAndTime() {
//   setInterval(() => {
//     if (count < 5) {
//       let today = new Date();

//       console.log(
//         `${today.getFullYear()}-${
//           months[today.getMonth()]
//         }-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
//       );
//       count++;
//     }
//   }, 1000);
// }

// getDateAndTime();


/*
let arr=[1,2,3,4,5,6,7,8,9];

function convert(ar){
  return [...ar.filter((val)=>val%2==0).map((v,index)=>{ return {[v:v*3}})]
}
let a=convert(arr);

for(let valu in a){
console.log(`key:${valu} value:${a[valu]}`);
}

// let po=[1,2,3,4,5,6,7,8,9,];
// let obj = po.reduce((acc,key)=>{return {...acc,[key]:3*key}},{});
// for(let valu in obj){
//   console.log(`key:${valu} value:${obj[valu]}`);
//   */
var n=arr.length-1;
for(var i=0;i<n/2;i++){
    let temp1=arr[i][n];
    arr[i][n]=arr[i][i];
    let temp2=arr[n][n];
    arr[n][n]=temp1;
    temp1=arr[n][i];
    arr[n][i]=temp2;
    arr[i][i]=temp1;
