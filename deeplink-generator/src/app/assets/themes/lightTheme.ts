import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			dark: "#0d7cc1",
			main: "#1ca2e0",
			light: "#178bb5",
		},
		text: {
			primary: "#000000",
		},
	},
	typography: {
		h1: {
			fontWeight: 900,
			fontStyle: "italic",
			fontSize: "7.3rem",
			textShadow: "1px 1px 0 #1ca2e0, -1px -1px 0 #0d7cc1",
			textTransform: "uppercase",
		},
		h2: {
			fontWeight: 800,
			fontStyle: "italic",
			fontSize: "7.2rem",
			textShadow: "1px 1px 0 #1ca2e0, -1px -1px 0 #0d7cc1",
			textTransform: "uppercase",
			WebkitTextStroke: "1px #0d7cc1", // Outline color
			color: "white", // Fill color
		},
		h3: {
			fontWeight: 700,
			color: "white",
			fontStyle: "italic",
			fontSize: "2rem",
		},
		h4: {
			fontWeight: 550,
			color: "white",
			fontStyle: "italic",
			fontSize: "1.6rem",
		},
		body1: {
			fontWeight: 500,
			fontSize: "1.2rem",
		},
		body2: {
			fontWeight: 550,
			color: colors.grey[500],
			fontSize: "1.2rem",
		}
	},
});
