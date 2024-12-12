import {
	Box,
	Divider,
	Paper,
	Stack,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";
import Form from "next/form";

import template from "@/app/assets/template.json";
import { FillerTypeObject, flattenTemplate } from "@/app/utils";
import { generateDeepLink } from "@/app/actions";
import { CustomContainedButtom, CustomHeading } from "@/app/components";
const GenerateDeepLinkPage = async ({
	params,
}: {
	params: Promise<{ templateId: string }>;
}) => {
	const templateId = (await params).templateId;
	const templateValue = flattenTemplate(template.value);
	const handleSubmit = async (form: FormData) => {
		"use server";
		generateDeepLink(templateId, form);
	};
	return (
		<>
			<Toolbar />
			<CustomHeading heading="Generate Deep Link" />

			<Form action={handleSubmit} formMethod="POST">
				<Paper
					elevation={4}
					sx={{
						p: 2,
						borderColor: "primary.light",
						borderWidth: 2,
						borderStyle: "solid",
						borderRadius: 2,
						my: 4,
					}}
				>
					<Stack
						direction="row"
						my={2}
						alignItems="center"
						justifyContent="space-evenly"
					>
						<Paper
							sx={{
								p: 2,
								borderColor: "primary.light",
								borderWidth: 2,
								borderStyle: "solid",
								borderRadius: 2,
							}}
						>
							<Typography variant="h6">Deep Link Name</Typography>
						</Paper>
						<Typography variant="h5">:</Typography>
						<TextField value="deeplinkName" sx={{ ml: 1 }} />
					</Stack>

					{Object.keys(templateValue).map((key: string) => (
						<>
							<Stack
								direction="row"
								key={key}
								my={2}
								alignItems="center"
								justifyContent="space-evenly"
							>
								<Paper
									sx={{
										p: 2,
										borderColor: "primary.light",
										borderWidth: 2,
										borderStyle: "solid",
										borderRadius: 2,
									}}
								>
									<Typography variant="h6">{key}</Typography>
								</Paper>
								<Typography variant="h5">:</Typography>
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
							</Stack>
							<Divider />
						</>
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
