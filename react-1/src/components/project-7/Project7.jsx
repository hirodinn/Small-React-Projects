import QRCode from "react-qr-code";
import { useState } from "react";
import "./Project7.css";

export function Project7() {
  const [inputValue, setInputValue] = useState("");
  const [generateText, setGenerateText] = useState("");
  return (
    <div className="project-7">
      <div className="form">
        <input
          type="text"
          placeholder="Enter Your Value here"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setGenerateText(inputValue);
          }}
        >
          generate
        </button>
      </div>
      <QRCode value={generateText} />
    </div>
  );
}
