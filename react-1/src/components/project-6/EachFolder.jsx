import { useState } from "react";
export function EachFolder({ folder }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="indent">
      <div>
        {folder.name}
        {folder.child.length > 0 && (
          <button
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {expanded ? "-" : "+"}
          </button>
        )}
      </div>

      {expanded &&
        folder.child &&
        folder.child.map((child, index) =>
          typeof child === "string" ? (
            <div>{child}</div>
          ) : (
            <EachFolder key={index} folder={child} />
          )
        )}
    </div>
  );
}
