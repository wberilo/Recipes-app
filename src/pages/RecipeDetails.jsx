import React, { useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { RecipeContext } from '../context/RecipeContext';
import { Loading,
  RecipeVideo,
  RecommendedRecipes,
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
    getRecipe,
    getRecommended,
  } = useContext(RecipeContext);

  useEffect(() => {
    getRecipe(pathname, id);
  }, [getRecipe, pathname, id]);

  useEffect(() => {
    getRecommended(pathname);
  }, [getRecommended, pathname]);

  if (!recipe[0] || !recommended[0]) return <Loading />;

  const {
    strMealThumb,
    strInstructions,
    strYoutube,
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
        <RecipeDetailsIngredients />
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
        { pathname.includes('comidas') && <RecipeVideo videoString={ strYoutube } /> }
        <Card.Subtitle
          className="instructions-title"
        >
          <strong>
            Recomendadas
          </strong>
        </Card.Subtitle>
        <RecommendedRecipes path={ pathname } />
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
