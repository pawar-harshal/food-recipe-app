import { useEffect, useState } from "react";
import styles from "./Search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "";

export default function Search({ foodData, setfoodData }) {
  const [query, setQuery] = useState("");
  // syntax of useEffect hook
  //   useEffect((this is callback function)=>{code},[dependencies]), this sync each time when page reloads and because of this in state hook we have kept by default query value as "pizza"

  useEffect(() => {
    async function fetchFood() {
      const data = await (
        await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
      ).json();
      setfoodData(data.results); //here results is an array and thats what we want to grab
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputField}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="Search Recipe...."
        type="text"
      />
      <img
        className={styles.searchIcon}
        src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
        alt=""
      />
    </div>
  );
}
