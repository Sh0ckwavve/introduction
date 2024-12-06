const firebaseConfig = {
  apiKey: "AIzaSyDeu-el_-tv9KvX24T1tCwGJHGXEZRIh4Y",
  authDomain: "quick-contact-41ede.firebaseapp.com",
  databaseURL: "https://quick-contact-41ede-default-rtdb.firebaseio.com",
  projectId: "quick-contact-41ede",
  storageBucket: "quick-contact-41ede.firebasestorage.app",
  messagingSenderId: "700516751008",
  appId: "1:700516751008:web:be95aad2ed4900730ddbc5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = firebase.firestore();

// Reference Realtime Database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var phone = getElementVal("phone");
  var msgContent = getElementVal("msgContent");

  // Save messages in Realtime Database
  saveMessagesToRealtimeDB(name, emailid, phone, msgContent);

  // Save messages in Firestore
  saveMessagesToFirestore(name, emailid, phone, msgContent);

  // Enable alert
  document.querySelector(".alert").style.display = "block";

  // Remove alert after 3 seconds
  setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("contactForm").reset();
}

const saveMessagesToRealtimeDB = (name, emailid, phone, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
      name: name,
      emailid: emailid,
      phone: phone,
      msgContent: msgContent,
  });
};

const saveMessagesToFirestore = (name, emailid, phone, msgContent) => {
  firestore.collection("contactForm").add({
      name: name,
      emailid: emailid,
      phone: phone,
      msgContent: msgContent,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  }).then(() => {
      console.log("Data saved in Firestore!");
  }).catch((error) => {
      console.error("Error saving to Firestore: ", error);
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
