import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./Project12.css";
import axios from "axios";
export function Project12() {
  const [userDetails, setUserDetails] = useState(null);
  const [inputValue, setInputValue] = useState(" ");
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const loadData = async () => {
    setIsLoading(true);
    setLoaded(false);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${
          inputValue.trim() === "" ? "hirodinn" : inputValue.trim()
        }`
      );
      setUserDetails(response.data);
      setInputValue("");
      setLoaded(true);
    } catch {
      setLoaded(false);
    } finally {
      setIsLoading(false);
    }
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
            <button
              onClick={() => {
                loadData();
              }}
            >
              Submit
            </button>
          </form>
          {loaded ? (
            <div className="content-container">
              <img src={userDetails.avatar_url} />
              <div className="info">
                <a href={userDetails.html_url} target="_blank">
                  {userDetails.name}
                </a>
                <p>
                  User Joined on{" "}
                  {dayjs(userDetails.created_at).format("DD MMMM YYYY")}
                </p>
              </div>
              <p>Public Repos {userDetails.public_repos}</p>
              <p>Followers {userDetails.followers}</p>
              <p>Following {userDetails.following}</p>
            </div>
          ) : (
            <h1>User Not Found</h1>
          )}
        </>
      )}
    </div>
  );
}
