const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "CREAT_ROOM": {
      return [...state, action.payload];
    }

    default:
      return state;
  }
};
