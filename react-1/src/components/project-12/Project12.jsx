import { useEffect, useState } from "react";
import "./Project12.css";
import axios from "axios";
export function Project12() {
  const [userDetails, setUserDetails] = useState(null);
  const [inputValue, setInputValue] = useState(" ");
  const [isLoading, setIsLoading] = useState(true);
  const loadData = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${
        inputValue.trim() === "" ? "hirodinn" : inputValue.trim()
      }`
    );
    setUserDetails(response.data);
    setInputValue("");
    setIsLoading(false);
  };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="project-12">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <form>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              placeholder="search for github account"
            />
            <button>Submit</button>
          </form>
        </>
      )}
    </div>
  );
}
