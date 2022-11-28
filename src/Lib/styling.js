import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
        fontFamily: "Inter",
        textTransform: "none",
        fontSize: 24,
      },
      body: {
        fontFamily: "Inter",
        textTransform: "none",
        fontSize: 16,
      },
    },
  });