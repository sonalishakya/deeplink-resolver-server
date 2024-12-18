"use client";
import { styled } from "@mui/material/styles";
import { Box, Container, Toolbar } from "@mui/material";
import { ThemeTogglerButton } from "./ThemeTogglerButton";
import { useAppTheme } from "../hooks";
// import Background_Img from "../../assets/images/Background.jpg";


export const BackgroundContainer: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const {mode} = useAppTheme()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Background = styled(Box)(() => ({
	backgroundImage: `url(${ mode === "light" ? "/background.jpg" : "/background_inverted.jpg"})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

	return (
		<Background>
			<Container
				sx={{
					minHeight: "100vh",
				}}
			>
				<Toolbar>
					<ThemeTogglerButton />
				</Toolbar>
				{children}
			</Container>
		</Background>
	);
};
