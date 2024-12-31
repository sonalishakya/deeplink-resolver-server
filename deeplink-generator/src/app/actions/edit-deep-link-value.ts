import { InputJsonValue,  } from "@prisma/client/runtime/library";
import { db } from "../../../db";

export const editDeepLinkValue = async(id: string, value: InputJsonValue) => {
  const deepLink = await db.usecase.update({
    where: {
      id,
    },
    data: {
      value,
    },
  });
  return deepLink;
};