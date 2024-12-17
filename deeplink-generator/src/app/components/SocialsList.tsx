import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";

export const SocialsList = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "flex-start",
				py: 2,
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Typography variant="h6" color="primary" align="center">
				Share directly on Socials
			</Typography>
			{/* <Grid container spacing={1}>
				<Grid size={{ xs: 12 }}>

				</Grid>
			</Grid> */}
		</Box>
	);
};
