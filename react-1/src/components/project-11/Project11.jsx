import { useState, useEffect } from "react";
import "./Project11.css";
export function Project11() {
  const [showContent, setShowContent] = useState(false);
  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleKeyScroll = (e) => {
    const keys = ["ArrowUp", "ArrowDown", "Space", "PageUp", "PageDown"];
    if (keys.includes(e.code)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  useEffect(() => {
    if (showContent) {
      window.scrollTo({ top: 6030, behavior: "smooth" });

      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", handleKeyScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", handleKeyScroll);
    }
    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", handleKeyScroll);
    };
  }, [showContent]);
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
