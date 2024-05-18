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
  const height = Number(inputHeightMetric.value);
  const weight = Number(inputWeightMetric.value);
  const bmi = Number.parseFloat(weight / (height * height));
      console.log(bmi);;
})