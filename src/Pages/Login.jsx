import React from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function loginUser(){
	const auth = getAuth();
	let email = document.getElementsByName("email")[0].value;
	let password = document.getElementsByName("password")[0].value;
	signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
	  })
	  .catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
	  });
};

export const Login = () => {
	return (
	  <div className="App">
			<div className="Pages">
				<div>
					<label for="email">Email:</label>
					<input type="email" id="email" name="email"/><br/>
					<label for="password">Password:</label>
					<input type="password" id="password" name="password"/><br/>
					<button onClick={loginUser}>Submit</button>
				</div>
			</div>
		</div>
	);
};