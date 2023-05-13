import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const themeBase = createTheme({
	typography: {
		h1: {
			fontFamily: "Space Grotesk",
			textTransform: "none",
			fontSize: 56,
			fontWeight: 600,
		},
		h2: {
			fontFamily: "Space Grotesk",
			textTransform: "none",
			fontSize: 32,
		},
		h3: {
			fontFamily: "Space Grotesk",
			textTransform: "none",
			fontSize: 24,
		},
		h4: {
			fontFamily: "Inter",
			textTransform: "none",
			fontSize: 24,
			lineHeight: 1.5,
		},
		body1: {
			fontFamily: "Inter",
			textTransform: "none",
			fontSize: 18,
			lineHeight: 1.43,
		},
		body2: {
			fontFamily: "Inter",
			textTransform: "none",
			fontSize: 14,
		},
		title: {
			fontFamily: "Space Grotesk, sans-serif",
			textTransform: "none",
			fontWeight: 700,
			fontSize: 24,
		},
		link: {
			fontFamily: "Inter, sans-serif",
			textTransform: "none",
			fontSize: 18,
			textDecoration: "none",
		},
		button: {
			fontFamily: "Inter",
		},
	},
	palette: {
		primary: {
			light: "#4cc174",
			main: "#009444",
			dark: "#006326",
		},
		clickme: {
			main: "#FBB040",
			dark: "#C98C30",
		},
		edited: {
			dark: "#b28704",
			main: "#ffc107",
			light: "#ffcd38",
		},
	},
});

const theme = responsiveFontSizes(themeBase);

export default theme;
