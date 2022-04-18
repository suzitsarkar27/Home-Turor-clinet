import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk1UFrVABw5mDHu35Z6Y8dl19NfnlixWM",
  authDomain: "assignment-10-react-firebass.firebaseapp.com",
  projectId: "assignment-10-react-firebass",
  storageBucket: "assignment-10-react-firebass.appspot.com",
  messagingSenderId: "77727294425",
  appId: "1:77727294425:web:c436e7199cc29cd4c46fc8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
