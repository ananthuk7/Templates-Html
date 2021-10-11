var project = setInterval(averageInvest, 10);
var project1 = setInterval(countries, 9);
var project2 = setInterval(proposals, 8);
var project3 = setInterval(activeInvest, 7);
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
const value1 = document.querySelector('#number1').innerText;
const value2 = document.querySelector('#number2').innerText;
const value3 = document.querySelector('#number3').innerText;
const value4 = document.querySelector('#number4').innerText;

function averageInvest() {
    count1++;
    document.querySelector('#number1').innerHTML = count1;
    if (count1 == parseInt(value1)) {
        clearInterval(project);
    }
}
function countries() {
    count2++;
    document.querySelector('#number2').innerHTML = count2;
    if (count2 == parseInt(value2)) {
        clearInterval(project1);
    }
}
function proposals() {
    count3++;
    document.querySelector('#number3').innerHTML = count3;
    if (count3 == parseInt(value3)) {
        clearInterval(project2);
    }
}
function activeInvest() {
    count4++;
    document.querySelector('#number4').innerHTML = count4;
    if (count4 == parseInt(value4)) {
        clearInterval(project3);
    }
}