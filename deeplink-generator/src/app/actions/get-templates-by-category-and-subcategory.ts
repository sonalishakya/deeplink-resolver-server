import { UsecaseCategory, UsecaseSubcategory } from "@prisma/client";
import { db } from "../../../db";

export async function getTemplateByCategoryAndSubcategory(
	category: string,
	subCategory: string
) {
	const templates = await db.template.findMany({
		// where: {
		// 	category: category as UsecaseCategory,
		// 	subCategory: subCategory as UsecaseSubcategory,
		// },
	});
	return templates;
}
