import { NotificationResponse } from "@/types/response";

export const notificationList: NotificationResponse = {
  status: 200,
  data: {
    content: [
      {
        id: "1",
        title: "알림1",
        content: "새 글이 등록되었습니다.",
        createdAt: "2023-11-29T13:44:34"
      },
      {
        id: "2",
        title: "알림2",
        content: "새 글이 등록되었습니다.",
        createdAt: "2023-11-29T13:44:34"
      },
      {
        id: "3",
        title: "알림3",
        content: "새 글이 등록되었습니다.",
        createdAt: "2023-11-29T13:44:34"
      }
    ],
    pageable: {
      pageNumber: 0,
      pageSize: 4,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true
      },
      offset: 0,
      paged: true,
      unpaged: false
    },
    size: 4,
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true
    },
    first: true,
    last: true,
    numberOfElements: 2,
    empty: false
  },
  serverDateTime: "2023-11-29T13:44:34"
};
