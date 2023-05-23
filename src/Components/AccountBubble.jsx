import React from "react";
import { Tooltip, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../Hooks/UserContext";
import { auth } from '../firebase';
import { signOut, sendPasswordResetEmail } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import theme from "../styling";

const AccountBubble = () => {
    
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
	const toast_config = {position: toast.POSITION.TOP_CENTER, autoClose:2000};
  const letter = user.email[0].toUpperCase();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
	
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signOut(auth).then(() => { 
			toast('Logged out!', toast_config);
      setAnchorEl(null);
      navigate("/");
    }).catch((error) => {
			toast.error('Error logging out', toast_config);
      console.error(error);
    });
  };
  
	const handlePasswordChange = () => {
		console.log(user.email)
		sendPasswordResetEmail(auth, user.email) 
		.then(() => {
			toast.success('Password reset email sent!', toast_config);
		})
		.catch((error) => {
			toast.error('Error sending password reset email', toast_config);
			console.error(error)
		});
	};

  return(
    <div style={{ position: 'relative' }}>
			<Tooltip title={`Logged in as ${user.email}`}>
				<IconButton
					id="account-button"
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					<Avatar sx={{bgcolor: theme.palette.primary.dark}}>
						{letter}
					</Avatar>
				</IconButton>
			</Tooltip>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'account-button',
        }}
      >
        <MenuItem onClick={handleLogout}>
          Logout
        </MenuItem>
        <MenuItem onClick={handlePasswordChange}>
          Change Password
        </MenuItem>
      </Menu>
    </div>	
  )
};

export default AccountBubble;
