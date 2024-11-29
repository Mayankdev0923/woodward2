import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { firebaseConfig } from "./Firebase";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDocumentFieldValue(
  collectionName: string,
  documentName: string,
  fieldName: string
) {
  try {
    // Reference to the specific document in the specified collection
    const documentRef = doc(db, collectionName, documentName);

    // Fetch the document
    const docSnap = await getDoc(documentRef);

    // Check if document exists
    if (docSnap.exists()) {
      // Extract and return the specified field
      const fieldValue = docSnap.data()[fieldName];
      return fieldValue;
    } else {
      console.log("No such document exists!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return null;
  }
}

export default getDocumentFieldValue;