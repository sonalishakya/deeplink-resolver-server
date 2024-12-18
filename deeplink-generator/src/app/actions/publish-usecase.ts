"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Usecase, UsecaseStage } from "@prisma/client";
import { db } from "../../../db";

export async function publishUsecase(usecase: Usecase, form: FormData) {
	const updatedUsecase = await db.usecase.update({
		where: {
			id: usecase.id,
		},
		data: {
			usecaseStage: form.get("submissionOption") as UsecaseStage,
			name: form.get("name") as string,
		},
	});
	return updatedUsecase;
}
