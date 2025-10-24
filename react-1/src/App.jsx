import { useEffect, useState } from "react";
import { Project1 } from "./components/project-1/Project1";
import { Project10 } from "./components/project-10/Project10";
import { Project11 } from "./components/project-11/Project11";
import { Project12 } from "./components/project-12/Project12";
import { Project13 } from "./components/project-13/Project13";
import { Project14 } from "./components/project-14/Project14";
import { Project16 } from "./components/project-16/Project16";
import { Project2 } from "./components/project-2/Project2";
import { Project3 } from "./components/project-3/Project3";
import { Project4 } from "./components/project-4/Project4";
import { Project5 } from "./components/project-5/Project5";
import { Project6 } from "./components/project-6/Project6";
import { Project7 } from "./components/project-7/Project7";
import { Project8 } from "./components/project-8/Project8";
import { Project9 } from "./components/project-9/Project9";

export default function App() {
  const [scrolledHeight, setscrolledHeight] = useState();
  const [windowDimension, setWindowDimension] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscrolledHeight(window.scrollY);
    });
    window.addEventListener("resize", () => {
      setWindowDimension([window.innerWidth, window.innerHeight]);
      console.log("changed");
    });
  }, []);
  return (
    <main>
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Project5 />
      <Project6 />
      <Project7 />
      <Project8 />
      <Project9 scrolledHeight={scrolledHeight} />
      <Project10 />
      <Project11 />
      <Project12 />
      <Project13 />
      <Project14 />
      <Project16 windowDimension={windowDimension} />
    </main>
  );
}
