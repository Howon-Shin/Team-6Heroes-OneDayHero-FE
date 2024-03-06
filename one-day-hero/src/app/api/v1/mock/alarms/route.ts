import { type NextRequest, NextResponse } from "next/server";

import { NotificationResponse } from "@/types/response";

import { notificationList } from "../_data/notification";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "0");
  const size = parseInt(searchParams.get("size") || "0");
  const sort = searchParams.get("sort");

  const responseList: NotificationResponse = {
    ...notificationList,
    data: {
      ...notificationList.data,
      content: notificationList.data.content.slice(
        page * size,
        (page + 1) * size
      ),
      last: (page + 1) * size >= notificationList.data.content.length
    }
  };

  return NextResponse.json(responseList, { status: 200 });
}
