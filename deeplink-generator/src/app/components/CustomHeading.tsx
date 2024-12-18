import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { ThemeTogglerButton } from "./ThemeTogglerButton";
type CustomHeadingProps = {
	heading: string;
};

export const CustomHeading = ({ heading }: CustomHeadingProps) => {
	return (
		<Paper sx={{ bgcolor: "primary.main", p: 2, width: "100%", my: 1 }}>
			<Stack justifyContent="space-between" alignItems="center" direction="row">
				<Typography variant="h4">{heading}</Typography>
				<ThemeTogglerButton />
			</Stack>
		</Paper>
	);
};
