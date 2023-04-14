import React from "react";
import { getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { Navigate } from 'react-router-dom';
import { useState } from "react";

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirectToHome, setRedirectToHome] = useState(false);
	const auth = getAuth();

	const handleLogout = () => {
		const auth = getAuth();
			signOut(auth).then(() => {
				console.log("SIGNED OUT")
			// Sign-out successful.
			}).catch((error) => {
			// An error happened.
				console.error(error);
			});
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			console.log("SIGNED IN")
			setRedirectToHome(true);
			// Sign-in successful.
		} catch (error) {
			// An error happened.
			console.error(error);
		}
	};

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

	return (
	  <div className="App">
			<div className="Pages">
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
					<button type="submit">Log In</button>
					<button onClick={handleLogout}>Log Out</button>
				</form>
			</div>
		</div>
	);
};

export default Login