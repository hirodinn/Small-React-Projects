export function Circle({ i, currentIndex }) {
  return (
    <div className={i === currentIndex ? "circle fill" : "circle"}>
      <i className="fa-solid fa-circle"></i>
    </div>
  );
}
