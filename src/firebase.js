import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

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

// The following line will generate an App Check debug token that should be registered in the Firebase
// in order to verify API calls. This bypasses the ReCaptcha attestation, but requires access to the
// console. Production builds should have the following line set to false.
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = true; // eslint-disable-line no-restricted-globals
const reCaptchaPublicKey = '6LcriVwlAAAAADRhpcZMGLPXslMx4QH2KTfTn5tt';
const appCheck = initializeAppCheck(app, { // eslint-disable-line no-unused-vars
    provider: new ReCaptchaV3Provider(reCaptchaPublicKey),
    isTokenAutoRefreshEnabled: true,
});

export const db = getFirestore(app);