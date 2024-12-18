"use client";
import { IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type DeepLinkCopyBoxProps = {
	deepLink: string;
};
export const DeepLinkCopyBox = ({ deepLink }: DeepLinkCopyBoxProps) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(deepLink);
	};
	return (
		<Paper
			elevation={2}
			sx={{
				bgcolor: "primary.light",
				color: "white",
				p: 2,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Typography variant="h4">
				<b>{deepLink}</b>
			</Typography>
			<IconButton size="medium" sx={{ color: "white" }} onClick={handleCopy}>
				<ContentCopyIcon />
			</IconButton>
		</Paper>
	);
};
