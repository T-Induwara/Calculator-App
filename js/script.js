var num0 = document.getElementById("0");//Declaring varialbes for 0,=,/ and c
var equal = document.getElementById("=");
var devide = document.getElementById("/");
var clear = document.getElementById("reset");

var display = document.getElementById("number-input");//Declaring input area
const cols = document.querySelectorAll('.col');//Declaring all the columns into single constant

cols.forEach((c) => {//In here I added click event listner for all the col s and then print the innerHTML value into input area
    c.addEventListener('click', function () {
        console.log(c.innerHTML);
        display.value += c.innerHTML;
    })
})

num0.onclick = function (input) {//Code for 0 key
    display.value += '0';
}

clear.onclick = function (input) {//Code for c key
    display.value = '';
}

devide.onclick = function (input) {//Code for / key
    display.value += '/';
}

equal.onclick = function (input) {//Code for = key
    if (display.value == "") {//In here I added a if statement for identify whether the input field empty or not.
        alert("Please enter value!!");
    }
    else {
        display.value = eval(display.value);
    }
}
