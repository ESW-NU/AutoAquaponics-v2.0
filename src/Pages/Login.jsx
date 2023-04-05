import React from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";

function loginUser(){
	const auth = getAuth();
	let email = document.getElementsByName("email")[0].value;
	let password = document.getElementsByName("password")[0].value;
	signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		// Signed in 
		console.log("SIGNED IN")
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


const Login = () => {
	return (
	  <div className="App">
			<div className="Pages">
				<div>
					<label for="email">Email:</label>
					<input type="email" id="email" name="email"/><br/>
					<label for="password">Password:</label>
					<input type="password" id="password" name="password"/><br/>
					<button onClick={loginUser}>Submit</button>
					<button onClick={logoutUser}>Log Out</button>
				</div>
			</div>
		</div>
	);
};

export default Login