"use client";
import { DownloadTwoTone } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import QrDialog from "./QrDialog";

type DownloadQrProps = {
	link?: string;
};

export const DownloadQr = ({ link }: DownloadQrProps) => {
	const [openQrDialog, setOpenQrDialog] = useState(false);
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
			<Typography variant="h6" align="center" color="primary.light" marginBottom={"10px"} mb={2}>
				Download QR
			</Typography>
			<IconButton
				size="medium"
				sx={{
					color: "white",
					bgcolor: "primary.light",
					"&:hover": { bgcolor: "primary.dark" },
				}}
				onClick={() => setOpenQrDialog(true)}
			>
				<DownloadTwoTone />
			</IconButton>
			<QrDialog
				link={link || ""}
				open={openQrDialog}
				onClose={() => setOpenQrDialog(false)}
				providerName="Deep Link QR"
			/>
		</Box>
	);
};
