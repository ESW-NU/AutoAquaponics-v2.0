/** @jsxImportSource @emotion/react */

import { useState, useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Grid, Stack, Box, useMediaQuery, Typography, IconButton, Collapse, Tooltip, Paper, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MyButton from "../Components/Button";
import BubbleNavLinks from './BubbleNavLinks';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import theme from "../styling";
import { UserContext } from "../Hooks/UserContext";
import { auth } from '../firebase';
import { signOut } from '@firebase/auth';
import VideocamIcon from '@mui/icons-material/Videocam';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import NavLinksPanel from './NavLinksPanel';

const links = [
	{ addr: "/video-stream", label: "Video Stream" },
	{ addr: "/dashboard", label: "Dashboard" },
	{ addr: "/control-panel", label: "Control Panel" },
	{ addr: "settings", label: "Settings" }
];

export const NavBar = () => {
	const isSmall = useMediaQuery(theme.breakpoints.down("md"));
	const [open, setOpen] = useState(false);
	const user = useContext(UserContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		signOut(auth).then(() => {
			console.log("Signed out");
			navigate("/");
		}).catch((error) => {
			console.error(error);
		});
	};

	return (
		<Box>
			<Stack direction="row" alignItems="center" spacing={3} sx={{ p: 2 }}>
				{isSmall && <IconButton onClick={() => setOpen(!open)}>
					{open ? <MenuOpenRoundedIcon /> : <MenuRoundedIcon />}
				</IconButton>}
				<Grid container direction="row" justifyContent="space-between" alignItems="center">
					<Grid item>
						<NavLink css={{ textDecoration: "inherit" }} to="/">
							<Typography sx={{ color: "primary.main", "&:hover": { color: "primary.dark" } }} variant="title">AutoAquaponics</Typography>
						</NavLink>
					</Grid>
					{!isSmall && <Grid item xs>
						<Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-evenly" alignItems="center">
							<BubbleNavLinks links={links} />
						</Stack>
					</Grid>}
					<Grid item>
						{user === null ? (
							<MyButton onClick={() => navigate("/login")}>Login</MyButton>
						) : (
							<Tooltip title={`signed in as ${user.email}`}>
								<MyButton onClick={handleLogout}>Logout</MyButton>
							</Tooltip>
						)}
					</Grid>
				</Grid>
			</Stack>
			<Collapse in={open && isSmall} timeout="auto" unmountOnExit>
				<Box sx={{ p: 3 }}>
					<NavLinksPanel fullWidth links={[
						{ label: "Video Stream", addr: "/video-stream", icon: <VideocamIcon/> },
						{ label: "Dashboard", addr: "/dashboard", icon: <DashboardIcon/> },
						{ label: "Control Panel", addr: "/control-panel", icon: <BuildIcon/> },
						{ label: "Settings", addr: "/settings", icon: <SettingsIcon/> },
					]}/>
					<Divider sx={{ my: 2 }}/>
				</Box>
			</Collapse>
		</Box>
	);
};

export default NavBar;
