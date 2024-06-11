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

// inputWeightMetric.addEventListener("keydown", (e) => {

//   e.preventDefault();
//   if (e.keyCode === 13) {

//     const height = Number(inputHeightMetric.value);
//     const weight = Number(inputWeightMetric.value);
  
//     const bmi = (weight / height) * height;
//     console.log(bmi);
//   }

// });
const formEL = document.querySelector('.form-metric');

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
let height, weight, bmi, bmiFormatted;

inputWeightMetric.addEventListener('mouseleave', function(e){
  e.preventDefault();

  // 1. Calculate the bmi
 height = Number(inputHeightMetric.value);
 weight = Number(inputWeightMetric.value);
 bmi = Number.parseFloat(weight / (height * height));
      // console.log(bmi);;
  
  // 2. Update the bmi score
  updateBMi();

  // 3. Update the bmi range and classification
  updateBMIClassification();

  // 4. Display the bmi result
  displayBMI();
})

let feet, inches, stoneWeight, pounds;
// Imperial BMI functionalities
const feetInput = document.querySelector('#feet');
const inchesInput = document.querySelector('#inches');
const stoneWeightInput = document.querySelector('#stone-weight');
const poundInput = document.querySelector('#pound');



poundInput.addEventListener('mouseleave', function(e){
  e.preventDefault();

  // converting it into number
    feet = Number(feetInput.value); // ft
    inches = Number(inchesInput.value); //in
    stoneWeight = Number(stoneWeightInput.value); // st
    pounds = Number(poundInput.value); // lbs

  // 1) Calculate BMI
        // i. Convert feet and inches to inches
        // Total height in inches = feet * 12 + inches
        const totalHeight = Number.parseFloat((feet * 12) + inches);

        // ii. Convert stone and pounds to pounds
        // Total weight in pounds = stones * 14 + pounds
        const totalWeight = Number.parseFloat((stoneWeight * 14) + pounds);


        //iii. Calculate bmi using pounds and inches
        // BMI = (weight (lbs) / (height (in) * height (in))) * 703
        bmi = Number.parseFloat((totalWeight / (totalHeight * totalHeight)) * 703);

  
  // 2) Update BMI
    updateBMi();

  // 3. Update the bmi range and classification
   updateBMIClassification();

  // 4. Display the bmi result
   displayBMI();

})

function updateBMi() {
  bmiFormatted = bmi.toFixed(2)
  labelBMIScore.textContent = bmiFormatted;
}

function updateBMIClassification() {
  if (bmiFormatted < 18.5) {
    labelBMIClassification.textContent = `an underweight`;
  } else if(bmiFormatted >= 18.5 && bmiFormatted <= 24.9) {
    labelBMIClassification.textContent = `a healthy weight`;
  } else if (bmiFormatted >= 25 && bmiFormatted <= 29.9) {
    labelBMIClassification.textContent = `an overweight`;
  } else if (bmiFormatted >= 30) {
    labelBMIClassification.textContent = `an obese`
  }
}

function displayBMI() {
  document.querySelector('.bmi-info__welcome').classList.add('hidden')
  document.querySelector('.bmi-info__inputted').classList.remove('hidden')
}



// feet = 12;
// inches = 34;
// stoneWeight = 14;
// pounds = 32;
// const totalHeight = Number.parseFloat((feet * 12) + inches);
// const totalWeight = Number.parseFloat((stoneWeight * 14) + pounds);
// bmi = Number.parseFloat((totalWeight / (totalHeight * totalHeight)) * 703);
// console.log(totalHeight, totalWeight, bmi.toFixed(2));
