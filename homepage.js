let learnMoreButton = document.querySelector(".buttonLM");
let dryFoods = document.querySelector(".dry-foods");
let spices = document.querySelector(".spices");
let choose = document.querySelectorAll(".choose");
const part5 = document.querySelector(".part5")
console.log(choose);
let prevCart = JSON.parse(localStorage.getItem("cart"));
let cartObject = {};
if(prevCart){
    cartObject = prevCart;
}

(function init() {
    let wrapper = document.createElement("div");
    for (let i = 0; i < data.length; i++) {
        let pdDiv = document.createElement("div")
        pdDiv.classList.add("product-description");
        pdDiv.setAttribute("data-id", data[i][1]);
        pdDiv.innerHTML = ` <div class="a">
                        <img src="images/product1.png" alt="" srcset="">
                    </div>
                    <div class="b">
                        <div class="description-name"><span>${data[i][0].toUpperCase()}</span> <br> Rs 75/-</div>
                       
                        <div class="description-addToCart">
                            <img src="images/blue-add.png" alt="" srcset="">
                            <i class="fas fa-check" style = "display: none;"></i>
                        </div>
                    </div>`
                let cartButton = pdDiv.querySelector(".description-addToCart img");
                let checkButton = pdDiv.querySelector(".fas");
                cartButton.addEventListener("click", function(){
                    cartButton.style.display = "none";
                    checkButton.style.display = "block";
                    cartObject[data[i][1]] = data[i];
                    localStorage.setItem("cart", JSON.stringify(cartObject));
                });
                checkButton.addEventListener("click", function(){
                    cartButton.style.display = "block";
                    checkButton.style.display = "none";
                    delete cartObject[data[i][1]];
                    localStorage.setItem("cart", JSON.stringify(cartObject));
                });
                wrapper.appendChild(pdDiv)
    }
    part5.appendChild(wrapper);
})()

learnMoreButton.addEventListener("click", learnMoreBtnHandler);

for (let i = 0; i < choose.length; i++) {
    choose[i].addEventListener("click", chooseButtonHandler);
}

function chooseButtonHandler(e) {
    for (let j = 0; j < choose.length; j++) {
        choose[j].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
}


function learnMoreBtnHandler() {
    window.location.href = "/learnMore";
}

