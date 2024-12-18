"use client";
import { Paper, Typography } from "@mui/material";
import React from "react";
import { JsonView } from "react-json-view-lite";

const JsonViewer = ({ data }: { data: object }) => {
	return (
		<>
			<Typography variant="h5" my={1}>
				Value
			</Typography>
			<Paper
				elevation={4}
				sx={{
					p: 2,
					borderColor: "primary.dark",
					borderWidth: 1,
					borderStyle: "solid",
					borderRadius: 2,
					overflow: "auto",
					bgcolor: "background.default",
				}}
			>
				<JsonView data={data} />
			</Paper>
		</>
	);
};

export default JsonViewer;
