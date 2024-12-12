"use server";

import { UsecaseStage } from "@prisma/client";
import { db } from "../../../db";
import { FormItem, inflate } from "../utils";

export async function generateDeepLink(templateId: string, form: FormData) {
	console.log("Generating Deep Link...");
	const hidden = form.get("context.country");
	console.log("Hidden", hidden);
	const value = inflate(
		Array.from(form.entries()).map(
			([key, value]) =>
				({
					name: key,
					value: value,
				} as FormItem)
		)
	);

	const deepLink = await db.usecase.create({
		data: {
			templateId,
			value,
			usecaseStage: UsecaseStage.DRAFT,
		},
	});

	return deepLink;
}
