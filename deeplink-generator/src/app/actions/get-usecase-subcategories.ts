import { UsecaseSubcategory } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getUsecaseSubcategories(_category: string) {
	return Object.keys(UsecaseSubcategory) as string[];
}
