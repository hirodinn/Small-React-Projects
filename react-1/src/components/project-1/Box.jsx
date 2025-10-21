export function Box({
  question,
  answer,
  isMultipleAllowed,
  index,
  allowed,
  setAllowed,
}) {
  return (
    <div className={allowed[index] ? "box" : "hide box"}>
      <div className="header">
        <p>{question}</p>
        <p
          onClick={() => {
            if (!isMultipleAllowed) {
              const temp = [false, false, false, false];
              temp[index] = !allowed[index];
              setAllowed(temp);
            } else {
              const temp = [...allowed];
              const allow = allowed[index];
              temp[index] = !allow;
              setAllowed(temp);
              console.log(temp);
            }
          }}
        >
          +
        </p>
      </div>
      <p>{answer}</p>
    </div>
  );
}
