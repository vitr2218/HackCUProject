const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/webhook', (req, res) => {
    req.body['form_response'].definition.fields.forEach(field => {
        console.log(field);
    });//webhook is endpoint.  Req is data sent.  Res is data sent back (to typeform)
    req.body['form_response'].answers.forEach(field => {
        console.log(field);
    });

    return res.send('hi');
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app);
