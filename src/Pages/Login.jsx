import React from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Navigate } from 'react-router-dom';
import { useState } from "react";
import { Button, Stack, FilledInput, Typography } from "@mui/material";
import { auth } from "../firebase";

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirectToHome, setRedirectToHome] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleLogout = () => {
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
			console.log(error)
			if (error.message.includes("auth/user-not-found") || error.message.includes("auth/invalid-email") ) {
				console.log("user not found")
				setErrorMessage("Incorrect email");
			}
			else if (error.message.includes("auth/wrong-password")) {
				setErrorMessage("Incorrect password");
			}
			else {
				setErrorMessage("Unknown error occurred");
			}
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
						<Button
							variant="link"
							color="clickme"
							sx={{
								borderRadius: 100,
								px: 2,
								typography: "link",
								color: "common.white",
							}}>
							<a href="https://docs.google.com/forms/d/e/1FAIpQLSdnzIE5u7dGyqt3qfcFstCCYsDW7Hskc6lQtDEGkmvgLd2bbA/viewform?usp=sf_link"
							 target="_blank" rel="noopener noreferrer">
								request an account
							</a>
						</Button>
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
							error={errorMessage.includes("email")}
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
							error={errorMessage.includes("password")}
						/>
						{errorMessage && <Typography variant="body2" color="#D02226">{errorMessage}</Typography>}
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