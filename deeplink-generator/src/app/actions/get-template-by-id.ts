"use server";
import { db } from "../../../db";

export async function getTemplateById(id: string) {
	const template = await db.template.findUnique({
		where: {
			id,
		},
		include: {
			category: true,
			subCategory: true,
		},
	});
	return template;
}
