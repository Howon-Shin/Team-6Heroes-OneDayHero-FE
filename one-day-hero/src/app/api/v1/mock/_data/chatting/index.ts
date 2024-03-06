import { ChatRecordResponse, ChatRoomsResponse } from "@/types/response";

export const chattingList: ChatRoomsResponse = {
  status: 200,
  data: [
    {
      id: 1,
      missionId: 1,
      missionStatus: "MATCHING",
      receiverId: 1,
      title: "심부름 해주실 분을 찾습니다.",
      receiverNickname: "슈퍼 히어로 토끼 A",
      receiverImagePath: "",
      lastSentMessage: "거의 다 와갑니다!",
      headCount: 1,
      lastSentMessageTime: "2023-11-12T12:00:00"
    },
    {
      id: 2,
      missionId: 2,
      missionStatus: "MATCHING_COMPLETED",
      receiverId: 2,
      title: "벌레 잡아주실 분을 찾습니다.",
      receiverNickname: "슈퍼 히어로 토끼 B",
      receiverImagePath: "",
      lastSentMessage: "어떤 벌레인가요?",
      headCount: 2,
      lastSentMessageTime: "2023-11-12T12:00:00"
    }
  ],
  serverDateTime: "2023-11-24T13:30:48"
};

export const chattingRecord: ChatRecordResponse = {
  status: 200,
  data: [
    {
      message: "메세지",
      senderId: 1,
      senderNickName: "토끼",
      sentMessageTime: "2023-11-12T12:00:00"
    },
    {
      message: "메세지2",
      senderId: 2,
      senderNickName: "토끼2",
      sentMessageTime: "2023-11-12T12:00:00"
    },
    {
      message: "메세지",
      senderId: 1,
      senderNickName: "토끼",
      sentMessageTime: "2023-11-12T12:00:00"
    },
    {
      message: "메세지2",
      senderId: 2,
      senderNickName: "토끼2",
      sentMessageTime: "2023-11-12T12:00:00"
    },
    {
      message: "메세지2",
      senderId: 2,
      senderNickName: "토끼2",
      sentMessageTime: "2023-11-12T12:00:00"
    }
  ],
  serverDateTime: "2023-11-12T12:00:00"
};
