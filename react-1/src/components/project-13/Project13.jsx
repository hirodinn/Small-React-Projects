import { useEffect, useState } from "react";
import "./Project13.css";
import axios from "axios";
export function Project13() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get("https://dummyjson.com/users");
      const temp = [];
      response.data.users.forEach((element) => {
        if (element.firstName) temp.push(element.firstName);
        if (element.lastName) temp.push(element.lastName);
        if (element.maidenName) temp.push(element.maidenName);
      });
      setUsers(temp);
    };
    loadUser();
  }, []);
  return (
    <div className="project-13">
      <input
        type="text"
        placeholder="search for a name"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <div className="suggestion-container">
        {inputValue.trim() !== "" && users.length && (
          <>
            {users
              .filter((user) => {
                return user
                  .toLowerCase()
                  .includes(inputValue.trim().toLowerCase());
              })
              .map((user) => {
                return (
                  <div
                    className="each"
                    onClick={() => {
                      setInputValue(user);
                    }}
                  >
                    {user}
                  </div>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
}
