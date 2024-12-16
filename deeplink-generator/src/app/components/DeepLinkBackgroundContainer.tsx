import { Container } from "@mui/material";
import React from "react";

export const DeepLinkBackgroundContainer: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<Container
			sx={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			{children}
		</Container>
	);
};
