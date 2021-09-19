let email = document.querySelector("#Email");
let pwd = document.querySelector("#Pwd");
let submit = document.querySelector(".arrow");
let name = document.querySelector("#Name");
let signIn = document.querySelector(".sign-in");


signIn.addEventListener("click", signInHandler);
function signInHandler(){
    window.location.href = "/signIn"
}

submit.addEventListener("click", signUpHandler);
console.log(firebase.firestore.FieldValue.serverTimestamp())
async function signUpHandler(){
    try{
        let pakad =await  firebase.auth().createUserWithEmailAndPassword(email.value,pwd.value);
        let namePakad =await firebase.firestore().collection("user").doc(pakad.user.uid).set({
            name : name.value,
            createdAt : firebase.firestore.FieldValue.serverTimestamp(),
        }); 
        window.location.href = "/productsPage"
    }
    catch(err){
        alert("Unable to sign up, Please try again later");
        console.log(err);
    }
}