import { useEffect } from "react";
import { useParams } from "react-router-dom";
export function Recipe() {
  const { title } = useParams();
  useEffect(() => {
    console.log(title);
  }, [title]);
  return (
    <div className="recipe-container">
      <h1>this is {title}</h1>
    </div>
  );
}
