// cartReducer.js
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      // eslint-disable-next-line no-case-declarations
      const updatedCartAdd = [...state, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCartAdd));
      return updatedCartAdd;

    case "REMOVE":
      // eslint-disable-next-line no-case-declarations
      const updatedCartRemove = state.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartRemove));
      return updatedCartRemove;

    default:
      return state;
  }
};

export default cartReducer;
