import { DownloadTwoTone } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

export const DownloadQr = () => {
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
			<Typography variant="h6" align="center" color="primary.light" mb={2}>
				Download QR
			</Typography>
			<IconButton size="large" sx={{ color: "white", bgcolor: "primary.light", "&:hover": { bgcolor: "primary.dark" } }}>
				<DownloadTwoTone />
			</IconButton>
		</Box>
	);
};
