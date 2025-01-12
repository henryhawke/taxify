/* eslint-disable @typescript-eslint/no-unused-vars */
import { createCollectionRef } from './createCollectionRef'
import {
  Firestore,
  DocumentData,
  serverTimestamp,
  writeBatch,
  doc,
} from 'firebase/firestore'

type BatchResult = {
  success: boolean
  errors: Error[]
}

export const addMultipleCollectionItems = async <T extends DocumentData>(
  db: Firestore,
  collectionPath: string,
  items: T[]
): Promise<BatchResult> => {
  const MAX_BATCH_SIZE = 500
  const errors: Error[] = []

  try {
    const chunkedItems = items.length > MAX_BATCH_SIZE
      ? Array.from({ length: Math.ceil(items.length / MAX_BATCH_SIZE) }, (_, i) =>
        items.slice(i * MAX_BATCH_SIZE, (i + 1) * MAX_BATCH_SIZE)
      )
      : [items]

    for (const chunk of chunkedItems) {
      const batch = writeBatch(db)
      const collectionRef = createCollectionRef<T>(db, collectionPath)

      for (const item of chunk) {
        const docRef = doc(collectionRef)
        const itemWithTimestamps = {
          ...item,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }
        batch.set(docRef, itemWithTimestamps)
      }

      await batch.commit()
    }

    return { success: true, errors: [] }
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error))
    return { success: false, errors: [err] }
  }
}

