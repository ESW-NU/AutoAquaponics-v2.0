import React, { useState, useContext } from "react";
import { UserContext } from "../Hooks/UserContext";
import { Container, Typography, TextField, Button, FormControlLabel, Box, Grid, Modal } from "@mui/material";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { deleteUser, updatePassword } from "firebase/auth";
import { ThemeContext } from '../themeContent';

const Settings = () => {
    const user = useContext(UserContext);
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
    const [editMode, setEditMode] = useState({ contact: false, account: false });
    const [contactInfo, setContactInfo] = useState({ email: user.email, phone: "" }); // Replace with actual data
    const [accountInfo, setAccountInfo] = useState({ displayName: user.displayName || user.email });
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [animations, setAnimations] = useState(true); // Replace with actual state
    const toast_config = { position: toast.POSITION.TOP_CENTER, autoClose: 2000 };
    const [emailToDelete, setEmailToDelete] = useState('');
    const email = user ? user.email : '';
    const displayName = user ? (user.displayName || user.email) : '';

    const handleEditToggle = (section) => {
        setEditMode({ ...editMode, [section]: !editMode[section] });
    };

    const handleSaveContactInfo = () => {
        // Logic to save contact info
        setEditMode({ ...editMode, contact: false });
        toast.success("Contact info updated!");
    };

    const handleSaveAccountInfo = () => {
        // Logic to save account info
        setEditMode({ ...editMode, account: false });
        toast.success("Account info updated!");
    };

    const handleChangePassword = () => {
		console.log(user.email)
		sendPasswordResetEmail(auth, user.email)
		.then(() => {
			toast.success("Password reset email sent!", toast_config);
		}).catch((error) => {
			toast.error("Error sending password reset email", toast_config);
			console.error(error)
		});
	};

    const handleDeleteAccount = () => {
        deleteUser(auth.currentUser)
            .then(() => {
                toast.success("Account deleted successfully");
                // Redirect to home or login page
            })
            .catch((error) => {
                toast.error("Error deleting account");
                console.error(error);
            });
    };

    return (
        <div>
            <h2>Settings</h2>
            <div>
                <h3>Contact Info</h3>
                {editMode.contact ? (
                    <>
                        <TextField label="Email" value={contactInfo.email} onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })} />
                        <TextField label="Phone" value={contactInfo.phone} onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })} />
                        <Button onClick={handleSaveContactInfo}>Save</Button>
                    </>
                ) : (
                    <>
                        <p>Email: {contactInfo.email}</p>
                        <p>Phone: {contactInfo.phone}</p>
                        <Button onClick={() => handleEditToggle("contact")}>Edit</Button>
                    </>
                )}
            </div>
            <div>
                <h3>Account Management</h3>
                {editMode.account ? (
                    <>
                        <TextField label="Display Name" value={accountInfo.displayName} onChange={(e) => setAccountInfo({ ...accountInfo, displayName: e.target.value })} />
                        <Button onClick={handleSaveAccountInfo}>Save</Button>
                    </>
                ) : (
                    <>
                        <p>Display Name: {accountInfo.displayName}</p>
                        <Button onClick={() => handleEditToggle("account")}>Edit</Button>
                    </>
                )}
                <Button onClick={handleChangePassword}>Change Password</Button>
                <Button color="error" onClick={() => setShowDeleteConfirm(true)}>Delete Account</Button>
                {showDeleteConfirm && (
                    <Modal
                        title="Confirm Account Deletion"
                        onConfirm={handleDeleteAccount}
                        onCancel={() => setShowDeleteConfirm(false)}
                    >
                        <p>Type your email to confirm: </p>
                        <TextField placeholder="Email" />
                    </Modal>
                )}
            </div>
            <div>
                <h3>Appearance</h3>
                <FormControlLabel
                    control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                    label="Dark Mode"
                />
                <FormControlLabel control={<Switch checked={animations} onChange={() => setAnimations(!animations)} />} label="Animations" />
            </div>
        </div>
    );
};

export default Settings;
