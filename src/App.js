import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

function App() {


  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q="banana"&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data.hits);
  }


  const [searchRecipe, setSearchRecipe] = useState("");
  const inputHandler = (e) => {
    setSearchRecipe(e.target.value);
  }
  
  const searchHandler = () => {
    console.log(searchRecipe);
  }
  
  useEffect(() => {
    getRecipes();
  }, []);


  return (
    <div className="App">
      <input type="text" placeholder="Search recipe..." onChange={inputHandler} />
      <button type="submit" onClick={searchHandler} >Search</button>

      <div>
        <Recipe title={title} ingredients={ingredients} calories={calories} image={image} />
      </div>
    </div>
  );
}

export default App;
