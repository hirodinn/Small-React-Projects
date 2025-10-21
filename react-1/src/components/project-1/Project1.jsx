import { useState } from "react";
import { Box } from "./Box";
import "./Project1.css";
export function Project1() {
  const [isMultipleAllowed, setIsMultipleAllowed] = useState(false);
  const [allowed, setAllowed] = useState([false, false, false, false]);
  const infos = [
    {
      question: "What are accordion components?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate laborum laboriosam facilis similique consequuntur dolor optio, ipsam voluptas iure quos labore nemo praesentium quis nam sit, nihil perspiciatis rerum numquam totam, exercitationem qui! Nisi.",
    },
    {
      question: "What are they used for?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate laborum laboriosam facilis similique consequuntur dolor optio, ipsam voluptas iure quos labore nemo praesentium quis nam sit, nihil perspiciatis rerum numquam totam, exercitationem qui! Nisi.",
    },
    {
      question: "Accordion as a musical instrument",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate laborum laboriosam facilis similique consequuntur dolor optio, ipsam voluptas iure quos labore nemo praesentium quis nam sit, nihil perspiciatis rerum numquam totam, exercitationem qui! Nisi.",
    },
    {
      question: "Can I create accordion component with a different framework?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate laborum laboriosam facilis similique consequuntur dolor optio, ipsam voluptas iure quos labore nemo praesentium quis nam sit, nihil perspiciatis rerum numquam totam, exercitationem qui! Nisi.",
    },
  ];

  return (
    <div className="project-1">
      <div
        className="multiple"
        onClick={() => {
          setIsMultipleAllowed(!isMultipleAllowed);
        }}
      >
        Enable Multiple Selection
      </div>
      {infos.map((info, i) => {
        return (
          <Box
            question={info.question}
            answer={info.answer}
            key={i}
            allowed={allowed}
            setAllowed={setAllowed}
            index={i}
            isMultipleAllowed={isMultipleAllowed}
          />
        );
      })}
    </div>
  );
}
