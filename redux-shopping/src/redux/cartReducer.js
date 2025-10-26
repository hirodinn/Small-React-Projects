const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  if (action.type === "REMOVE") {
    const temp = state.filter((c) => c.id !== action.payload.id);
    return temp;
  } else {
    const temp = [...state, action.payload];
    return temp;
  }
};

export default cartReducer;
