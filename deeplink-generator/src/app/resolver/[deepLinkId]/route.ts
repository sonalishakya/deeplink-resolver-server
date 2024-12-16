import { getUsecaseById } from "@/app/actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ deepLinkId: string }> }
) {
	const deepLinkId = (await params).deepLinkId;
	const deepLink = await getUsecaseById(deepLinkId);
	return NextResponse.json(deepLink);
}
