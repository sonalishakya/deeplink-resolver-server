import {
	Box,
	Divider,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import Form from "next/form";

import template from "@/app/assets/template.json";
import { FillerTypeObject, flattenTemplate } from "@/app/utils";
import { createDeepLink } from "@/app/actions";
import {
	CustomContainedButtom,
	CustomHeading,
	FieldName,
} from "@/app/components";
import { redirect } from "next/navigation";
const GenerateDeepLinkPage = async ({
	params,
}: {
	params: Promise<{ templateId: string }>;
}) => {
	const templateId = (await params).templateId;
	const templateValue = flattenTemplate(template.value);
	console.log("TEMPLATE VALUE", templateValue);
	const handleSubmit = async (form: FormData) => {
		"use server";
		if (!form) {
			throw new Error("Form data is required");
		}
		console.log("CREATING DEEP LINK");
		const deepLink = await createDeepLink(templateId, form);
		console.log("Redirecting");
		redirect(`/deep-link/usecases/publish/${deepLink.id}`);
	};
	return (
		<>
			<CustomHeading heading="Generate Deep Link" />
			<Form action={handleSubmit} formMethod="POST" style={{ width: "100%" }}>
				<Paper
					elevation={4}
					sx={{
						p: 2,
						borderColor: "primary.light",
						borderWidth: 2,
						borderStyle: "solid",
						borderRadius: 2,
						my: 2,
					}}
				>
					{Object.keys(templateValue)
						.filter(
							(key) =>
								(templateValue[key] as FillerTypeObject).filler === "user"
						)
						.map((key: string) => (
							<React.Fragment key={key}>
								<Stack
									direction="row"
									my={2}
									alignItems="center"
									justifyContent="flex-start"
								>
									<FieldName fieldName={key} />
									<Typography mx={1}>:</Typography>

									<TextField
										defaultValue={
											(templateValue[key] as FillerTypeObject).value
										}
										type={(templateValue[key] as FillerTypeObject).type === "string" ? "text" : "number"}
										sx={{ ml: 1 }}
										name={key}
										fullWidth
									/>
								</Stack>
								<Divider />
							</React.Fragment>
						))}
				</Paper>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
						my: 2,
					}}
				>
					<CustomContainedButtom type="submit">Submit</CustomContainedButtom>
				</Box>
			</Form>
		</>
	);
};

export default GenerateDeepLinkPage;
