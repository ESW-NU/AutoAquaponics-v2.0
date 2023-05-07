import { getAuth } from '@firebase/auth';
import {
    initializeApp
} from 'firebase/app'
import {
    getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyASROLzF7oKnE5klKSznqJnBbFzt5B0Cpw",
    authDomain: "autoaquaponics-v2.firebaseapp.com",
    projectId: "autoaquaponics-v2",
    storageBucket: "autoaquaponics-v2.appspot.com",
    messagingSenderId: "316228577470",
    appId: "1:316228577470:web:c956ea24fdba7958ae96ef",
    measurementId: "G-HPCH5Q0L8Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
