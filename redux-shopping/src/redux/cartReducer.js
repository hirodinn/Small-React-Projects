const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    const updatedCartAdd = [...state, action.payload];
    localStorage.setItem("cart", JSON.stringify(updatedCartAdd));
    return updatedCartAdd;
  } else if (action.type === "REMOVE") {
    const updatedCartRemove = state.filter(
      (item) => item.id !== action.payload
    );
    localStorage.setItem("cart", JSON.stringify(updatedCartRemove));
    return updatedCartRemove;
  } else {
    return state;
  }
};

export default cartReducer;
