import { getUsecaseSubcategories } from "@/app/actions";
import { CustomHeading, CustomOutlinedButton } from "@/app/components";
import { formatToNormalCasing } from "@/app/utils";
import { Grid2 as Grid, Paper, } from "@mui/material";
import React from "react";

const SelectUsecaseSubcategory = async ({
	params,
}: {
	params: Promise<{ category: string }>;
}) => {
	const category = (await params).category;
	const subcategories = await getUsecaseSubcategories(category);
	return (
		<>
			<CustomHeading heading="Usecase Subcategories" />

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
					{subcategories.map((subcategory, index) => (
						<Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
							<CustomOutlinedButton
								href={`/deep-link/usecases/browse?category=${category}&subcategory${subcategory}`}
								label={formatToNormalCasing(subcategory)}
							/>
						</Grid>
					))}
				</Grid>
			</Paper>
		</>
	);
};

export default SelectUsecaseSubcategory;
