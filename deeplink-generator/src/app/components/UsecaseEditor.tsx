"use client";
import { CancelTwoTone, EditTwoTone, SaveTwoTone } from "@mui/icons-material";
import {
	Box,
	ButtonGroup,
	Divider,
	IconButton,
	Paper,
	Typography,
} from "@mui/material";
import React from "react";

export const UsecaseEditor = () => {
	const [editUsecase, setEditUsecase] = React.useState(false);
	return (
		<>
			<Divider />
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					my: 1,
				}}
			>
				<Typography variant="h5">Value :</Typography>
				{!editUsecase ? (
					<IconButton onClick={() => setEditUsecase(true)} color="info">
						<EditTwoTone />
					</IconButton>
				) : (
					<ButtonGroup>
						<IconButton color="success">
							<SaveTwoTone />
						</IconButton>
						<IconButton onClick={() => setEditUsecase(false)} color="error">
							<CancelTwoTone />
						</IconButton>
					</ButtonGroup>
				)}
			</Box>
			<Paper
				elevation={4}
				sx={{
					p: 2,
					borderColor: "primary.light",
					borderWidth: 2,
					borderStyle: "solid",
					borderRadius: 2,
					my: 2,
					width: "100%",
				}}
			></Paper>
		</>
	);
};
