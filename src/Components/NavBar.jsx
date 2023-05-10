/** @jsxImportSource @emotion/react */

import { useState, useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Grid, Stack, Box, useMediaQuery, Typography, IconButton, Collapse, Tooltip, Paper, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MyButton from "../Components/Button";
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

const links = [
	{ addr: "/video-stream", label: "Video Stream" },
	{ addr: "/dashboard", label: "Dashboard" },
	{ addr: "/control-panel", label: "Control Panel" },
	{ addr: "settings", label: "Settings" }
];

const inheritTextDecoration = {
	textDecoration: "inherit",
};

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
						<NavLink css={inheritTextDecoration} to="/">
							<Typography sx={{ color: "primary.main", "&:hover": { color: "primary.dark" } }} variant="title">AutoAquaponics</Typography>
						</NavLink>
					</Grid>
					{!isSmall && <Grid item xs>
						<NavBarLinks links={links} />
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
				<Paper elevation={3} sx={{ mx: 3, marginBottom: 5 }}>
					{/* tsk tsk Don't Repeat Yourself */}
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 3 }} href="/video-stream" label={"Video Stream"} divider={true}>
							<ListItemIcon>
								<VideocamIcon />
							</ListItemIcon>
							<ListItemText><Typography variant={"body1"}>Video Stream</Typography></ListItemText>
						</ListItemButton>

						<ListItemButton sx={{ pl: 3 }} href="/dashboard" label={"Dashboard"} divider={true}>
							<ListItemIcon>
								<DashboardIcon />
							</ListItemIcon>
							<ListItemText><Typography variant={"body1"}>Dashboard</Typography></ListItemText>
						</ListItemButton>

						<ListItemButton sx={{ pl: 3 }} href="/control-panel" label={"Control Panel"} divider={true}>
							<ListItemIcon>
								<BuildIcon />
							</ListItemIcon>
							<ListItemText><Typography variant={"body1"}>Control Panel</Typography></ListItemText>
						</ListItemButton>

						<ListItemButton sx={{ pl: 3 }} href="settings" label={"setting"} divider={true}>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText><Typography variant={"body1"}>Settings</Typography></ListItemText>
						</ListItemButton>
					</List>
				</Paper>
			</Collapse>
		</Box>
	);
};

const NavBarLinks = ({ links }) => {
	const linkStyle = {
		color: "common.black",
		typography: "link",
		px: 0,
		py: 1,
		textDecoration: "none",
		borderRadius: 50,
	};
	const hoverLinkStyle = {
		filter: "drop-shadow(10px 6px 30px rgba(0, 0, 0, 1))",
	};
	const activeLinkStyle = {
		px: 4,
		py: 1,
		bgcolor: "common.white",
		filter: "drop-shadow(1px 1px 20px rgba(0, 0, 0, 0.2))",
	};

	return (
		<Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-evenly" alignItems="center">
			{links.map((link) =>
				<Grid item key={link.label}>
					<NavLink css={inheritTextDecoration} to={link.addr}>{({ isActive }) =>
						<Box sx={[
							linkStyle,
							isActive ? activeLinkStyle : { "&:hover": hoverLinkStyle }
						]}>
							{link.label}
						</Box>
					}</NavLink>
				</Grid>
			)}
		</Stack>
	);
};

export default NavBar;
