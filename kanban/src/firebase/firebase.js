var firebase = require("firebase")
// import firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBvxlGsz5K6JeJXCaksg0LtN0qr37zUpVg",
  authDomain: "kanban-bc362.firebaseapp.com",
  databaseURL: "https://kanban-bc362.firebaseio.com",
  projectId: "kanban-bc362",
  storageBucket: "",
  messagingSenderId: "746802800439"
};

firebase.initializeApp(config)
const db = firebase.database()
const todo = db.ref('todos/')
const doing = db.ref('doing/')
const done = db.ref('done/')
module.exports = {
  db,
  doing,
  todo,
  done
}
