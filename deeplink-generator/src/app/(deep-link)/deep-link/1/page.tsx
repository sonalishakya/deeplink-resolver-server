import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";

import template from "@/app/assets/template.json";
import { selectUsecase } from "@/app/actions";

const SelectUsecasePage = () => {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "flex-start",
			}}
			component={"main"}
		>
			<Typography variant="h2">Select Template</Typography>
			<form action={selectUsecase}>
				<TextField fullWidth title="Search Templates" />
				<RadioGroup name="templateId" defaultValue={1}>
					{[1, 2, 3, 4].map((i) => (
						<Box
							key={i}
							sx={{
								my: 1,
								width: "100%",
								display: "flex",
								justifyContent: "flex-start",
								alignItems: "center",
							}}
						>
							<Radio value={i} required />
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
					<Button variant="contained" type="submit">
						Next
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default SelectUsecasePage;
