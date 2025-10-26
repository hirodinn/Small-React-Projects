export const addToCart = (item) => {
  return {
    type: "ADD",
    payload: item, // The new item to be added
  };
};
export const removeFromCart = (item) => {
  return {
    type: "REMOVE",
    payload: item, // The item ID to remove
  };
};
