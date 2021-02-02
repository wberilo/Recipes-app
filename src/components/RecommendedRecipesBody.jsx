import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { RecipeContext } from '../context/RecipeContext';
import RecipeVideo from './RecipeVideo';
import RecommendedRecipes from './RecommendedRecipes';
import '../pages/RecipeDetails.css';

function RecommendedRecipesBody({ path, recipeID }) {
  const { recipe } = useContext(RecipeContext);

  const { strYoutube } = recipe[0];

  const renderRecommended = () => (
    <Card.Subtitle
      className="instructions-title"
    >
      <strong>
        Recomendadas
      </strong>
    </Card.Subtitle>
  );

  return (
    <div>
      { path.includes('comida')
        ? !path.includes('progress')
        && <RecipeVideo videoString={ strYoutube } /> : null }
      { !path.includes('progress') && renderRecommended() }
      { !path.includes('progress')
        && <RecommendedRecipes path={ path } recipeId={ recipeID } /> }
    </div>
  );
}

export default RecommendedRecipesBody;

RecommendedRecipesBody.propTypes = {
  path: propTypes.string,
  recipeID: propTypes.string,
}.isRequired;
