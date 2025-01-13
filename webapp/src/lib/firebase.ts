import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyAB5IvKmGEHdxcneVI_RbPHydhhIbmqvXU",
  authDomain: "taxifyio.firebaseapp.com",
  projectId: "taxifyio",
  storageBucket: "taxifyio.appspot.com",
  messagingSenderId: "1015424892645",
  appId: "1:1015424892645:web:8b9b9b9b9b9b9b9b9b9b9b",
  measurementId: "G-XXXXXXXXXX"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app)

// Initialize Cloud Functions and get a reference to the service
export const functions = getFunctions(app)

export default app
