"use server"

import { db } from "../../../db";

export async function getDeepLinkQr(deepLinkId: string) {
  const deepLink = await db.usecase.findUnique({
    where: {
      id: deepLinkId,
    },
  });
  if(!deepLink) {
    throw new Error("Deep Link not found");
  }
  if(deepLink.qrPdfLink) {
    return deepLink.qrPdfLink;
  }
  

}