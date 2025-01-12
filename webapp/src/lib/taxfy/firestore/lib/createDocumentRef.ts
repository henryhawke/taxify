import {
    Firestore,
    DocumentData,
    doc,
    DocumentReference,
} from 'firebase/firestore'

export function createDocumentRef<T extends DocumentData>(
    db: Firestore,
    collectionPath: string,
    documentId: string
): DocumentReference<T> {
    const ref = doc(db, collectionPath, documentId)
    return ref as DocumentReference<T>
} 