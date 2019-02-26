/* eslint-disable no-undef */
/* eslint-disable no-console */
//import { without } from "lodash" // Browsers don't support import yet

// browserify allows the use of REQUIRE
// Type the console command: browserify lodash.js > bundle.js
// put bundle.js in the html file
// You must rerun browserify ON EVERY CHANGE of the script to update bundle.js!

var _ = require("lodash");

const arr = [1, 2, 3, 5, 6];
console.log("test: ", _.without(arr, 3));

let p = document.querySelector("#testp");
p.innerText = "Hello";