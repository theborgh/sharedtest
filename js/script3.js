
var arr = [1, 3, 1, 4, 234, 2];

// foreach with function()
arr.forEach(function(i) {
    console.log(i);
});

// foreach with =>
arr.forEach(i => {
    console.log(i);
});

// foreach with function() and all optional arguments.
// @Params: element, index, whole array
arr.forEach(function(elem, i, arr) {
    console.log(elem, i, arr);
});

// foreach with => and all optional arguments.
// @Params: element, index, whole array
arr.forEach((elem, i, arr) => {
    console.log(elem, i, arr);
});

// foreach with external function
arr.forEach(logElement);

function logElement(i) {
    console.log(i);
}