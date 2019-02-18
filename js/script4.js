
// querySelector(), querySelectorAll()

// document.getElementById() Name() TagName()

// changing the CSS
document.querySelectorAll("li").forEach(i => {i.style.background = "yellow"});

// Event listener
var changeTitleBtn = document.getElementById("changeTitleBtn");
changeTitleBtn.addEventListener("click", function() {
    console.log("Click!");
    document.querySelector("h1").innerHTML = "Changed";
});