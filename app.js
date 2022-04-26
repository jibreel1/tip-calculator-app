const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const tipResult = document.getElementById("tip-answer");
const totalResult = document.getElementById("total-answer");
const tips = document.querySelectorAll(".tip");
const customTip = document.getElementById("tip-custom");
const reset = document.querySelector(".reset");
const error = document.querySelector(".error");

billInput.value = "0.0";
peopleInput.value = "1";
tipResult.innerHTML = "$" + (0.0).toFixed(2);
totalResult.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

const billInputHandler = () => {
   billValue = parseFloat(billInput.value);
   calculateHandler();
};

const peopleInputHandler = () => {
   peopleValue = parseFloat(peopleInput.value);
   if (peopleValue < 1) {
      error.style.display = "flex";
      peopleInput.style.border = "3px solid red";
   } else {
      error.style.display = "none";
      peopleInput.style.border = "none";
      calculateHandler();
   }
};

const tipHandler = (event) => {
   tips.forEach(function (val) {
      val.classList.remove("active-tip");
      customTip.value = "";
      if (event.target.innerHTML === val.innerHTML) {
         val.classList.add("active-tip");
         tipValue = parseFloat(val.innerHTML) / 100;
      }
   });
   calculateHandler();
};

const customTipHandler = () => {
   tipValue = parseFloat(customTip.value / 100);

   tips.forEach(function (val) {
      val.classList.remove("active-tip");
   });
   calculateHandler();
};

const resetHandler = () => {
   billInput.value = "0.0";
   billInputHandler();
   peopleInput.value = "1";
   peopleInputHandler();
   customTip.value = "";
};

const calculateHandler = () => {
   if (peopleValue >= 1) {
      let biller = billValue * tipValue;
      let tipAmount = biller / peopleValue;
      let total = (billValue + biller) / peopleValue;
      tipResult.innerHTML = "$" + tipAmount.toFixed(2);
      totalResult.innerHTML = "$" + total.toFixed(2);
   }
};

billInput.addEventListener("input", billInputHandler);
peopleInput.addEventListener("input", peopleInputHandler);
tips.forEach(function (tip) {
   tip.addEventListener("click", tipHandler);
});
customTip.addEventListener("input", customTipHandler);
reset.addEventListener("click", resetHandler);
