import { useState } from "react";

export function EachFolder({ folder }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ marginLeft: 16 }}>
      <div
        style={{
          cursor: "pointer",
          fontWeight: folder.child?.length ? "bold" : "normal",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {folder.name}
      </div>

      {expanded &&
        folder.child &&
        folder.child.map((child, index) =>
          typeof child === "string" ? (
            <div key={index} style={{ marginLeft: 16 }}>
              {child}
            </div>
          ) : (
            <EachFolder key={index} folder={child} />
          )
        )}
    </div>
  );
}
