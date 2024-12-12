import { UsecaseCategory } from "@prisma/client";

export const getUsecaseCategories = async () => {
	return Object.values(UsecaseCategory) as string[];
};
