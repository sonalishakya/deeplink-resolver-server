import { Paper, Typography } from "@mui/material";
import React from "react";
type CustomHeadingProps = {
	heading: string;
};

export const CustomHeading = ({ heading }: CustomHeadingProps) => {
	return (
		<Paper sx={{ bgcolor: "primary.light", p: 2 }}>
			<Typography variant="h1" color="white">
				{heading}
			</Typography>
		</Paper>
	);
};

