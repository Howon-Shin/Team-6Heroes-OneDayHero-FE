import { NextRequest, NextResponse } from "next/server";

import { MissionSearchListResponse } from "@/types/response";
import { PostMissionSchema } from "@/types/schema";

import { missionDetail } from "../_data/mission";
import { missionSearchList } from "../_data/search";

export async function POST(request: NextRequest) {
  const missionPostData = await request.json();

  const result = PostMissionSchema.safeParse(missionPostData);

  if (!result.success) {
    return new NextResponse("Error", { status: 400 });
  }

  return NextResponse.json(missionDetail, { status: 201 });
}

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "0");
  const size = parseInt(searchParams.get("size") || "0");
  const sort = searchParams.get("sort");

  const responseList: MissionSearchListResponse = {
    ...missionSearchList,
    data: {
      ...missionSearchList.data,
      content: missionSearchList.data.content.slice(
        page * size,
        (page + 1) * size
      ),
      last: (page + 1) * size >= missionSearchList.data.content.length
    }
  };

  return NextResponse.json(responseList, { status: 200 });
}
