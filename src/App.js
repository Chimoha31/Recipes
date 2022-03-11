import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

function App() {
 

  const [searchRecipe, setSearchRecipe] = useState("");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q="${query}"&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const inputHandler = (e) => {
    setSearchRecipe(e.target.value);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(searchRecipe);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <form onSubmit={searchSubmitHandler}>
        <input
          type="text"
          value={searchRecipe}
          placeholder="Search recipe..."
          onChange={inputHandler}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.title}
            ingredients={recipe.recipe.ingredients}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
