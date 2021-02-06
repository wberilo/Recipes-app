import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { RecipeContext } from '../context/RecipeContext';
import '../pages/RecipeDetails.css';

function RecipeDetailsHeader({ path, recipeId }) {
  const {
    isFavorite,
    setIsFavorite,
    recipe,
    setShow,
  } = useContext(RecipeContext);

  const {
    strMeal,
    strCategory,
  } = recipe[0];

  let name = strMeal;
  let category = strCategory;

  if (path.includes('bebida')) {
    const {
      strDrink,
      strAlcoholic,
    } = recipe[0];
    name = strDrink;
    category = strAlcoholic;
  }

  const favorRecipe = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (isFavorite) {
      const newFavorites = favoriteRecipes.filter((favoriteRecipe) => (
        favoriteRecipe.id !== recipeId));
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
      return setIsFavorite(false);
    }
    const {
      strArea,
      strAlcoholic,
      strMealThumb,
      strDrinkThumb,
    } = recipe[0];
    let type = 'comida';
    let area = strArea;
    let alcoholicOrNot = '';
    let image = strMealThumb;

    if (path.includes('bebida')) {
      type = 'bebida';
      area = '';
      category = strCategory;
      alcoholicOrNot = strAlcoholic;
      image = strDrinkThumb;
    }
    const newFavorite = {
      id: recipeId,
      type,
      area,
      category,
      alcoholicOrNot,
      name,
      image,
    };

    if (favoriteRecipes) {
      favoriteRecipes.push(newFavorite);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      return setIsFavorite(true);
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify([newFavorite]));
    return setIsFavorite(true);
  };

  const renderHeartIcon = () => {
    let heartImage = whiteHeartIcon;
    let heartClass = "recipe-icon recipe-heart"
    if (isFavorite) {
      heartImage = blackHeartIcon;
      heartClass = "recipe-icon recipe-favorite"
    }
    return (
      <div>
        <svg
            className={ heartClass }
            data-testid="favorite-btn"
            viewBox="0 0 32 29.6"
            src={ heartImage }
            onClick={ () => favorRecipe() }
          >
            <path
              d={ `M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,
              0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
              c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z` }
            />
          </svg>
      </div>
    );
  };

  const toClipBoard = () => {
    const textArea = document.createElement('textarea');
    let type = 'comidas';
    if (path.includes('bebida')) type = 'bebidas';
    const text = `http://localhost:3000/${type}/${recipeId}`;
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setShow(true);
  };

  return (
    <div className="header">
      <div className="name-category">
        <Card.Title
          data-testid="recipe-title"
          className="recipe-title"
        >
          { name }
        </Card.Title>
        <Card.Subtitle
          className="text-muted"
          data-testid="recipe-category"
        >
          { category }
        </Card.Subtitle>
      </div>
      <div className="icons-container">
        <div className="recipe-icon share-recipe">
          <Image
            src={ shareIcon }
            onClick={ toClipBoard }
            data-testid="share-btn"
            fluid
          />
        </div>
        { renderHeartIcon() }
      </div>
    </div>
  );
}

export default RecipeDetailsHeader;

RecipeDetailsHeader.propTypes = {
  path: propTypes.string,
  recipeId: propTypes.string,
}.isRequired;
