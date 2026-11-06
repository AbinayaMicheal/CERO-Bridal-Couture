import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4Uza3rXZsPTxpoLFZD9sGrD3KExTO424",
  authDomain: "cero-bridal-couture.firebaseapp.com",
  projectId: "cero-bridal-couture",
  storageBucket: "cero-bridal-couture.firebasestorage.app",
  messagingSenderId: "509314242408",
  appId: "1:509314242408:web:2dc7bfa8802404dd2228dd",
  measurementId: "G-B9T40GCSQR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);