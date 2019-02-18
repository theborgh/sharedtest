
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function changeGradient(col1, col2) {
    body.style.background = "linear-gradient(to right, " +
    col1.value + ", " + col2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", e => {
     changeGradient(color1, color2);
});

color2.addEventListener("input", e => {
    changeGradient(color1, color2);
});

