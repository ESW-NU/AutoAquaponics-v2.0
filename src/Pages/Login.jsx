import React from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

function loginUser(){
	const auth = getAuth();
	let email = document.getElementsByName("email")[0].value;
	let password = document.getElementsByName("password")[0].value;
	signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		  console.log("SIGNED IN")
		  // Signed in 
		  const user = userCredential.user;
		  console.log(user)
	  })
	  .catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
	  });
};

function logoutUser(){
	const auth = getAuth();
		signOut(auth).then(() => {
			console.log("SIGNED OUT")
		// Sign-out successful.
		}).catch((error) => {
		// An error happened.
		});
};

function getUser(){
	const auth = getAuth();
	onAuthStateChanged(auth, (user) => {
	  if (user) {
		console.log("CURRENT USER exists with uid: ")
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		const uid = user.uid;
		console.log(uid)
		// ...
	  } else {
		console.log("NO USER LOGGED IN")
		// User is signed out
		// ...
	  }
	});
}
export const Login = () => {
	return (
	  <div className="App">
			<div className="Pages">
				<div>
					<label for="email">Email:</label>
					<input type="email" id="email" name="email"/><br/>
					<label for="password">Password:</label>
					<input type="password" id="password" name="password"/><br/>
					<button onClick={loginUser}>Submit</button><br/>
					<button onClick={logoutUser}>Logout</button><br/>
					<button onClick={getUser}>Check user</button>
				</div>
			</div>
		</div>
	);
};