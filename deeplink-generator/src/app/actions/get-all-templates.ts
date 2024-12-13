import { db } from "../../../db";

export async function getAllTemplates() {
	const templates = await db.template.findMany();
	return templates;
}
