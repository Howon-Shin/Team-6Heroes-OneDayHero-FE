import { type NextRequest, NextResponse } from "next/server";

import { homeMissionList } from "../_data/mission";

export function GET(request: NextRequest) {
  return NextResponse.json(homeMissionList, { status: 200 });
}
