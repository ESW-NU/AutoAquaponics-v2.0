import React from "react";
import { Tooltip, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Hooks/UserContext";
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import theme from "../styling";

const AccountBubble = () => {
    
  const user = useContext(UserContext);
  const letter = user.email[0].toUpperCase();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogout = () => {
    signOut(auth).then(() => { 
      setAnchorEl(null);
      navigate("/");
    }).catch((error) => {
      console.error(error);
    });
  };
  
  return(
    <div style={{ position: 'relative' }}>
			<Tooltip title={`signed in as ${user.email}`}>
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
        <MenuItem  
          onClick={handleLogout}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>	
  )
};

export default AccountBubble;
