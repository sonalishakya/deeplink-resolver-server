"use server";

import { UsecaseStage } from "@prisma/client";
import { db } from "../../../db";
import { FormItem, inflateDeepLink } from "../utils";

export async function createDeepLink(templateId: string, form: FormData) {
	if (!form) {
		throw new Error("Form data is required");
	}
	console.log("Generating Deep Link...", form);
	const inflatedValue = inflateDeepLink(
		Array.from(form.entries()).map(
			([key, value]) =>
				({
					name: key,
					value: value,
				} as FormItem)
		)
	);
	console.log("VALUE INFLATED", inflatedValue);
	const deepLink = await db.usecase.create({
		data: {
			templateId,
			value: inflatedValue,
			usecaseStage: UsecaseStage.DRAFT,
		},
	});
	console.log("USE CASE CREATED", deepLink);

	return deepLink;
}
