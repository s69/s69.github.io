document.onkeydown = function (e) {
    var currKey = 0,
        evt = e || window.event;
    currKey = evt.keyCode || evt.which || evt.charCode;
    if (currKey == 123) {
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    }
}

document.onmousedown = function (event) {
    if (event.which == 1) {
        return false;
    } else if (event.which == 2) {
        return false;
    }
}

document.oncontextmenu = function () {
    return false;
}

window.onload = int = setInterval(function () {
    var divInput = document.getElementById("divInput");
    var divInputTwo = document.getElementById("divInputTwo");
    var divPasswordTwo = document.getElementById("divPasswordTwo");
    var divOffP = document.getElementsByTagName("p");
    var divOff = document.getElementById("divOff");
    divInput.focus();
    if (divInput.value == "htmlcssjavascript") {
        divInput.style.display = "none";
        divOffP[0].style.display="none";
        divPasswordTwo.style.display = "block";
        divInputTwo.focus();
        if (divInputTwo.value == "webhtmlcssjavascript") {
            divInputTwo.style.display = "none";
            divOffP[1].style.display="none";
            divOff.style.display = "block";
            document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
            clearInterval(int);
        }
    }
}, 2710);