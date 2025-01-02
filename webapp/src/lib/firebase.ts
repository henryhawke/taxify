import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
  apiKey: 'AIzaSyDl7zWB82tW34Vs5yQ8On2uFRL9j1JyUVY',
  authDomain: 'taxify.firebaseapp.com',
  projectId: 'taxify',
  storageBucket: 'taxify.appspot.com',
  messagingSenderId: '825992944489',
  appId: '1:825992944489:web:970dfd65d38770c4afbbf8',
  measurementId: 'G-CBHWG9DXFY',
}
// Initialize Firebase
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const functions = getFunctions(app)
export const platformDevIP = '127.0.0.1' // For web development
