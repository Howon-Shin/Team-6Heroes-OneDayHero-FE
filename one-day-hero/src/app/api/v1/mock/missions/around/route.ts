import { type NextRequest, NextResponse } from "next/server";

import { MapResponse } from "@/types/response";

import { aroundMissionList } from "../../_data/mission";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "0");
  const size = parseInt(searchParams.get("size") || "0");
  const sort = searchParams.get("sort");

  const responseList: MapResponse = {
    ...aroundMissionList,
    data: {
      ...aroundMissionList.data,
      content: aroundMissionList.data.content.slice(
        page * size,
        (page + 1) * size
      ),
      last: (page + 1) * size >= aroundMissionList.data.content.length
    }
  };

  return NextResponse.json(responseList, { status: 200 });
}
