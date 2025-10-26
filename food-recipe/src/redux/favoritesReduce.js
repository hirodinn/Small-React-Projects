const initial = JSON.parse(localStorage.getItem("favorites")) || [];

export default function favoritesReduce(state = initial, action) {
  if (action.type === "ADD") {
    const temp = [...state, action.payload];
    localStorage.setItem("favorites", JSON.stringify(temp));
    return temp;
  } else if (action.type === "REMOVE") {
    const temp = state.filter((c) => c.id !== action.payload);
    localStorage.setItem("favorites", JSON.stringify(temp));
    return temp;
  } else {
    return state;
  }
}
