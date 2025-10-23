import { useState } from "react";
import "./Project11.css";
export function Project11() {
  const [showContent, setShowContent] = useState(false);
  function Content() {
    return (
      <div className="content-container">
        <button
          onClick={() => {
            setShowContent(false);
          }}
        >
          X
        </button>
        <header>Customized Header</header>
        <main>Customized Body</main>
        <footer>Customized Footer</footer>
      </div>
    );
  }
  return (
    <div className={showContent ? "project-11 show" : "project-11"}>
      {showContent ? (
        <Content />
      ) : (
        <button
          className="show-content"
          onClick={() => {
            setShowContent(true);
          }}
        >
          Open Model Popup
        </button>
      )}
    </div>
  );
}
