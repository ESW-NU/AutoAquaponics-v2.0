import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Box, Paper, TextField, Stack, Typography } from "@mui/material";
import MyButton from "../Components/Button";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const [sending, setSending] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();
	const toast_config = {position: toast.POSITION.TOP_CENTER, autoClose:2000};

	const handlePasswordChange = async () => {
		setSending(true);
		try {
			await sendPasswordResetEmail(auth, email);
			console.log(`Sent password reset email to ${email}`);
			toast.success('Password reset email sent!', toast_config);
			navigate("/login");
		} catch(error) {
			console.log(error.message)
			if (error.message.includes("auth/invalid-email") || error.message.includes("auth/user-not-found")) {
				setErrorMessage("Invalid email");
			}
			else if (error.message.includes("auth/missing-email")) {
				setErrorMessage("Please enter an email address");
			} else {
				setErrorMessage("Unknown error occurred");
			}
		};
		setSending(false);
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			<Paper sx={{ maxWidth: 400, p: 3 }}>
				<Stack alignItems="center" spacing={1}>
					<Typography variant="h3" textAlign="center">
						Reset Password
					</Typography>
					<TextField
						variant="filled"
						label="Email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						error={errorMessage.includes("email")}
					/>
					{errorMessage && <Typography variant="body1" color="error">{errorMessage}</Typography>}
					{sending ? (
						<MyButton disabled>Sending email..</MyButton>
					) : (
						<MyButton onClick={handlePasswordChange}>Send reset email</MyButton>
					)}
				</Stack>
			</Paper>
		</Box>
	);
};

export default ResetPassword
