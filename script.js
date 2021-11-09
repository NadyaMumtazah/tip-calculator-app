const billInput = document.getElementById("bill");
const tips = document.querySelectorAll(".tip");
const tipCustom = document.getElementById("custom-tip");
const people = document.getElementById("people");
const result = document.querySelectorAll(".value");
const reset = document.getElementById('btn-reset');
const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    input.addEventListener('focus', function(){
      input.style.border = "1px solid hsl(183, 100%, 15%)";
    });
    input.addEventListener('blur', function(){
      input.style.border = '';
    });
});
billInput.addEventListener('input', getBillInputValue);
tips.forEach(tip => {
    tip.addEventListener('click', handleClick);
});
tipCustom.addEventListener('input', getTipInputValue);
people.addEventListener('input', getNumberOfPeople);
reset.addEventListener('click', resetButton);


people.value = 1;

let billValue = 0.0;
let tipValue = 0.15;
let numberOfPeople = 1;


function getBillInputValue(){
    if(billInput.value >= 0){
      billValue = parseFloat(billInput.value);
      calculateTip();
    }
}

function handleClick(event){
  tips.forEach(tip => {
    tip.classList.remove('tip-active');
    if(event.target.innerHTML == tip.innerHTML){
      tip.classList.add('tip-active');
      tipValue = parseFloat(tip.innerHTML)/100;
    }
  });
  calculateTip();
}

function getTipInputValue(){
    tipValue = parseFloat(tipCustom.value/100);

    tips.forEach(tip => {
      tip.classList.remove('tip-active');
    });
    calculateTip();
}

function getNumberOfPeople(){
    numberOfPeople = parseFloat(people.value);
    calculateTip();
}

function calculateTip(){
    if(billValue >= 0 && numberOfPeople >= 1){
      let tipAmount = (billValue * tipValue) / numberOfPeople;
      let total = (billValue * tipValue + billValue) / numberOfPeople;
      result[0].innerHTML = "$" + tipAmount.toFixed(2);
      result[1].innerHTML = "$" + total.toFixed(2);
    }
    else {
      result[0].innerHTML = '$0.00';
      result[1].innerHTML = '$0.00';
    }
}

function resetButton(){
    billInput.value = " ";
    getBillInputValue();
    people.value = 1;
    tips.forEach(tip => {
      tip.classList.remove('tip-active');
    });
    result[0].innerHTML = '$0.00';
    result[1].innerHTML = '$0.00';
}
