import { db } from "../../../db";

export async function getTemplateById(id: string) {
	const template = await db.template.findUnique({
		where: {
			id,
		},
	});
	return template;
}
