import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from '@firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
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

if (process.env.NODE_ENV === "development") {
	self.FIREBASE_APPCHECK_DEBUG_TOKEN = process.env.REACT_APP_APP_CHECK_DEBUG_TOKEN ?? true;
} else if (process.env.NODE_ENV === "test") {
	self.FIREBASE_APPCHECK_DEBUG_TOKEN = process.env.REACT_APP_APP_CHECK_DEBUG_TOKEN;
}

let db;
let auth;

if (process.env.REACT_APP_USE_EMULATOR === "true") { 
	// run this with npm run start-emulated
	db = getFirestore();
	auth = getAuth();
	connectAuthEmulator(auth, "http://127.0.0.1:9099");
	connectFirestoreEmulator(db, '127.0.0.1', 8080);
	console.log("Data from emulator (http://127.0.0.1:9099)")
} else {  
	// run this with: npm start
	db = getFirestore(app);
	auth = getAuth(app);
}

export { db, auth };


const reCaptchaPublicKey = '6LcriVwlAAAAADRhpcZMGLPXslMx4QH2KTfTn5tt';
initializeAppCheck(app, {
	provider: new ReCaptchaV3Provider(reCaptchaPublicKey),
	isTokenAutoRefreshEnabled: true,
});
