// https://www.omnicalculator.com/conversion/ounces-to-cups

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cupRadio = document.getElementById('cupRadio');
const fluidounceRadio = document.getElementById('fluidounceRadio');

let cup;
let fluidounce = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

cupRadio.addEventListener('click', function() {
  variable1.textContent = 'Fluid ounce';
  fluidounce = v1;
  result.textContent = '';
});

fluidounceRadio.addEventListener('click', function() {
  variable1.textContent = 'Cup';
  cup = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cupRadio.checked)
    result.textContent = `Cup = ${computecup().toFixed(5)}`;

  else if(fluidounceRadio.checked)
    result.textContent = `Fluid ounce = ${computefluidounce().toFixed(5)}`;
})

// calculation

function computecup() {
  return Number(fluidounce.value) * 0.125;
}

function computefluidounce() {
  return Number(cup.value) / 0.125;
}