let email = document.querySelector("#Email");
let pwd = document.querySelector("#Pwd");
let submit = document.querySelector(".arrow");
let signUpBtn = document.querySelector(".sign-up");

signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler(){
    window.location.href = "/signUp";
}

submit.addEventListener("click", submitHandler);

async function submitHandler(){
    try{
        let pakad = await firebase.auth().signInWithEmailAndPassword(email.value,pwd.value);
        window.location.href = "/productsPage";
    } 
    catch(err){
        alert("Failed to sign in, Please try again later!")
        console.log(err);
    }
}