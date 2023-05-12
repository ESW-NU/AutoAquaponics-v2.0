import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../Hooks/UserContext";
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import theme from "../styling";

const AccountBubble = () => {
    
  const handleLogout = () => {
    signOut(auth).then(() => {
      setShowLogoutBox(false);
      navigate("/");
    }).catch((error) => {
      console.error(error);
    });
  };
  
  const [showLogoutBox, setShowLogoutBox] = useState(false);
  const user = useContext(UserContext);
  const letter = user.email[0].toUpperCase();
  const navigate = useNavigate();
  
  return(
    <div style={{ position: 'relative' }}>
      <Avatar 
        onClick={() => setShowLogoutBox(!showLogoutBox)} 
        sx={{bgcolor: theme.palette.primary.dark}}
      >
        {letter}
      </Avatar>
      {showLogoutBox && (
      <Button 
        variant="contained" 
        color="clickme"
        style={{
          position: 'absolute',
          top: '110%',
          left: '-100%',
          zIndex: 999
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>
      )}
    </div>	
  )
};

export default AccountBubble;
