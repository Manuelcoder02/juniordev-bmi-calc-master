"use strict";
//label - for texts that are going to show
// btn - for buttons
// input - for inputs

const btnMetric = document.querySelector(".box-metric");
const btnImperial = document.querySelector(".box-imperial");

const formMetric = document.querySelector(".form-metric");
const formImperial = document.querySelector(".form-imperial");

const inputHeightMetric = document.querySelector(".height-metric");
const inputWeightMetric = document.querySelector(".weight-metric");

const labelBMIScore = document.querySelector(".bmi-score");
const labelBMIClassification = document.querySelector('.bmi-classification');

// console.log(formImperial);
// console.log(formMetric);

btnMetric.addEventListener("click", () => {
  btnImperial.classList.remove("active");
  btnMetric.classList.add("active");

  formImperial.classList.add("hidden");
  formMetric.classList.remove("hidden");
});

btnImperial.addEventListener("click", () => {
  btnMetric.classList.remove("active");
  btnImperial.classList.add("active");

  formImperial.classList.remove("hidden");
  formMetric.classList.add("hidden");
});

console.log(inputWeightMetric);
// inputWeightMetric.addEventListener("keydown", (e) => {

//   e.preventDefault();
//   if (e.keyCode === 13) {

//     const height = Number(inputHeightMetric.value);
//     const weight = Number(inputWeightMetric.value);
  
//     const bmi = (weight / height) * height;
//     console.log(bmi);
//   }

// });
      const height = Number(inputHeightMetric.value);
      const weight = Number(inputWeightMetric.value);

const formEL = document.querySelector('.form-metric');
console.log(formEL);

// formEL.addEventListener('mouseleave', function(e){
//   e.preventDefault();

//     if(e.target.classList.contains('weight-metric')) {
//       // 
//       // const bmi = (weight / height) * height;
//       // console.log(bmi);
//       console.log('LINK');

//     }
//   console.log(e.target);

  

// })
inputWeightMetric.addEventListener('mouseleave', function(e){
  e.preventDefault();

  // 1. Calculate the bmi
  const height = Number(inputHeightMetric.value);
  const weight = Number(inputWeightMetric.value);
  const bmi = Number.parseFloat(weight / (height * height));
      console.log(bmi);;
  
  // 2. Update the bmi score
  const bmiFormatted = bmi.toFixed(2)
  labelBMIScore.textContent = bmiFormatted;

  // 3. Update the bmi range and classification
  if (bmiFormatted < 18.5) {
    labelBMIClassification.textContent = `underweight`;
  } else if(bmiFormatted >= 18.5 && bmiFormatted <= 24.9) {
    labelBMIClassification.textContent = `healthy weight`;
  } else if (bmiFormatted >= 25 && bmiFormatted <= 29.9) {
    labelBMIClassification.textContent = `overweight`;
  } else if (bmiFormatted >= 30) {
    labelBMIClassification.textContent = `obese`
  }
  // 4. Display the bmi result
  document.querySelector('.bmi-info__welcome').classList.add('hidden')
  document.querySelector('.bmi-info__inputted').classList.remove('hidden')
})