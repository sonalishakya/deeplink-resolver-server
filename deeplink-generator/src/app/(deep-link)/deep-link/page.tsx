import { getUsecaseCategories } from "@/app/actions";
import { CustomHeading, CustomOutlinedButton } from "@/app/components";
import { Grid2 as Grid, Paper } from "@mui/material";
import React from "react";

const SelectUsecaseCategoryPage = async () => {
	const categories = await getUsecaseCategories();
	console.log("ategories", categories);
	return (
		<>
			<CustomHeading heading="Usecase Categories" />
			<Paper
				elevation={3}
				sx={{
					p: 2,
					borderColor: "primary.light",
					borderWidth: 2,
					borderStyle: "solid",
					borderRadius: 2,
					mt: 2,
					width: "100%",
				}}
			>
				<Grid container spacing={2}>
					{categories.map((category, index) => (
						<Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
							<CustomOutlinedButton
								href={`/deep-link/filter/${category}`}
								label={category}
							/>
						</Grid>
					))}
				</Grid>
			</Paper>
		</>
	);
};

export default SelectUsecaseCategoryPage;
