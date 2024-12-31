"use client";
import {
	Box,
	Button,
	IconButton,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FillerTypeObject, flattenTemplate } from "@/app/utils";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import AddFieldDialog, { NewFieldType } from "@/app/components/AddFieldDialog";
import { DeleteTwoTone } from "@mui/icons-material";
import Form from "next/form";
import { createTemplate } from "../actions";
type TemplateCreatorProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	template: any;
};

export const TemplateCreator = ({ template }: TemplateCreatorProps) => {
	const [openAddFieldDialog, setOpenAddFieldDialog] = useState(false);
	const [templateValue, setTemplateValue] = useState(
		flattenTemplate(template?.value || {})
	);
	const initialNewField: NewFieldType = {
		fieldName: "",
		fieldType: "",
		fieldDataType: "",
	};
	const [newFieldState, setNewFieldState] = useState(initialNewField);

	const handleTemplateFieldAddition = (newField: NewFieldType) => {
		setOpenAddFieldDialog(false);

		const fieldFillType = newField.fieldType as string;

		console.log("Field Type:", fieldFillType);
		setNewFieldState(initialNewField);

		if (fieldFillType === "prefilled") {
			setTemplateValue((prev) => ({ ...prev, [newField.fieldName]: "" }));
		} else if (fieldFillType === "admin") {
			setTemplateValue((prev) => ({
				...prev,
				[newField.fieldName]: { filler: "admin", type: newField.fieldDataType },
			}));
		} else if (fieldFillType === "user") {
			setTemplateValue((prev) => ({
				...prev,
				[newField.fieldName]: { filler: "user", type: newField.fieldDataType },
			}));
		} else {
			setTemplateValue((prev) => ({
				...prev,
				[newField.fieldName]: { filler: "pg", type: newField.fieldDataType },
			}));
		}
	};

	const handleDeleteField = (fieldName: string) => {
		setTemplateValue((prev) => {
			const updatedValue = { ...prev };
			delete updatedValue[fieldName];
			return updatedValue;
		});
	};

	const handleFormSubmit = async (formData: FormData) => {
		const response = await createTemplate(template.id as string, formData);
		console.log("Response:", response);
	};
	return (
		<>
			<Form action={handleFormSubmit} formMethod="POST" style={{width: "100%"}}>
				<Paper elevation={4} sx={{ width: "100%", p: 2 }}>
					{Object.keys(templateValue).map((key: string) => (
						<Box
							sx={{ display: "flex", alignItems: "center", my: 2 }}
							key={key}
						>
							<TextField value={key} sx={{ mr: 1 }} name={"form_key." + key} />:{" "}
							{typeof templateValue[key] === "string" ||
							(templateValue[key] as FillerTypeObject).filler === "admin" ? (
								<TextField
									defaultValue={templateValue[key]}
									sx={{ ml: 1 }}
									name={"form_value." + key}
								/>
							) : (
								<>
									<Typography>
										Field to be filled during{" "}
										{(templateValue[key] as FillerTypeObject).filler} phase.
									</Typography>
									<TextField
										value={JSON.stringify(templateValue[key])}
										name={"form_value." + key}
										sx={{ display: "none" }}
									/>
									<IconButton title="Edit Type">
										<EditTwoToneIcon color="info" />
									</IconButton>
								</>
							)}
							<IconButton
								title="Remove Field"
								onClick={() => handleDeleteField(key)}
							>
								<DeleteTwoTone color="error" />
							</IconButton>
						</Box>
					))}
					<Box sx={{ display: "flex", justifyContent: "Center" }}>
						<Button
							variant="contained"
							sx={{ my: 3 }}
							endIcon={<AddCircleTwoToneIcon />}
							color="info"
							onClick={() => setOpenAddFieldDialog(true)}
						>
							Add Field
						</Button>
					</Box>
				</Paper>
				<Button variant="contained" sx={{ my: 3 }} type="submit">
					Next
				</Button>
			</Form>
			<AddFieldDialog
				open={openAddFieldDialog}
				onClose={() => setOpenAddFieldDialog(false)}
				addFieldAction={handleTemplateFieldAddition}
				initialState={newFieldState}
			/>
		</>
	);
};
