const admin = require('firebase-admin');
const serviceAccount = require('../config/firebase/serviceAccountKey.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const UserService = {

  async Authentication(idToken) {
      return await admin.auth().verifyIdToken(idToken);
  }

}

module.exports = UserService;