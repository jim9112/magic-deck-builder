import {
  PUBLIC_API_KEY,
  PUBLIC_AUTH_DOMAIN,
  PUBLIC_PROJECT_ID,
  PUBLIC_STORAGE_BUCKET,
  PUBLIC_MESSAGING_SENDER_ID,
  PUBLIC_APP_ID,
} from '$env/static/public';
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: PUBLIC_API_KEY,
  authDomain: PUBLIC_AUTH_DOMAIN,
  projectId: PUBLIC_PROJECT_ID,
  storageBucket: PUBLIC_STORAGE_BUCKET,
  messagingSenderId: PUBLIC_MESSAGING_SENDER_ID,
  appId: PUBLIC_APP_ID,
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}
console.log('test')
export { firebaseApp }
