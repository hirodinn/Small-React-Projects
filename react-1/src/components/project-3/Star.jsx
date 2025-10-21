export function Star({ index, fillTo, setFillTo }) {
  return (
    <i
      className={index <= fillTo ? "fa-solid fa-star fill" : "fa-solid fa-star"}
      onMouseEnter={() => {
        setFillTo(index);
      }}
      onMouseLeave={() => {
        setFillTo(0);
      }}
    ></i>
  );
}
