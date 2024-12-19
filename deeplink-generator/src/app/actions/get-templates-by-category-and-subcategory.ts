"use server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db } from "../../../db";

export async function getTemplateByCategoryAndSubcategory(
	usecaseCategoryId: string,
	usecaseSubcategoryId: string
) {
	try {
		const templates = await db.template.findUniqueOrThrow({
			where: {
				usecaseCategoryId_usecaseSubcategoryId: {
					usecaseCategoryId,
					usecaseSubcategoryId,
				},
			},
		});
		return templates;
	} catch (error) {
		if (error instanceof PrismaClientKnownRequestError) {
			if (error.code === "P2025") {
				const templates = await db.template.findMany({
					where: {
						usecaseCategoryId,
						usecaseSubcategoryId,
					},
				});
				return templates;
			}
		}
	}
}
