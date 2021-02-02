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
    if (isFavorite) heartImage = blackHeartIcon;
    return (
      <div className="icon heart">
        <Image
          src={ heartImage }
          data-testid="favorite-btn"
          onClick={ () => favorRecipe() }
          fluid
        />
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
        <div className="icon">
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
