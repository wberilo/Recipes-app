import React, { useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { RecipeContext } from '../context/RecipeContext';
import { Loading,
  RecommendedRecipesBody,
  RecipeDetailsHeader,
  RecipeDetailsIngredients,
  RecipeDetailsButton,
  RecipeDetailsModal } from '../components';
import './RecipeDetails.css';

function RecipeDetails(props) {
  const { match, history } = props;
  const { params } = match;
  const { id } = params;
  const { location } = history;
  const { pathname } = location;

  const {
    setIsFavorite,
    recipe,
    recommended,
    setRecipe,
    setRecommended,
  } = useContext(RecipeContext);

  useEffect(() => {
    async function getRecipe() {
      if (pathname.includes('comidas')) {
        const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((response) => response.json());
        return setRecipe(meals);
      }
      const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json());
      return setRecipe(drinks);
    }
    getRecipe();
  }, [setRecipe, pathname, id]);

  useEffect(() => {
    async function getRecommended() {
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
      if (pathname.includes('comida')) {
        const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
          .then((response) => response.json());
        return setRecommendations(drinks);
      }
      const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then((response) => response.json());
      return setRecommendations(meals);
    }
    getRecommended();
  }, [setRecommended, pathname]);

  if (!recipe[0] || !recommended[0]) return <Loading />;

  const {
    strMealThumb,
    strInstructions,
  } = recipe[0];

  let image = strMealThumb;

  if (pathname.includes('bebida')) {
    const {
      strDrinkThumb,
    } = recipe[0];
    image = strDrinkThumb;
  }

  const checkFavorite = () => {
    let favorite = false;
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteRecipes) favorite = favoriteRecipes.some((item) => item.id === id);
    if (favorite) setIsFavorite(true);
  };

  checkFavorite();

  return (
    <Card>
      <div className="image-container">
        <Card.Img
          src={ image }
          alt="recipe image"
          data-testid="recipe-photo"
        />
      </div>
      <RecipeDetailsHeader path={ pathname } recipeId={ id } />
      <Card.Body>
        <Card.Subtitle
          className="instructions-title one"
        >
          <strong>
            Ingredientes
          </strong>
        </Card.Subtitle>
        <RecipeDetailsIngredients path={ pathname } recipeId={ id } />
        <Card.Subtitle
          className="instructions-title"
        >
          <strong>
            Instruções
          </strong>
        </Card.Subtitle>
        <Card className="instructions">
          <Card.Text data-testid="instructions">
            { strInstructions }
          </Card.Text>
        </Card>
        <RecommendedRecipesBody path={ pathname } recipeID={ id } />
      </Card.Body>
      <RecipeDetailsButton path={ pathname } recipeId={ id } />
      <RecipeDetailsModal />
    </Card>
  );
}

export default RecipeDetails;

RecipeDetails.propTypes = {
  match: propTypes.objectOf(),
  history: propTypes.objectOf(),
}.isRequired;
