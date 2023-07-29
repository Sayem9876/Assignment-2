"use strict";
const promptSync = require('prompt-sync')();
let marks = promptSync("Enter your marks:");
console.log("your marks are :", marks);

if (marks >= 90) {
    console.log('A+');
  } else if (marks >= 80) {
    console.log('A');
  } else if (marks >= 70) {
    console.log('B');
  } else if (marks >= 60) {
    console.log('C');
  } else if (marks >= 50) {
    console.log('D');
  } else {
    console.log('F');
  }
