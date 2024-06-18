import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqlyV-rwVV5YgzFTV8tZjtOilCxSI4q_s",
  authDomain: "miniblog-af486.firebaseapp.com",
  projectId: "miniblog-af486",
  storageBucket: "miniblog-af486.appspot.com",
  messagingSenderId: "814319768078",
  appId: "1:814319768078:web:379ff529de4f3b7170e25f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };