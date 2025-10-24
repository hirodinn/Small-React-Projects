import { useRef, useState } from "react";
import "./Project16.css";
export function Project16({ windowDimension }) {
  const [outsideClick, setOutsideClick] = useState(true);
  const contentRef = useRef(null);
  function decideClick(e) {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      setOutsideClick(true);
    } else {
      console.log("Clicked inside content");
    }
  }

  return (
    <div className="project-16" onClick={decideClick}>
      <h1>Use Outside Click Hook</h1>
      <div className="outside-click-hook">
        {outsideClick ? (
          <button
            onClick={() => {
              setOutsideClick(false);
            }}
          >
            Show Content
          </button>
        ) : (
          <div className="content" ref={contentRef} onClick={decideClick}>
            <h1>This is some random content</h1>
            <p>
              please click outside of this to close this.It won't close if you
              click inside this content{" "}
            </p>
          </div>
        )}
      </div>
      <h1>Use Resize Hook</h1>
      <div className="resize-hook">
        <div>width : {windowDimension[0]}</div>
        <div>height : {windowDimension[1]}</div>
      </div>
      <h1>Scroll to Top and Bottom Feature</h1>
      <p>This is the top Section</p>
      <button
        onClick={() => {
          console.log(window.scrollY);
          window.scrollTo({
            top: 7875,
            behavior: "smooth",
          });
        }}
      >
        Scroll To Bottom
      </button>
      <p style={{ maxWidth: "500px", margin: "30px auto" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        labore, consectetur culpa reprehenderit eum aliquid sint accusantium
        molestiae, unde voluptatem rerum iste amet placeat recusandae voluptate
        maiores, quo voluptatibus? Suscipit corrupti dolorum ea exercitationem
        alias, numquam ducimus quisquam debitis nobis laborum dolorem officiis
        sapiente, tempora facilis officia accusantium dolores rem soluta quasi
        minus totam reprehenderit. Tempore ducimus, placeat, beatae eum iste a
        eligendi, inventore neque saepe amet quidem perspiciatis sit commodi
        odio itaque nam ex necessitatibus asperiores dolorem vero praesentium
        earum? Iste eveniet exercitationem consequatur earum temporibus
        provident saepe explicabo, tenetur mollitia nam? Rerum ipsum incidunt,
        dolorem minima aperiam sit?
      </p>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Scroll to top
      </button>
      <br />
      <h4>This is the bottom of the page</h4>
      <br />
      <h1>Scroll to particular section</h1>
      <button
        onClick={() => {
          window.scrollTo({
            top: 7775,
            behavior: "smooth",
          });
        }}
      >
        click to scroll
      </button>
    </div>
  );
}
