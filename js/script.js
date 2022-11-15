var num0 = document.getElementById("0");//Declaring varialbes for 0,=,/ and c
var equal = document.getElementById("=");
var devide = document.getElementById("/");
var clear = document.getElementById("reset");

var display = document.getElementById("number-input");//Declaring input area
const cols = document.querySelectorAll('.col');//Declaring all the columns into single constant

//Theme component declaring
var themeBtnBg = document.getElementById("switch-bg");
var themeBtn1 = document.getElementById("sw-1");
var themeBtn2 = document.getElementById("sw-2");
var themeBtn3 = document.getElementById("sw-3");

themeBtn1.addEventListener("click", function () {
    themeBtnBg.classList.add("theme1-theme-select-bg");
    themeBtnBg.classList.remove("theme2-theme-select-bg");
    themeBtnBg.classList.remove("theme3-theme-select-bg");
    themeBtn1.style.backgroundColor = "hsl(6, 63%, 50%)";
    themeBtn2.style.backgroundColor = "#FFB3CB00";
    themeBtn3.style.backgroundColor = "#FFB3CB00";

});
themeBtn2.addEventListener("click", function () {
    themeBtnBg.classList.add("theme2-theme-select-bg");
    themeBtnBg.classList.remove("theme1-theme-select-bg");
    themeBtnBg.classList.remove("theme3-theme-select-bg");
    themeBtn2.style.backgroundColor = "hsl(25, 98%, 40%)";
    themeBtn1.style.backgroundColor = "#FFB3CB00";
    themeBtn3.style.backgroundColor = "#FFB3CB00";
});
themeBtn3.addEventListener("click", function () {
    themeBtnBg.classList.add("theme3-theme-select-bg");
    themeBtnBg.classList.remove("theme1-theme-select-bg");
    themeBtnBg.classList.remove("theme2-theme-select-bg");
    themeBtn3.style.backgroundColor = "hsl(176, 100%, 44%)";
    themeBtn1.style.backgroundColor = "#FFB3CB00";
    themeBtn2.style.backgroundColor = "#FFB3CB00";
});

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
