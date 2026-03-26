importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDIRCz9Owin5QYjagjXWY3fG7Ua3NbFVsk",
  authDomain: "studio-6378666108-ea9e8.firebaseapp.com",
  projectId: "studio-6378666108-ea9e8",
  messagingSenderId: "1035429361471",
  appId: "1:1035429361471:web:145d3e9368820f4619458a"
});

const messaging = firebase.messaging();

// 🔔 Background notification
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification("New Message", {
    body: payload.notification.body,
    icon: "icon.png"
  });
});
