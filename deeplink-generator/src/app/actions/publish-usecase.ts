/* eslint-disable @typescript-eslint/no-explicit-any */
import { Usecase, UsecaseStage } from "@prisma/client";
import { db } from "../../../db";
import { InputJsonValue } from "@prisma/client/runtime/library";

export async function publishUsecase(usecase: Usecase, form: FormData) {
	const usecaseValue = usecase.value;
	(usecaseValue as any).message.intent.tags = [
		...(usecaseValue as any).message.intent.tags,
		{
			code: "source_id",
			value: usecase.id,
		},
	];
	const updatedUsecase = await db.usecase.update({
		where: {
			id: usecase.id,
		},
		data: {
			usecaseStage: form.get("submissionOption") as UsecaseStage,
			name: form.get("name") as string,
			value: usecaseValue as InputJsonValue,
		},
	});
	return updatedUsecase;
}
