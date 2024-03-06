import { type NextRequest, NextResponse } from "next/server";

import { PatchSurveySchema } from "@/types/schema";

import { userDetail, userSummary } from "../_data/user";

export async function PATCH(request: NextRequest) {
  const userPatchData = await request.json();

  const result = PatchSurveySchema.safeParse(userPatchData);

  if (!result.success) {
    return new NextResponse("Error", { status: 400 });
  }

  return NextResponse.json(userSummary, { status: 200 });
}

export function GET(request: NextRequest) {
  return NextResponse.json(userDetail, { status: 200 });
}
