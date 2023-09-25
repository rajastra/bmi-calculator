const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const submitButton = document.getElementById('submit');
const bmiForm = document.querySelector('.bmi-form');
const bmiResult = document.querySelector('.bmi-result');

function validateInput() {
  if (weightInput.value !== '' && heightInput.value !== '') {
    submitButton.classList.remove('bmi-button-disabled');
  } else {
    submitButton.classList.add('bmi-button-disabled');
    bmiResult.classList.add('hidden');
    bmiResult.innerHTML = '';
  }
}

function categoryBMI(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'Overweight';
  } else {
    return 'Obesity';
  }
}

function calculateBMI(event) {
  event.preventDefault();
  bmiResult.innerHTML = '';
  const weight = weightInput.value;
  const height = heightInput.value;
  const bmi = weight / (height / weight);
  bmiResult.classList.remove('hidden');
  bmiResult.insertAdjacentHTML(
    'beforeend',
    `<p>Your BMI is <span>${bmi.toFixed(
      1
    )}</span> which means you are <span>${categoryBMI(bmi)}</span></p>`
  );
}

weightInput.addEventListener('input', validateInput);
heightInput.addEventListener('input', validateInput);
bmiForm.addEventListener('submit', calculateBMI);
