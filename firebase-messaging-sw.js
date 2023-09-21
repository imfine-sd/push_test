importScripts(
  "https://www.gstatic.com/firebasejs/9.5.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.5.0/firebase-messaging-compat.js",
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

const config = {
  apiKey: "AIzaSyASGvrvhr6QAWDUlGbcGDGoSgIHCMgeg00",
  authDomain: "pushtest-9c500.firebaseapp.com",
  projectId: "pushtest-9c500",
  storageBucket: "pushtest-9c500.appspot.com",
  messagingSenderId: "308592327423",
  appId: "1:308592327423:web:df1974986388c16dbceaca",
  measurementId: "G-BSKJPE9000",
};

// Initialize Firebase
firebase.initializeApp(config);

const isSupported = firebase.messaging.isSupported();

if (isSupported) {
  const messaging = firebase.messaging();

  //백그라운드 서비스워커 설정
  messaging.onBackgroundMessage(messaging, (payload) => {
    console.log(
      "[firebase-messaging-sw.js] Received background message ",
      payload,
    );

    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
      body: payload,
      icon: "/firebase-logo.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  });
}
