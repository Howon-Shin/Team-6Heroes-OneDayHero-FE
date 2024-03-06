import { type NextRequest, NextResponse } from "next/server";

import { HeroNicknameSearchResponse } from "@/types/response";

import { heroSearchList } from "../../_data/search";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "0");
  const size = parseInt(searchParams.get("size") || "0");
  const sort = searchParams.get("sort");

  const responseList: HeroNicknameSearchResponse = {
    ...heroSearchList,
    data: {
      ...heroSearchList.data,
      content: heroSearchList.data.content.slice(
        page * size,
        (page + 1) * size
      ),
      last: (page + 1) * size >= heroSearchList.data.content.length
    }
  };

  return NextResponse.json(responseList, { status: 200 });
}
