import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyC9zNURO1pjckQ9tqCpTkTPVw7yEawWj3w",
    authDomain: "restaurant-6fed6.firebaseapp.com",
    databaseURL: "https://restaurant-6fed6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restaurant-6fed6",
    storageBucket: "restaurant-6fed6.appspot.com",
    messagingSenderId: "1038577916459",
    appId: "1:1038577916459:web:048c584c5e46f3b7bde86e"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }