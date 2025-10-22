import { useState } from "react";
export function EachFolder({ folder }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="indent">
      <div>
        {folder.name ? folder.name : folder}
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
        folder.child.map((child, index) => (
          <EachFolder key={index} folder={child} />
        ))}
    </div>
  );
}
