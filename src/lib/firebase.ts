// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Configuración que te da Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCHQrWw9DzYr1nRMFe2iVytAAIlDkC7wWU",
  authDomain: "molokaih.firebaseapp.co",
  projectId: "molokaih",
  storageBucket: "molokaih.firebasestorage.app",
  messagingSenderId: "1074760693730",
  appId: "1:1074760693730:web:5917bd75b92d7010012bbb",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Storage
export const storage = getStorage(app);
