import { use, useEffect } from "react";
import { useState } from "react";
import "../styles/heroSearchBar.css";
import { Link } from "react-router-dom";

export function HeroSearchBar() {
  const [listStyle, setListStyle] = useState("hidden-list");
  const [inputValue, setInputValue] = useState("");
  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    setInputValue("");
  }, []);

  const showList = (query) => {
    setInputValue(query);
    const heroes = searchHero(query);
    setHeroList(heroes);
    console.log(heroList);

    if (query) {
      setListStyle("hidden-list show-list");
    } else {
      setListStyle("hidden-list");
    }
    if (query.length === 0 || query === "") {
      setInputValue("");
    }
  };

  return (
    <div className="hero-list">
      <input
        type="text"
        placeholder="Search for you hero"
        name="heroSearch"
        id="heroSearch"
        value={inputValue}
        onChange={(e) => {
          showList(e.target.value);
        }}
      />
      <ul className={listStyle}>
        {heroList.map((hero) => {
          return (
            <li key={hero.userId}>
              <Link
                to={`hero/${hero.userId}`}
                onClick={() => {
                  setInputValue("");
                  setListStyle("hidden-list");
                  setHeroList([]);
                }}
              >
                {hero.username}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function searchHero(query) {
  const userList = JSON.parse(localStorage.getItem("users"));
  const querySplit = query.split("");

  let returnedList = [];
  for (let user of userList) {
    const usernameSplit = user.username.split("");

    for (let i = 0; i < querySplit.length; i++) {
      if (querySplit[i] === usernameSplit[i]) {
        if (!returnedList.includes(user)) {
          returnedList.push(user);
        }
      }
    }
  }
  return returnedList;
}
