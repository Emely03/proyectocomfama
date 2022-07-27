import { getAuth, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

let boton = document.getElementById("boton")
let boton2 = document.getElementById("boton2")

boton.addEventListener("click", function (evento) {

    //preventDefault evito que el formulario se reinicie
    evento.preventDefault()

    //Se captura lo que se escribe en cada caja del formulario, .value para que traiga el valor
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(email, password)

    //Me autentico ante firebase
    const auth = getAuth();

    //Se llama a la promesa createUser
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { //Si no se presentan errores
            // Signed in userCredential es un objeto al cual se accede a user
            const user = userCredential.user.email;
            console.log(userCredential)
            alert("Exitos en el registro, Bienvenido")
            window.location.href = 'http://127.0.0.1:5500/registro.html'
            // ...
        })
        .catch((error) => { // Si presenta errores
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Ups Fallamos " + errorMessage)
            // ..
        });

})
boton2.addEventListener("click", function () {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

})