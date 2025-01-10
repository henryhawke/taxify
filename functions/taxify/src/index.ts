import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const app = initializeApp()
export const db = getFirestore(app)

export {
  // This part is automatically generated by Taxfy Framework.
  // Please do not edit this part.
  // Taxfy Doc: https://taxfy.dev
  addStreamUserChatRoomMessage,
  addVertexMessage,
  createUserChatRoom,
  addUserChatRoomMessage,
  createSignInData,
  verifySIWS,
} from './routings'
