import {
  Firestore,
  DocumentData,
  collection,
  CollectionReference,
} from 'firebase/firestore'

export function createCollectionRef<T extends DocumentData>(
  db: Firestore,
  path: string
): CollectionReference<T> {
  const ref = collection(db, path)
  return ref as CollectionReference<T>
}
