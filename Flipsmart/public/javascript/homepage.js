let learnMoreButton = document.querySelector(".buttonLM");
let dryFoods = document.querySelector(".dry-foods");
let spices = document.querySelector(".spices");
let choose = document.querySelectorAll(".choose");
let myText = document.querySelector("#myText");
let sort = document.querySelector("#sort");
let signout = document.querySelector(".sign-out");
let cart = document.querySelector(".cart");

cart.addEventListener("click", cartHandler);

function cartHandler(){
    window.location.href = "/cart";
}

signout.addEventListener("click", signOutHandler);

async function signOutHandler(){
    try{
        await firebase.auth().signOut();
        window.location.href = "/signIn";
    }
    catch(err){
        alert("Unable to sign out!");
        console.log(err);
    }
}

const part5 = document.querySelector(".part5");
console.log(choose);
let prevCart = JSON.parse(localStorage.getItem("cart"));
let cartObject = {};
if (prevCart) {
    cartObject = prevCart;
}
let filter = document.querySelectorAll(".part3 div");
let filteredArr = data;

function init() {
    let wrapper = document.createElement("div");
    for (let i = 0; i < filteredArr.length; i++) {
        let pdDiv = document.createElement("div")
        pdDiv.classList.add("product-description");
        pdDiv.setAttribute("data-id", data[i][1]);
        pdDiv.classList.add(filteredArr[i][3].split(" ").join(""));
        pdDiv.innerHTML = ` <div class="a">
                        <img src="${filteredArr[i][4]}" alt="" srcset="">
                    </div>
                    <div class="b">
                        <div class="description-name"><span>${filteredArr[i][0].toUpperCase()}</span> <br> Rs. ${filteredArr[i][2]}</div>
                       
                        <div class="description-addToCart">
                            <img src="images/blue-add.png" alt="" srcset="">
                            <i class="fas fa-check" style = "display: none;"></i>
                        </div>
                    </div>`
        let cartButton = pdDiv.querySelector(".description-addToCart img");
        let checkButton = pdDiv.querySelector(".fas");
        cartButton.addEventListener("click", function () {
            cartButton.style.display = "none";
            checkButton.style.display = "block";
            cartObject[data[i][1]] = [...filteredArr[i], 1];
            localStorage.setItem("cart", JSON.stringify(cartObject));
        });
        checkButton.addEventListener("click", function () {
            cartButton.style.display = "block";
            checkButton.style.display = "none";
            delete cartObject[filteredArr[i][1]];
            localStorage.setItem("cart", JSON.stringify(cartObject));
        });
        wrapper.appendChild(pdDiv)
    }
    part5.appendChild(wrapper);
}
init();



learnMoreButton.addEventListener("click", learnMoreBtnHandler);
for (let i = 0; i < choose.length; i++) {
    choose[i].addEventListener("click", chooseButtonHandler);
}

sort.addEventListener("change", sortHandler);

function priceLTH(a,b){
    if(a[2]>=b[2]){
        return 1;
    }
    else{
        return -1;
    }
}
function priceHTL(a,b){
    if(a[2]<=b[2]){
        return 1;
    }
    else{
        return -1;
    }
}

function alphaATZ(a,b){
    if(a[0]>=b[0]){
        return 1;
    }
    else{
        return -1;
    }
}

function alphaZTA(a,b){
    if(a[0]<=b[0]){
        return 1;
    }
    else{
        return -1;
    }
}

function sortHandler(e){
    let sortValue = e.currentTarget.value;
    if(sortValue == "plth"){
        filteredArr.sort(priceLTH);
    }
    else if(sortValue == "phtl"){
        filteredArr.sort(priceHTL);
    }
    else if(sortValue == "atz"){
        filteredArr.sort(alphaATZ);
    }else{
        filteredArr.sort(alphaZTA);
    }
    part5.innerHTML= ""
    init();
}

function chooseButtonHandler(e) {
    for (let j = 0; j < choose.length; j++) {
        choose[j].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    part5.innerHTML = "";
    if (e.currentTarget.classList[0] == "all") {
        init(data)
        return
    }
    filteredArr = data.filter(obj => {
        return obj[3].split(' ').join('') == e.currentTarget.classList[0];
    });


    init();

    //console.log(e.currentTarget.classList[0]);
}

myText.addEventListener("input", searchHandler);


function searchHelper(value) {
    filteredArr = data.filter(obj => {
        return obj[0].includes(value);
    });
    part5.innerHTML = "";
    init();
}
function searchHandler(e) {
    let value = e.target.value;
    searchHelper(value);
    for(let i=0;i<choose.length;i++){
        choose[i].classList.remove("active");
    }
    choose[0].classList.add("active");
}




function learnMoreBtnHandler() {
    window.location.href = "/learnMore";
}

