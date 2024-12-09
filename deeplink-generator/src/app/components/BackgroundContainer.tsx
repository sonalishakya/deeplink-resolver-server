'use client';
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
// import Background_Img from "../../assets/images/Background.jpg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Background = styled(Box)(() => ({
	backgroundImage: `url("/background.jpg")`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "100vh",
	justifyContent: "center",
	alignItems: "center",
}));

export const BackgroundContainer: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<Background>
			<Container
				sx={{
					minHeight: "100vh",
				}}
			>
				{children}
			</Container>
		</Background>
	);
};
