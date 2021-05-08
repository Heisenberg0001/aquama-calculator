const output = document.getElementsByClassName('aquama-calculator-output')[0];
const squareArea = document.getElementById('square-area');
const numberOfPeople = document.getElementById('number-of-people');
const numberOfMonths = document.getElementById('number-of-months');
const totalCost = document.getElementById('total-cost');
const aquamaCost = document.getElementById('aquama-cost');
const calculateBtn = document.getElementById('calculate');

const costPerPerson = 6.6;
const costPerSquare = 160/100/6;
const aquamaPerMonthSquare = 27/6/100;
const aquamaPerMonthPeople = 0.17;

calculateBtn.addEventListener('click', calculateCosts);

function validateMyForm() {
    return false;
}
function calculateCosts() {
    debugger;
    if(squareArea.value && numberOfPeople.value && numberOfMonths.value) {
        debugger;
        const totalCostCalculated = (parseFloat(squareArea.value) *  parseFloat(numberOfMonths.value) * costPerSquare)
                                    + (parseFloat(numberOfPeople.value) * parseFloat(numberOfMonths.value) * costPerPerson);

        const aquamaCostCalculated = (parseInt(squareArea.value) *  parseInt(numberOfMonths.value) * aquamaPerMonthSquare)
                                    + (parseInt(numberOfPeople.value) * parseInt(numberOfMonths.value) * aquamaPerMonthPeople);

        totalCost.innerHTML = totalCostCalculated.toFixed().toString();
        aquamaCost.innerHTML = aquamaCostCalculated.toFixed().toString();
        output.style.display = 'flex';
    }
}
