import {
	Box,
	Button,
	Divider,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import Form from 'next/form'

import template from "@/app/assets/template.json";
import { FillerTypeObject, flattenTemplate } from "@/app/utils";
import { generateDeepLink } from "@/app/actions";
const GenerateDeepLinkPage = async ({params}: {
  params: Promise<{ templateId: string }>
}) => {
	const templateId = (await params).templateId;
	console.log("Template ID", templateId)
	const templateValue = flattenTemplate(template.value);
	const handleSubmit = async (form: FormData) => {
		"use server";
		generateDeepLink(templateId, form);
	};
	return (
		<>
			<Typography variant="h2" align="center">
				Generate Deep Link
			</Typography>
			<Form action={handleSubmit} formMethod="POST">
				<Paper elevation={4} sx={{ width: "90%", p: 2 }}>
					{Object.keys(templateValue).map((key: string) => (
						<>
							<Box
								sx={{ display: "flex", alignItems: "center", my: 2 }}
								key={key}
							>
								<Typography variant="body1">{key}</Typography> {":"}
								{typeof templateValue[key] === "string" ? (
									<TextField
										value={templateValue[key]}
										sx={{ ml: 1 }}
										disabled
										name={key}
									/>
								) : (templateValue[key] as FillerTypeObject).filler ===
								  "user" ? (
									<TextField
										value={(templateValue[key] as FillerTypeObject).value}
										sx={{ ml: 1 }}
										name={key}
									/>
								) : (
									<>
										{" "}
										<TextField
											value={JSON.stringify(templateValue[key])}
											name={key}
											sx={{ ml: 1, display: "none" }}
										/>
										<Typography
											sx={{ ml: 1 }}
											color="textSecondary"
											variant="body2"
										>
											{" "}
											To be filled During Post-Generation
										</Typography>
									</>
								)}
							</Box>
							<Divider />
						</>
					))}
				</Paper>
				<Button type="submit" variant="contained" sx={{ my: 3 }}>
					Submit
				</Button>
			</Form>
		</>
	);
};

export default GenerateDeepLinkPage;
