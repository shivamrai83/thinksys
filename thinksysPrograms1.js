//Program to print the date and time in the desired format YYYY-MMM-DD HH:MM:SS for continuesly 5 times (every second once)

"use strict";
let count = 0;
let months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
function getDateAndTime() {
  setInterval(() => {
    if (count < 5) {
      let today = new Date();

      console.log(
        `${today.getFullYear()}-${
          months[today.getMonth()]
        }-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
      );
      count++;
    }
  }, 1000);
}

getDateAndTime();

//function to convert the array into even number array and then convert it into object so that it will show object like this arr[index]:arr[index]*3

let arr=[1,2,3,4,5,6,7,8,9];

function convert(ar){
  return [...ar.filter((val)=>val%2==0).map((v,index)=>{ return {[v]:v*3}})]
}
let a=convert(arr);

for(let valu in a){
console.log(`key:${valu} value:${a[valu]}`);
}

//Sample code
// let po=[1,2,3,4,5,6,7,8,9,];
// let obj = po.reduce((acc,key)=>{return {...acc,[key]:3*key}},{});
// for(let valu in obj){
//   console.log(`key:${valu} value:${obj[valu]}`);
//   

//Write a program to rotate a 2 dimensional array in clockwise manner.

function rotateClock(array) {
  let resultArray = [];
  let k = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    resultArray[i] = new Array(array[i].length);
  }

  for (let i = 0; i < array.length; i++) {
    if (k >= 0) {
      for (let j = 0; j < array.length; j++) {
        resultArray[j][i] = array[k][j];
      }

      k--;
    }
  }

  return resultArray;
}

let array = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48],
  [49, 50, 51, 52, 53, 54, 55, 56],
  [57, 58, 59, 60, 61, 62, 63, 64],
];

console.table(array);
console.table(rotateClock(array));


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