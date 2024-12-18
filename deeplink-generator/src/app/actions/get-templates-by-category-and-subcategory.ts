"use server";
import { db } from "../../../db";

export async function getTemplateByCategoryAndSubcategory(
	usecaseCategoryId: string,
	usecaseSubcategoryId: string
) {
	const templates = await db.template.findMany({
		where: {
			usecaseCategoryId,
			usecaseSubcategoryId,
		},
	});
	return templates;
}
