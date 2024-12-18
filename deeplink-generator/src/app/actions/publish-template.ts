"use server";
import { TemplateStage } from "@prisma/client";
import { db } from "../../../db";

export const publishTemplate = async (id: string, formData: FormData) => {
	const updatedTemplate = await db.template.update({
		where: {
			id,
		},
		data: {
			templateStage: formData.get("submissionOption") as TemplateStage,
			name: formData.get("templateName") as string,
			description: formData.get("templateDescription") as string,
		},
	});
	return updatedTemplate;
};
