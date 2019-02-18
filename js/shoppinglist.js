
// querySelector(), querySelectorAll()
// document.getElementById() Name() TagName()
// createElement(), createTextNode(), appendChild()

// changing the CSS
document.querySelectorAll("li").forEach(i => {
    i.style.background = "yellow";
});

// Event listener
var changeTitleBtn = document.getElementById("changeTitleBtn");
changeTitleBtn.addEventListener("click", function () {
    document.querySelector("h1").innerHTML = "Changed";
});

var newItemBtn = document.getElementById("newItemBtn");
var newItem = document.getElementById("newItem");

// refactoring
function hasValidLength(i) {
    return i.value.length > 0;
}

function addListElement(item) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.value));
    var ul = document.querySelector("ul");
    ul.appendChild(li);
    li.style.background = "yellow";
    addButton(li);
    li.addEventListener("click", e => {
        li.classList.toggle("done");
    })
}

function resetInput() {
    newItem.value = "";
}

function log(s) {
    console.log(s);
}

function addButton(li) {
    var bu = document.createElement("button");
    bu.appendChild(document.createTextNode("Delete"));
    bu.classList.add("liBtn");
    li.append(bu);
    listenRemoveLi(bu);
}

var liList = document.querySelectorAll("li");

// createElement(), createTextNode(), appendChild()
liList.forEach(li => {
    addButton(li);
});

newItemBtn.addEventListener("click", e => {
    if (hasValidLength(newItem)) {
        addListElement(newItem);
        resetInput();
    }
});

const KEYCODE_ENTER = 13;

// listens for Enter key (code 13)
newItem.addEventListener("keypress", e => {
    if (hasValidLength(newItem) && e.keyCode === KEYCODE_ENTER) {
        addListElement(newItem);
        resetInput();
    }
});

liList.forEach(li => {
    li.addEventListener("click", e => {
        li.classList.toggle("done");
    })
});

var buList = document.querySelectorAll(".liBtn");
buList.forEach(bu => {
    listenRemoveLi(bu);
});

function listenRemoveLi(bu) {
    bu.addEventListener("click", e => {
        // get the li element, and delete it
        bu.parentElement.remove();
    })
}