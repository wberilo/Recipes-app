import React, { createContext, useState } from 'react';
import propTypes from 'prop-types';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [show, setShow] = useState(false);

  const foodsFetched = [];

  async function getRecipe(path, id) {
    if (path.includes('comidas')) {
      const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json());
      return setRecipe(meals);
    }
    const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json());
    return setRecipe(drinks);
  }

  async function getRecommended(path) {
    const setRecommendations = (array) => {
      const min = 0;
      const max = 2;
      const min2 = 2;
      const max2 = 4;
      const min3 = 4;
      const max3 = 6;
      const set1 = array.slice(min, max);
      const set2 = array.slice(min2, max2);
      const set3 = array.slice(min3, max3);
      return setRecommended([set1, set2, set3]);
    };
    if (path.includes('comida')) {
      const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((response) => response.json());
      return setRecommendations(drinks);
    }
    const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json());
    return setRecommendations(meals);
  }

  const context = {
    isFavorite,
    setIsFavorite,
    foodsFetched,
    recipe,
    setRecipe,
    recommended,
    setRecommended,
    show,
    setShow,
    getRecipe,
    getRecommended,
  };

  return (
    <RecipeContext.Provider value={ context }>
      { children }
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeProvider as Provider };

RecipeProvider.propTypes = {
  children: propTypes.objectOf(),
}.isRequired;
