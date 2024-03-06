import { type NextRequest, NextResponse } from "next/server";

import { chattingRecord } from "../../_data/chatting";

export function GET(request: NextRequest) {
  return NextResponse.json(chattingRecord, { status: 200 });
}
