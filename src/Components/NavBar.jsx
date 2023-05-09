/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Grid, Stack, Box, useMediaQuery, Typography, IconButton, Collapse } from '@mui/material';
import Button from "./Button";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import theme from "../styling";

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
	const navigate = useNavigate();

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
						<Button onClick={()=> navigate("/login")}>Login</Button>
					</Grid>
				</Grid>
			</Stack>
			<Collapse in={isSmall && open}>
				<NavBarLinks links={links} />
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
