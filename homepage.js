let learnMoreButton = document.querySelector(".buttonLM");
let dryFoods = document.querySelector(".dry-foods");
let spices = document.querySelector(".spices");
let choose = document.querySelectorAll(".choose");
console.log(choose);


learnMoreButton.addEventListener("click", learnMoreBtnHandler);


function learnMoreBtnHandler(){
    window.location.href = "/learnMore";
}

