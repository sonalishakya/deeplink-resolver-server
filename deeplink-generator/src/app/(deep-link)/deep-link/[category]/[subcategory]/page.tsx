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
	selectUsecase,
} from "@/app/actions";
import { CustomContainedButtom, CustomHeading } from "@/app/components";

const SelectUsecasePage = async ({
	params,
}: {
	params: Promise<{ category: string; subcategory: string }>;
}) => {
	const { category, subcategory } = await params;
	const templates = await getTemplateByCategoryAndSubcategory(
		category,
		subcategory
	);
	return (
		<>
			<Toolbar />
			<CustomHeading heading="Select Template" />
			<Toolbar />
			<form action={selectUsecase}>
				<TextField
					fullWidth
					title="Search Templates"
					placeholder="Search Templates..."
				/>
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
										<Button variant="contained" sx={{ textTransform: "none" }}>
											Verify
										</Button>
									</Box>
								</AccordionDetails>
							</Accordion>
						</Box>
					))}
				</RadioGroup>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<CustomContainedButtom type="submit">Next</CustomContainedButtom>
				</Box>
			</form>
		</>
	);
};

export default SelectUsecasePage;
