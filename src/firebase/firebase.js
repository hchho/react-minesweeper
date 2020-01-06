import app from "firebase/app";
import "firebase/database";

export class Firebase {

  config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
  };

  constructor() {
    app.initializeApp(this.config);
    this.db = app.database();
  }

  getScoresForDifficulty = difficulty => this.db.ref(`scores/${difficulty}`)

  postScore = async (username, score, difficulty) => {
    const key = await this.db
      .ref()
      .child("scores")
      .push().key;
    const updates = {};
    updates[`/scores/${difficulty}/${key}`] = Object.assign(
      {},
      { name: username, timeInMs: score }
    );
    return this.db.ref().update(updates);
  };
}
