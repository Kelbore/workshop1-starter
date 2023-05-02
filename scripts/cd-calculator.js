'use strict';

window.onload = init;

function init() {
    const calculate = document.getElementById("calculate");
    calculate.onclick = calculateCD;
    const reset = document.getElementById("reset");
    reset.onclick = resetClicked;
}

function calculateCD() {
    const depositAmount = document.getElementById("depositAmount");
    const cdTermLength = document.getElementById("cdTermLength");
    const annualPercentage = document.getElementById("annualPercentage");
    const totalAmount = document.getElementById("totalAmount");
    const totalInterest = document.getElementById("totalInterest");
    
    
    
    if(document.getElementById("termLengthYear").checked){
        const rate = Number(annualPercentage.value)/100;
        let nt = 365 * Number(cdTermLength.value);
        let x = 1 + rate/365;
        let y = Math.pow(x,nt);
        let certificateOfDeposit = Number(depositAmount.value) * y;
        totalAmount.innerHTML = certificateOfDeposit.toFixed(2);
        totalInterest.innerHTML = certificateOfDeposit-Number(depositAmount.value);
    }
    else if(document.getElementById("termLengthMonth").checked){
        const rate = Number(annualPercentage.value)/100;
        let nt = 12 * Number(cdTermLength.value);
        let s = 1 + rate/12;
        let w = Math.pow(s, nt);
        let certificateOfDeposit = Number(depositAmount.value) * w;
        totalAmount.innerHTML = certificateOfDeposit.toFixed(2); 
        totalInterest.innerHTML = certificateOfDeposit-Number(depositAmount.value);
    }

}

/*function resetClicked() {

}*/