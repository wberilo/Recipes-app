import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { RecipeContext } from '../context/RecipeContext';
import RecipeDetailsIngredientsInProgress from './RecipeDetailsIngredientsInProgress';
import renderIngredient from '../services';
import '../pages/RecipeDetails.css';

function RecipeDetailsIngredients({ path, recipeId }) {
  const {
    recipe,
    setIngredientsLength } = useContext(RecipeContext);

  let key = 'meals';
  if (path.includes('bebida')) key = 'cocktails';

  const parameter = 1;
  const recipeArray = Object.entries(recipe[0]);
  const ingredients = recipeArray
    .filter((item) => (
      item[1] && item[0].includes('Ingredient') && item[1].length > parameter));

  setIngredientsLength(ingredients.length);

  const ingredientsWithMeasures = [];

  ingredients.forEach((item, index) => {
    const igrdNumber = index + 1;
    const igrd = {
      name: item[1],
      measure: recipe[0][`strMeasure${igrdNumber}`],
    };
    ingredientsWithMeasures.push(igrd);
  });

  const renderDetails = () => (
    <ListGroup variant="flush">
      { ingredientsWithMeasures.map((igrd, index) => (
        <ListGroup.Item
          data-testid={ `${index}-ingredient-name-and-measure` }
          className="ingredient"
          key={ igrd.name }
        >
          { igrd.measure ? `- ${renderIngredient(igrd)}` : `- ${igrd.name}` }
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <Card className="instructions">
      { !path.includes('progress') ? renderDetails() : <RecipeDetailsIngredientsInProgress
        ingredients={ ingredientsWithMeasures }
        rcpId={ recipeId }
        foodOrDrink={ key }
        pathname={ path }
      /> }
    </Card>
  );
}

export default RecipeDetailsIngredients;

RecipeDetailsIngredients.propTypes = {
  path: propTypes.string,
}.isRequired;
