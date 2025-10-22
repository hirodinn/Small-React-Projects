import "./Project6.css";
import { EachFolder } from "./EachFolder";

export function Project6() {
  const info = {
    name: "outer",
    child: [
      { name: "Home", child: [] },
      {
        name: "Profile",
        child: [
          {
            name: "details",
            child: [
              {
                name: "location",
                child: [
                  {
                    name: "city",
                    child: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Settings",
        child: [
          {
            name: "another setting",
            child: [],
          },
        ],
      },
    ],
  };

  return (
    <div className="project-6">
      {<EachFolder folder={info} />}
      <h1>Nested Tree View/Dynamic minus</h1>
    </div>
  );
}
