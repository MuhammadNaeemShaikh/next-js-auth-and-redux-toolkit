const admin = require('firebase-admin');
const serviceAccount = require('../../fir-auth-520b5-firebase-adminsdk-w2kpu-6144b53eb3.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

// https://github.com/passport/todos-express-google/blob/main/routes/auth.js