/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Grid, Stack, Box, useMediaQuery, Typography, Button, IconButton, Collapse, Paper } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import theme from "../styling";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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

	return (
		<Box>
			<Stack direction="row" alignItems="center" spacing={3} sx={{ p: 2 }}>
				{isSmall && <IconButton onClick={() => setOpen(!open)}>
					{open ? <MenuOpenRoundedIcon/> : <MenuRoundedIcon/>}
				</IconButton>}
				<Grid container direction="row" justifyContent="space-between" alignItems="center">
					<Grid item>
						<NavLink css={inheritTextDecoration} to="/">
							<Typography sx={{ color: "primary.main", "&:hover": { color: "primary.dark" } }} variant="title">AutoAquaponics</Typography>
						</NavLink>
					</Grid>
					{!isSmall && <Grid item xs>
						<NavBarLinks links={links}/>
					</Grid>}
					<Grid item>
						<LoginButton/>
					</Grid>
				</Grid>
			</Stack>
			
      <Collapse in={open} timeout="auto" unmountOnExit>
		<Paper elevation={3} sx={{mx:3, marginBottom:5}}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }} href="/video-stream" label={"Video Stream"} divider={true}> 
		  	<ListItemIcon>
              	<VideocamIcon />
            </ListItemIcon>
		  	<ListItemText><Typography variant={"body2"}>Video Stream</Typography></ListItemText>
          </ListItemButton>

		  <ListItemButton sx={{ pl: 3 }} href="/dashboard" label={"Dashboard"} divider={true}> 
		  	<ListItemIcon>
              	<DashboardIcon />
            </ListItemIcon>
			<ListItemText><Typography variant={"body2"}>Dashboard</Typography></ListItemText>
          </ListItemButton>

		  <ListItemButton sx={{ pl: 3 }} href="/control-panel" label={"Control Panel"} divider={true}> 
		  	<ListItemIcon>
              	<BuildIcon />
            </ListItemIcon>
			<ListItemText><Typography variant={"body2"}>Control Panel</Typography></ListItemText>
          </ListItemButton>

		  <ListItemButton sx={{ pl: 3 }} href="settings" label={"setting"} divider={true}> 
		  	<ListItemIcon>
              	<SettingsIcon />
            </ListItemIcon>
			<ListItemText><Typography variant={"body2"}>Settings</Typography></ListItemText>
          </ListItemButton>
        </List>
		</Paper>
      </Collapse>

			
			{/* <Collapse in={isSmall && open}>
				<NavBarLinks links={links}/>
				
			</Collapse> */}
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

const LoginButton = () => {
	return (
		<Button
			variant="contained"
			color="clickme"
			sx={{
				borderRadius: 100,
				px: 2,
				typography: "link",
				color: "common.white",
			}}
		>
			Login
		</Button>
	)
};

export default NavBar;
