import app from 'firebase/app'

const config = {
  apiKey: "AIzaSyBpCbu5WsEORk15RrbCEZBqA_K_8W_N7rQ",
  authDomain: "react-minesweeper-841a3.firebaseapp.com",
  databaseURL: "https://react-minesweeper-841a3.firebaseio.com",
  projectId: "react-minesweeper-841a3",
  storageBucket: "react-minesweeper-841a3.appspot.com",
  messagingSenderId: "629672203063",
  appId: "1:629672203063:web:2ce61acceb9def662a00b2"
};

export const Firebase = app.initializeApp(config)