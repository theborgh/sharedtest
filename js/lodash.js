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

// NPM allows you to run scripts from package.json (such as to browserify)
// Also, do NPM INSTALL on the folder with package.json to download all the
// dependencies (will be downloaded to node_modules)