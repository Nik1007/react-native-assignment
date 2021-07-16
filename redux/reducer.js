function Reducer(state = [], action) {
  switch (action.type) {
    case "getHistory":
      let data = action.data;
      state = [...state, data];
      return state;
    default:
      return state;
  }
}

export default Reducer;
