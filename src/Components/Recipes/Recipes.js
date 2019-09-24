import React, {useEffect, useState} from 'react';
import Recipe from './Recipe/Recipe';
import './Recipes.css';

const Recipes = () => {

  const fakeID = "adb5837c"
  const fakeKey= "0f57a99f17e1004dcf049124748b0d38" 

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes(); 
  }, [query]); 

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${fakeID}&app_key=${fakeKey}`)
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('');
  };

  return (
    <div className="Recipes">
      <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch} />
      <button className="search-button " type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default Recipes