import "./App.css";
import React, { useEffect, useState } from "react";
import Recipie from "./components/Recipie";
import Empty from "./components/Empty";

function App() {
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana');
  const banana = "banana"


  useEffect(() => {
    getRecipies();
  }, [query]);

  const APP_ID = "a58eec9b";
  const APP_KEY = "ece302170c08adf47541f1352923f55d";

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  }
  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="logo">
          <h1>Recipe Log Book</h1>
        </div>
        <div className="bar-btn">
          <input className="search-bar" type="text" value={search} onChange={handleChange} autoFocus placeholder="Enter Recipe" />
          <button className="search-button" type="submit">Search</button>
        </div>

      </form>
      <div className="recipies">
        {recipies.length !== 0
          ?
          recipies.map((recipe) => (
            <Recipie key={recipe.recipe.calories} name={recipe.recipe.label} ingredients={recipe.recipe.ingredients} type={recipe.recipe.dishType} cusine={recipe.recipe.cuisineType} calories={recipe.recipe.calories} image={recipe.recipe.image} />
          ))
          :
          <Empty />
        }

      </div>
    </div>
  );
}

export default App;
