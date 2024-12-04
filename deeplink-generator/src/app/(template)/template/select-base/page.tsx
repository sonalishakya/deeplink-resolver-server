import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Radio,
	TextField,
	Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const SelectBaseTemplatePage = () => {
	return (
		<>
			<Typography variant="h2">Select Template</Typography>
			<TextField fullWidth title="Search Templates" />
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
					<Radio />
					<Accordion sx={{ ml: 1, width: "100%" }}>
						<AccordionSummary>
							<Typography>Template Title Here</Typography>
							<Button>Verify</Button>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>Details Here</Typography>
						</AccordionDetails>
					</Accordion>
				</Box>
			))}
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "center",
				}}
			>
				<Link href="/template/extend">
					<Button variant="contained">Next</Button>
				</Link>
			</Box>
		</>
	);
};

export default SelectBaseTemplatePage;
