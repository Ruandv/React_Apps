import firebase from "firebase/firebase"

var firebaseConfig = {
    apiKey: "AIzaSyBcfnV8DeRWIb8G-nGF8u0lbggB_KYrEps",
    authDomain: "reservations-6e2f8.firebaseapp.com",
    projectId: "reservations-6e2f8",
    storageBucket: "reservations-6e2f8.appspot.com",
    messagingSenderId: "1009450176605",
    appId: "1:1009450176605:web:fa5315f024879220cd7db4",
    measurementId: "G-NS9VDKBT16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;