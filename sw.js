// sw.js - Service Worker للإشعارات في الخلفية
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAJdzCaQkxUD0lAWp0G6xRHsMPJL4RFkpQ",
    authDomain: "shein-86c9f.firebaseapp.com",
    projectId: "shein-86c9f",
    storageBucket: "shein-86c9f.firebasestorage.app",
    messagingSenderId: "292671039190",
    appId: "1:292671039190:web:5f22b7fdf7bbf0f6d18b77",
    measurementId: "G-JBL21T1DZ0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title || 'منصة طرود شي إن';
    const notificationOptions = {
        body: payload.notification.body || 'لديك تحديث جديد في الطرود',
        icon: 'https://cdn-icons-png.flaticon.com/512/684/684900.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/684/684900.png',
        vibrate: [200, 100, 200]
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});