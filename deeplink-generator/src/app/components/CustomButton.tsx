"use client";
import { Button, ButtonProps, Grow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

export const CustomButton = ({ children, sx, ...props }: ButtonProps) => {
	const theme = useTheme();
	console.log("BORDER RADIUS", theme.shape.borderRadius);
	return (
		<Grow in timeout={1200}>
			<Button
				variant="contained"
				color="primary"
				sx={{
					m: 1,
					color: "white",
					textTransform: "uppercase",
					borderRadius: theme.shape.borderRadius * 2,
					border: `2px solid ${theme.palette.primary.dark}`,
					"&:hover": {
						backgroundColor: theme.palette.primary.light,
						borderColor: theme.palette.primary.dark,
					},
					...sx,
				}}
				{...props}
			>
				{children}
			</Button>
		</Grow>
	);
};
