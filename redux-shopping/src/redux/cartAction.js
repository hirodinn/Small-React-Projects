// cartAction.js
export const addToCart = (item) => {
  return {
    type: "ADD",
    payload: item, // The new item to be added
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE",
    payload: { id }, // Wrap the id in an object
  };
};
