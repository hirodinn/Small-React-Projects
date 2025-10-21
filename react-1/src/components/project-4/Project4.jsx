import { useState } from "react";
import "./Project4.css";
import { Circle } from "./Circle";
export function Project4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let items = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  function increment() {
    if (currentIndex === 8) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function decrement() {
    if (currentIndex === 0) {
      setCurrentIndex(8);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }
  return (
    <div className="project-4">
      <div
        className="image-container"
        style={{ left: `-${currentIndex * 100}%` }}
      >
        <img src="https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80" />
        <img src="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" />
        <img src="https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
        <img src="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
        <img src="https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80" />
        <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <img src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      </div>
      <button className="left" onClick={decrement}>
        <i class="fa-solid fa-arrow-left-long"></i>{" "}
      </button>
      <button className="right" onClick={increment}>
        <i class="fa-solid fa-arrow-right-long"></i>
      </button>
      <div className="tracker">
        {items.map((item) => {
          return <Circle i={item} currentIndex={currentIndex} />;
        })}
      </div>
    </div>
  );
}
