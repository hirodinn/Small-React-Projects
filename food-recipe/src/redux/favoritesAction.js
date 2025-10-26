export function addToFavorites({ obj }) {
  return {
    type: "ADD",
    payload: obj,
  };
}
export function removeFromFavorites(id) {
  return {
    type: "REMOVE",
    payload: id,
  };
}
