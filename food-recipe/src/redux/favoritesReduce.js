const initial = [];

export default function favoritesReduce(state = initial, action) {
  if (action.type === "ADD") {
    const temp = [...state, action.payload];
    return temp;
  } else if (action.type === "REMOVE") {
    const temp = state.filter((c) => c.id !== action.payload);
    return temp;
  } else {
    return state;
  }
}
