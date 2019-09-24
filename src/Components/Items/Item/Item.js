import React from 'react';
import style from './item.module.css';

const Item = ({title, calories, image, ingredients}) => {
  return(
    <div className={style.item}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient =>(
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image} alt="img"/>
  
    </div>
  )
};

export default Item