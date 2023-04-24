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
		body1: {
			fontFamily: "Inter",
			textTransform: "none",
			fontSize: 24,
		},
		body2: {
			fontFamily: "Inter",
			textTransform: "none",
			fontSize: 18,
		},
		body3: {
			fontFamily: "Inter",
			textTransform: "none",
			fontSize: 14
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
		}
	},
	palette: {
		primary: {
			light: "#ffffff",
			main: "#009444",
			dark: "#004b23",
		},
		clickme: {
			main: "#FBB040",
			dark: "#C98C30",
		},
	},
});

const theme = responsiveFontSizes(themeBase);

export default theme;
