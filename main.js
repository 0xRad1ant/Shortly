// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "YOUR API KEY",

    authDomain: "YOUR AUTHENTICATION",

    databaseURL: "YOUR DATABASE",

    projectId: "YOUR PROJECT ID",

    storageBucket: "YOUR STORAGE BUCKET",

    messagingSenderId: "YOUR SENDER ID",

    appId: "your app ID",

    measurementId: "YOUR Measurement ID",

});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href = '/shortly/linker.html'; // Redirect to linker.html
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            // Display error message
            alert("Incorrect email or password. Please try again.");
        });
}
