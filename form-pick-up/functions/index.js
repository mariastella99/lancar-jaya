const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

exports.addAdminRole = functions.https.onCall((data, context) => {
    //get user and add custom claim (admin)
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
    }).then(() => {
        return {
            message:`Success! ${data.email} has been made an admin`
        }
    }).catch(err => {
        return err;
    });
});

// exports.webhookAsia = functions
//     .region('asia-southeast2')
//     .https.onRequest((req, res) => {
//             res.send("Hello");
//     });
