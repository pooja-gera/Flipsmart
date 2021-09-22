let email = document.querySelector("#Email");
let pwd = document.querySelector("#Pwd");
let submit = document.querySelector(".arrow");
let name = document.querySelector("#Name");
let signIn = document.querySelector(".sign-in");
let photo = document.querySelector("#Photo");

signIn.addEventListener("click", signInHandler);
function signInHandler() {
    window.location.href = "/signIn"
}
let storage = firebase.storage();
submit.addEventListener("click", signUpHandler);
// console.log(firebase.firestore.FieldValue.serverTimestamp())
async function signUpHandler() {
    try {
        let pakad = await firebase.auth().createUserWithEmailAndPassword(email.value, pwd.value);
        let photu = await photoHandler(pakad)
        console.log(photu);

    }
    catch (err) {
        alert("Unable to sign up, Please try again later");
        console.log(err);
    }
}


async function photoHandler(pakad) {

    let link;
    let t = Date.now();
    const task = storage.ref(`images/user/${t}${photo.files[0].name}`).put(photo.files[0]);
    return task.on('state_changed', function (snapshot) {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    },
        function (err) {
            window.alert("Error in saving image");
        },
        function () {
            storage.ref("images/user").child(`${t}${photo.files[0].name}`).getDownloadURL().then(async function (url) {
                link = url;
                let namePakad = await firebase.firestore().collection("user").doc(pakad.user.uid).set({
                    name: name.value,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    dp : url,
                });
                localStorage.setItem("uuid", JSON.stringify(pakad.user.uid));
                window.location.href = "/productsPage"
                return url;
            })
        });
}