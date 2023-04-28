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
    const x = loan * ratePerMonth;
    const y = 1+ratePerMonth;
    const z = y**months;
    const f = (1+ratePerMonth)**months;
    const h = f-1;
    const payment = (x*z)/h;
    const total = payment * months;

    monthlyPayment.innerHTML = payment.toFixed(2);
    totalCost.innerHTML = total.toFixed(2);
}    

