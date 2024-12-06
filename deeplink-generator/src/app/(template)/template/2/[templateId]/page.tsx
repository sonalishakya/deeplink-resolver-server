"use client";
import { Box, Button, IconButton, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import template from "@/app/assets/template.json";
import { flattenTemplate } from "@/app/utils";
import { useParams } from "next/navigation";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

const ExtendTemplatePage = () => {
	const { templateId } = useParams();
	const templateValue = template.value;
	console.log("Template ID", templateId);
	console.log("Template Value", templateValue);
	console.log("Template Flatten", flattenTemplate(templateValue));
	const flattenedTemplate = flattenTemplate(templateValue);
	return (
		<>
			<Typography variant="h2" sx={{ my: 2 }}>
				Customize Template
			</Typography>
			<Paper elevation={4} sx={{ width: "90%", p: 2 }}>
				{Object.keys(flattenedTemplate).map((key: string) => (
					<Box sx={{ display: "flex", alignItems: "center", my:2 }} key={key}>
						<Typography key={key} mr={2} color="info">{key}:</Typography>
						{typeof flattenedTemplate[key] === "string" ? (
							<TextField value={flattenedTemplate[key]} />
						) : (
							JSON.stringify(flattenedTemplate[key])
						)}
            <IconButton title="Edit Type"><EditTwoToneIcon color="warning"/></IconButton>
					</Box>
				))}
			</Paper>
			<Button variant="contained" sx={{ my: 3 }}>
				Next
			</Button>
		</>
	);
};

export default ExtendTemplatePage;
