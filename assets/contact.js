
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBo4YHtpZNtnbr2H16fLIwuSJEGcoIXBG0",
    authDomain: "portfolio-1ddc8.firebaseapp.com",
    databaseURL: "https://portfolio-1ddc8.firebaseio.com",
    projectId: "portfolio-1ddc8",
    storageBucket: "",
    messagingSenderId: "538563632754"
};
firebase.initializeApp(config);


var name = "";
var email = "";
var message = "";

//capture value from form
$('#contact-form').on('click',function(eventObject){
    //prevent pag from refreshing
    eventObject.preventDefault();
    name = $('#name').val().trim();
    email = $('#email').val().trim();
    message = $('#message').val().trim();
    //push data to firebase
    firebase.database().ref().push({
        name:name,
        email:email,
        message: message,

        //add timestamp to acurately track last added child
        dateAdded:firebase.database.ServerValue.TIMESTAMP
    });
    //clear form
    $('#form').trigger('reset');
});

