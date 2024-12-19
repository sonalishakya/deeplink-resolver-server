"use client";
import React from "react";
import { useAppTheme } from "../hooks";
import { Grow, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";

export const ThemeTogglerButton = () => {
	const { toggleTheme, mode } = useAppTheme();
	const theme = useTheme();
	return (
		<Grow in timeout={800}>
			<IconButton
				onClick={() => toggleTheme()}
				sx={{ border: `2px solid ${theme.palette.primary.dark}`, bgcolor: theme.palette.grey[100] }}
			>
				{mode === "dark" ? (
					<DarkModeTwoToneIcon color="primary" />
				) : (
					<LightModeTwoToneIcon />
				)}
			</IconButton>
		</Grow>
	);
};
