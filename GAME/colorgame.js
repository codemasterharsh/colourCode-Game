var nums = 6;
var colors = arrcol(nums);

var squares = document.querySelectorAll(".square");
var fixcolor = changecol();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = fixcolor;
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var esy = document.querySelector("#esy");
var hrd = document.querySelector("#hrd");

esy.addEventListener("click", function() {
    esy.classList.add("selected");
    hrd.classList.remove("selected");
    nums = 3;
    colors = arrcol(nums);
    fixcolor = changecol();
    colorDisplay.textContent = fixcolor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) { squares[i].style.background = colors[i]; } else { squares[i].style.display = "none"; }
    }

})

hrd.addEventListener("click", function() {
    hrd.classList.add("selected");
    esy.classList.remove("selected");
    nums = 6;
    colors = arrcol(nums);
    fixcolor = changecol();
    colorDisplay.textContent = fixcolor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})
reset.addEventListener("click", function() {
    colors = arrcol(nums);
    fixcolor = changecol();
    colorDisplay.textContent = fixcolor;
    message.textContent = "";
    reset.textContent = "New Color";
    h1.style.background = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
})


for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function() {
        var sel = this.style.background;

        if (sel === fixcolor) {

            change(sel);
            h1.style.background = sel;
            message.textContent = "Correct!!";
            reset.textContent = "Play Again!";
        } else {
            this.style.background = "#232323";
            message.textContent = "Try Again?";
        }

    });

}

function change(color) {
    for (var i = 0; i < squares.length; i++) { squares[i].style.background = color; }
}

function changecol() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function arrcol(num) {
    var arr = [];
    for (var i = 0; i < num; i++) { arr.push(rancol()) };
    return arr;
}

function rancol() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}