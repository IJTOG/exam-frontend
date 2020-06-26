export const CreateRoom = (data) => {
  return {
    type: "CREAT_ROOM",
    payload: {
      name: data,
      chat: [{ owner: "eiei", text: "สวัสดีครับ" }]
    }
  };
};

export const CreateChat = (room, owner, text) => {
  return {
    type: "CREATE_CHAT",
    payload: { room, owner, text }
  };
};
