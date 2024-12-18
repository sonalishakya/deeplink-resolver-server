"use server";
import { db } from "../../../db";

export const getUsecaseCategories = async () => {
	return db.usecaseCategory.findMany();
};
