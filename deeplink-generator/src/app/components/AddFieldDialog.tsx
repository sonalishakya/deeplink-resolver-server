"use client";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { FormEvent } from "react";

export type NewFieldType = {
	fieldName: string;
	fieldType: string;
	fieldDataType: string;
};

type AddFieldDialogProps = {
	open: boolean;
	onClose: () => void;
	initialState: NewFieldType;
	addFieldAction: (newField: NewFieldType) => void;
};

const AddFieldDialog = ({
	open,
	onClose,
	initialState: { fieldName, fieldDataType, fieldType },
	addFieldAction,
}: AddFieldDialogProps) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const newField: NewFieldType = {
			fieldName: formData.get("fieldName") as string,
			fieldType: formData.get("fieldType") as string,
			fieldDataType: formData.get("fieldDataTypeSelect") as string,
		};

		addFieldAction(newField);
		onClose();
	};
	return (
		<Dialog open={open} maxWidth="xs" fullWidth onClose={onClose}>
			<DialogTitle>Add a New Field</DialogTitle>
			<form onSubmit={handleSubmit}>
				<DialogContent>
					<Stack direction="row" alignItems="center">
						<Typography mr={1}>Enter Field Name:</Typography>
						<TextField name="fieldName" defaultValue={fieldName} fullWidth />
					</Stack>
					<Stack direction="row" alignItems="center" my={2}>
						<Typography mr={1}>Select Field Type:</Typography>
						<Select
							id="fieldTypeSelect"
							name="fieldType"
							defaultValue={fieldType}
							fullWidth
						>
							<MenuItem value={"prefilled"}>Pre-Filled</MenuItem>
							<MenuItem value={"admin"}>Admin</MenuItem>
							<MenuItem value={"user"}>User</MenuItem>
						</Select>
					</Stack>
					<Stack direction="row" alignItems="center">
						<Typography mr={1}>Select Data Type:</Typography>
						<Select
							id="fieldDataTypeSelect"
							name="fieldDataTypeSelect"
							defaultValue={fieldDataType}
							fullWidth
						>
							<MenuItem value={"string"}>String</MenuItem>
							<MenuItem value={"number"}>Number</MenuItem>
							<MenuItem value={"boolean"}>Boolean</MenuItem>
						</Select>
					</Stack>
					<Box></Box>
				</DialogContent>
				<DialogActions>
					<Button color="error" onClick={onClose} variant="contained">
						Cancel
					</Button>
					<Button color="success" variant="contained" type="submit">
						Add Field
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export default AddFieldDialog;
