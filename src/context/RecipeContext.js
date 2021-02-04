import React, { createContext, useState } from 'react';
import propTypes from 'prop-types';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const initialIngredientsLength = 0;
  const [isFavorite, setIsFavorite] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const [ingredientsLength, setIngredientsLength] = useState(initialIngredientsLength);
  const [searched, setSearched] = useState([]);

  const foodsFetched = [];

  const context = {
    searched,
    setSearched,
    isFavorite,
    setIsFavorite,
    foodsFetched,
    recipe,
    setRecipe,
    recommended,
    setRecommended,
    show,
    setShow,
    disable,
    setDisable,
    ingredientsLength,
    setIngredientsLength,
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
