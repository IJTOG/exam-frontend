export const CreateRoom = (data) => {
  return {
    type: "CREAT_ROOM",
    payload: {
      name: data
    }
  };
};
