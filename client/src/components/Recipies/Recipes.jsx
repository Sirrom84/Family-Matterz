import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RecipeItem } from './RecipeItem';
import { Loading } from '../Loading/Loading';

import './Recipes.scss';

export const Recipes = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [isloading, setLoading] = useState(true);
  const API = process.env.REACT_APP_API_KEY,
    dish = props.location.state.title,
    apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${dish}${API}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setRecipe(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (isloading) {
    return <Loading />;
  }

  const recipes = recipe.map((item, index) => {
    return (
      <RecipeItem
        key={index}
        item={item}
        index={index}
        dish={dish}
        location={props.location}
      />
    );
  });

  return (
    <div className='recipes'>
      <h3>Recipe Book</h3>
      <div className='recipe-container'>{recipes}</div>
    </div>
  );
};
