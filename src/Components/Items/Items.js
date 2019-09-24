import React, {useEffect, useState} from 'react';
import Item from './Item/Item';
import './Items.css';

const Items = () => {

  const fakeID = "adb5837c"
  const fakeKey= "0f57a99f17e1004dcf049124748b0d38" 

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getItems(); 
  }, [query]); 

  const getItems = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${fakeID}&app_key=${fakeKey}`)
    const data = await response.json();
    setItems(data.hits);
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
    <div className="Items">
      <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch} />
      <button className="search-button " type="submit">Search</button>
      </form>
      <div className="items">
      {items.map(item =>(
        <Item 
        key={item.recipe.label}
        title={item.recipe.label} 
        calories={item.recipe.calories} 
        image={item.recipe.image}
        ingredients={item.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default Items