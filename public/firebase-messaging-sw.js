// public/firebase-messaging-sw.js

// Scripts for Firebase App and Messaging
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClR5lVMHR81sEniHgbJwrD-VNAC4sf8R0",
  authDomain: "agridocai.firebaseapp.com",
  projectId: "agridocai",
  storageBucket: "agridocai.firebasestorage.app",
  messagingSenderId: "879816259212",
  appId: "1:879816259212:web:6b4085f783450acab1eda9",
  measurementId: "G-N99XGD35QM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icons/icon-192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
