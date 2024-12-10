"use server";
export async function generateDeepLink(templateId: string, form: FormData) {
	console.log("Generating Deep Link...");
	const hidden = form.get("context.country");
	console.log("Hidden", hidden);
}
