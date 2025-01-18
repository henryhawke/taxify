import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyAB5IvKmGEHdxcneVI_RbPHydhhIbmqvXU",
  authDomain: "taxifyio.firebaseapp.com",
  projectId: "taxifyio",
  storageBucket: "taxifyio.appspot.com",
  messagingSenderId: "923664427725",
  region: 'us-central1'
}

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const functions = getFunctions(app, 'us-central1')

// Connect to emulators in development
if (process.env.NODE_ENV === 'development') {
  try {
    connectFunctionsEmulator(functions, 'localhost', 5001)
    console.log('Connected to Functions emulator')
  } catch (error) {
    console.warn('Failed to connect to Functions emulator:', error)
  }
}

export default app
