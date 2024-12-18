"use server";
import { db } from "../../../db";

export async function getUsecaseSubcategories() {
	return db.usecaseSubcategory.findMany();
}
