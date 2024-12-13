import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Radio,
	RadioGroup,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";

import {
	getTemplateByCategoryAndSubcategory,
} from "@/app/actions";
import { CustomContainedButtom, CustomHeading } from "@/app/components";
import { redirect } from "next/navigation";

const SelectUsecasePage = async ({
	searchParams,
}: {
	searchParams: Promise<{ category: string; subcategory: string }>;
}) => {
	const { category, subcategory } = await searchParams;
	const templates = await getTemplateByCategoryAndSubcategory(
		category,
		subcategory
	);
	const handleSelection = async (form: FormData) => {
		"use server";
		redirect(`/deep-link/usecases/create/${form.get("templateId")}`);
	};

	return (
		<>
			<Toolbar />
			<CustomHeading heading="Select Template" />
			<Toolbar />
			<form action={handleSelection}>
				<TextField
					fullWidth
					title="Search Templates"
					placeholder="Search Templates..."
				/>
				{templates.length > 0 ? (
					<RadioGroup name="templateId" defaultValue={templates[0].id}>
						{templates.map((template) => (
							<Box
								key={template.id}
								sx={{
									my: 1,
									width: "100%",
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
								}}
							>
								<Radio value={template.id} required />
								<Accordion sx={{ ml: 1, width: "100%" }}>
									<AccordionSummary>
										<Typography>Usecase: {template.name}</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											{JSON.stringify(template.value, undefined, 2)}
										</Typography>
										<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
											<Button
												variant="contained"
												sx={{ textTransform: "none" }}
											>
												Verify
											</Button>
										</Box>
									</AccordionDetails>
								</Accordion>
							</Box>
						))}
					</RadioGroup>
				) : (
					<Typography variant="h6">No Templates currently present!</Typography>
				)}
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<CustomContainedButtom
						type="submit"
						disabled={templates.length === 0}
					>
						Create Usecase
					</CustomContainedButtom>
				</Box>
			</form>
		</>
	);
};

export default SelectUsecasePage;
