import React from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Navigate } from 'react-router-dom';
import { useState } from "react";
import { Button, Stack, FilledInput, Typography } from "@mui/material";

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirectToHome, setRedirectToHome] = useState(false);
	const auth = getAuth();
	// const provider = new GoogleAuthProvider();

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
				<Typography variant="body2" textAlign="center">
					Log in for admin access to modify control panel.
				</Typography>
				<form onSubmit={handleSubmit}>     
					<Stack spacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3 }} 
					alignItems="center">
						<FilledInput
							variant="filled"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							sx={{
									typography: "body2",
									minWidth: 200,
									maxWidth: 400,
									maxHeight: 45
							}}
						/>  
						<FilledInput
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							sx={{
									height: 45,
									typography: "body2",
									minWidth: 200,
									maxWidth: 400
							}}
						/>
						<Button type="submit" 
										sx={{
												borderRadius: 75,
												px: 2,
												typography: "link",
												maxWidth: 70,
												boxShadow: 1
										}}
						>
							Login
						</Button>
						<Button	
							variant="outlined"
							sx={{
									borderRadius: 100,
									px: 5,
									typography: "link",
									maxWidth: 70
							}}
							onClick={handleLogout}>
							Logout
						</Button>
					</Stack>
				</form>
			</div>
		</div>
	);
};

export default Login