import { Tooltip, IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../Hooks/UserContext";
import { auth } from "../firebase";
import { signOut, sendPasswordResetEmail } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { theme } from "../styling";

const AccountBubble = () => {
	const user = useContext(UserContext);
	const letter = user.email[0].toUpperCase();
	const navigate = useNavigate();
	const toast_config = { position: toast.POSITION.TOP_CENTER, autoClose: 2000 };

	// variables for the Menu
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleLogout = () => {
		signOut(auth).then(() => {
			toast("Logged out!", toast_config);
			setAnchorEl(null);
			navigate("/");
		}).catch((error) => {
			toast.error("Error logging out", toast_config);
			console.error(error);
		});
	};

	return (
		<>
			<Tooltip title={`Logged in as ${user.email}`}>
				<IconButton
					id="account-button"
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={event => setAnchorEl(event.currentTarget)}
				>
					<Avatar sx={{ bgcolor: theme.palette.primary.dark }}>
						{letter}
					</Avatar>
				</IconButton>
			</Tooltip>
			<Menu
				id="account-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={() => setAnchorEl(null)}
				MenuListProps={{
					'aria-labelledby': 'account-button',
				}}
			>
				<MenuItem onClick={handleLogout}>
					Logout
				</MenuItem>
				<MenuItem component={Link} to="/settings">
                	Settings
				</MenuItem>
			</Menu>
		</>
	)
};

export default AccountBubble;
