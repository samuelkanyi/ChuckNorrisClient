export default function reducer(state, action) {
  switch (action.type) {
    case "change_category":
      // console.log(state);
      return {
        ...state,
        selectedCategory: action.payload
      };

    default:
      console.log("error");
      return state;
  }
}
