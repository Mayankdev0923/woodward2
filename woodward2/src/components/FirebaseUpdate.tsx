import { initializeApp } from "firebase/app";
import { getFirestore, doc ,getDoc , setDoc, updateDoc } from "firebase/firestore";
import { firebaseConfig } from "./Firebase";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function setDocumentFieldValue(
  collectionName: string,
  documentName: string,
  fieldName: string,
  fieldValue: any
) {
  try {
    // Reference to the specific document in the specified collection
    const documentRef = doc(db, collectionName, documentName);

    // Check if the document already exists
    const docSnap = await getDoc(documentRef);

    if (docSnap.exists()) {
      // If document exists, update the specified field
      await updateDoc(documentRef, {
        [fieldName]: fieldValue,
      });
    } else {
      // If document doesn't exist, create a new document with the field value
      await setDoc(documentRef, {
        [fieldName]: fieldValue,
      });
      console.log(`New document created with field '${fieldName}' set to ${fieldValue}`);
    }
  } catch (error) {
    console.error("Error updating or setting document:", error);
  }
}

export default setDocumentFieldValue;
