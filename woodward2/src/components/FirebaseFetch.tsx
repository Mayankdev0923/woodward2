import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC516jLZOmfK0qeahzTn0fh_t4-3Ukph4s",
  authDomain: "woodward2-7dfae.firebaseapp.com",
  projectId: "woodward2-7dfae",
  storageBucket: "woodward2-7dfae.firebasestorage.app",
  messagingSenderId: "719248142633",
  appId: "1:719248142633:web:d8b5af816dfb36d1c0c738",
};

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