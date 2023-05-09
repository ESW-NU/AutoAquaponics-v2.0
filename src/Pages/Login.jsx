import React from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Box, Paper, TextField, Button as MuiButton, Stack, Typography, CircularProgress } from "@mui/material";
import  MyButton from "../Components/Button";
import { auth } from "../firebase";

const requestFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdnzIE5u7dGyqt3qfcFstCCYsDW7Hskc6lQtDEGkmvgLd2bbA/viewform?usp=sf_link";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifying, setVerifying] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	// deprecate soon; logging out should be done from the top-right avatar
	const handleLogout = () => {
		signOut(auth).then(() => {
			console.log("SIGNED OUT")
		}).catch((error) => {
			console.error(error);
		});
	};

	const handleSubmit = async () => {
		setVerifying(true);
		try {
			await signInWithEmailAndPassword(auth, email, password)
			console.log("SIGNED IN")
			navigate("/");
		} catch(error) {
			if (error.message.includes("auth/user-not-found") || error.message.includes("auth/invalid-email")) {
				setErrorMessage("Invalid email");
			} else if (error.message.includes("auth/wrong-password")) {
				setErrorMessage("Incorrect password");
			} else {
				setErrorMessage("Unknown error occurred");
			}
		};
		setVerifying(false);
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			<Paper sx={{ maxWidth: 400, p: 3 }}>
				<Stack alignItems="center" spacing={1}>
					<Typography variant="h3" textAlign="center">
						Log in for admin access to modify control panel.
					</Typography>
					<MuiButton
						variant="text"
						color="clickme"
						sx={{ typography: "link" }}
						onClick={() => window.open(requestFormUrl, "_blank")}
					>
						Request an account
					</MuiButton>
					<TextField
						variant="filled"
						label="Email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						error={errorMessage.includes("email")}
					/>
					<TextField
						variant="filled"
						label="Password"
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						error={errorMessage.includes("password")}
					/>
					{errorMessage && <Typography variant="body1" color="error">{errorMessage}</Typography>}
					{verifying ? (
						<MyButton disabled>Logging in...</MyButton>
					) : (
						<MyButton onClick={handleSubmit}>Login</MyButton>
					)}
					<MyButton onClick={handleLogout}>Logout</MyButton> {/* deprecate this soon in favor of logging out from the avatar in the top right*/}
				</Stack>
			</Paper>
		</Box>
	);
};

export default Login