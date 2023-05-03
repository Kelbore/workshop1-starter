"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = calculateBtnClicked;
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.onclick = resetBtnClicked;
}

const paymentAmount = document.getElementById("paymentAmount");
const interestRate = document.getElementById("interestRate");
const numberOfYears = document.getElementById("numberOfYears");
const termOfLength = document.getElementById("termOfLength");
const presentValue = document.getElementById("presentValue");

function calculateBtnClicked() {
    if(document.getElementById("yearInterval").selected) {
    let rate = Number(interestRate.value)/100;
    let x = Number(paymentAmount.value)/rate;
    let y = 1+rate;
    let p = Number(numberOfYears.value);
    let z = y**p;
    let answer = x*(1-1/z);
    presentValue.value = answer.toFixed(2);
    }
    else {
        let rate = Number(interestRate.value)/100;
        let x = Number(paymentAmount.value)/rate;
        let y = 1+rate;
        let numberOfMonths = Number(numberOfYears.value)*12;
        let p = numberOfMonths;
        let z = y**p;
        let answer = x*(1-1/z);
        presentValue.value = answer.toFixed(2);  
    }
}
