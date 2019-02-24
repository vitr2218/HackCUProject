const functions = require('firebase-functions');
const firebase = require('firebase');
const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

admin.initializeApp();
firebase.initializeApp({
    apiKey: "AIzaSyDwduXGhLP1ZthyTn-7MOBZr6Pa07Lwjaw",
    authDomain: "createhub-a1e47.firebaseapp.com",
    databaseURL: "https://createhub-a1e47.firebaseio.com",
    projectId: "createhub-a1e47",
    storageBucket: "createhub-a1e47.appspot.com",
    messagingSenderId: "520412634720"
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/webhook', (req, res) => {
    //webhook is endpoint.  Req is data sent.  Res is data sent back (to typeform)
    
    const user = {
        name: req.body['form_response'].answers[0].text,
        email: req.body['form_response'].answers[1].email
    }
    
    admin.auth().createUser({
        email: user.email,
        password: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15)
    }).then((value) => {
         admin.auth().updateUser(value.uid, {
            displayName: user.name
          }).then(() => {
            firebase.auth().sendPasswordResetEmail(user.email).then((l) => {
                  res.send({success: 'OK'})
              });
          });
    }).catch((err) => {
        res.send({succees: 'NO'})
    });
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app);
