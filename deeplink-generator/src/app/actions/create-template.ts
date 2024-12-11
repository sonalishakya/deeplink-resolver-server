"use server";

import { TemplateStage } from "@prisma/client";
import { db } from "../../../db";
import { FormItem, inflate } from "../utils";
import { redirect } from "next/navigation";

export async function createTemplate(templateId: string, formData: FormData) {
	console.log("Template ID", templateId);
	console.log("Form Data", formData);
	const inflatedTemplate = inflate(
		Array.from(formData.entries()).map(
			([key, value]) =>
				({
					name: key,
					value: value,
				} as FormItem)
		)
	);
	console.log("Inflated Template", inflatedTemplate);
	const createdTemplate = await db.template.create({
		data: {
			templateStage: TemplateStage.DRAFT,
			value: inflatedTemplate,
		},
	});
	redirect(`/template/3/${createdTemplate.id}`);
}
