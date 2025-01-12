import { Firestore, DocumentData, updateDoc } from 'firebase/firestore'
import { createDocumentRef } from './createDocumentRef'

export async function update<T extends DocumentData>(
    db: Firestore,
    collectionPath: string,
    documentId: string,
    data: Partial<T>
): Promise<void> {
    const docRef = createDocumentRef<T>(db, collectionPath, documentId)
    const updateData = {
        ...data,
        updatedAt: new Date(),
    }
    await updateDoc(docRef, updateData as DocumentData)
} 