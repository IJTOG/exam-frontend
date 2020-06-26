const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "CREAT_ROOM": {
      return [...state, action.payload];
    }

    case "CREATE_CHAT": {
      state.map((st, index) => {
        if (st.name === action.payload.room) {
          state[index].chat.push({
            owner: action.payload.owner,
            text: action.payload.text
          });
        }
        return null;
      });
      return [...state];
    }

    default:
      return state;
  }
};
