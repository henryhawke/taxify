import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAB5IvKmGEHdxcneVI_RbPHydhhIbmqvXU",
  authDomain: "taxifyio.firebaseapp.com",
  projectId: "taxifyio",
  storageBucket: "taxifyio.firebasestorage.app",
  messagingSenderId: "923664427725",
  appId: "1:923664427725:web:059a47037eb410fcdd1784",
  measurementId: "G-GEJB7NF9LX"
}
// Initialize Firebase
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const functions = getFunctions(app, 'us-central1')
export const storage = getStorage(app)
export const platformDevIP = '127.0.0.1' // For web development

// Connect to Functions emulator in development
if (process.env.NODE_ENV === 'development') {
  connectFunctionsEmulator(functions, platformDevIP, 5001)
}
