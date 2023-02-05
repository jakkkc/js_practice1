let num1 = 8
let num2 = 2
let results = document.getElementById("result-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    results.textContent = num1 + num2    
}
function subtract(){
    results.textContent = num1 - num2    
}
function divide(){
    results.textContent = num1 / num2    
}
function multiply(){
    results.textContent = num1 * num2    
}
