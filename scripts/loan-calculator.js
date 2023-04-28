"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = onCalculateBtnClicked;
}

    const loanAmount = document.getElementById("loanAmount");
    const interestRate = document.getElementById("interestRate");
    const loanTerm = document.getElementById("loanTerm");

    const monthlyPayment = document.getElementById("monthlyPayment");
    const totalCost = document.getElementById("totalCost");

function onCalculateBtnClicked() {
    const loan = Number(loanAmount.value);
    const rate = Number(interestRate.value)/100;
    const ratePerMonth = rate/12;
    const year = Number(loanTerm.value);
    const months = year * 12;
    const payment = loan * ratePerMonth/1-(1+ratePerMonth)**-months;
    const total = payment * months;

    monthlyPayment.innerHTML = payment.toFixed(2);
    totalCost.innerHTML = total.toFixed(2);
}    

