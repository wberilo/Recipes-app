import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { RecipeContext } from '../context/RecipeContext';
import IngredientsCheckbox from './IngredientsCheckbox';
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

  const renderInProgress = () => (
    <Form.Group className="in-progress">
      { ingredientsWithMeasures.map((igrd, index) => {
        const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
        let inProgressRecipe = null;
        if (inProgressRecipes) {
          inProgressRecipe = inProgressRecipes[`${key}`][`${recipeId}`];
        }
        let isDone = false;
        let labelClass = '';
        if (inProgressRecipe) {
          isDone = inProgressRecipe
            .some((item) => {
              const string = `${igrd.name} | ${igrd.measure}`;
              const ingredient = string.trim();
              return item.includes(ingredient);
            });
        }
        if (isDone) labelClass = 'checked';
        return (
          <div
            data-testid={ `${index}-ingredient-step` }
            key={ igrd.name }
          >
            <IngredientsCheckbox
              recipeID={ recipeId }
              type={ key }
              verify={ isDone }
              lbClass={ labelClass }
              igd={ igrd }
            />
          </div>
        );
      })}
    </Form.Group>
  );

  return (
    <Card className="instructions">
      { !path.includes('progress') ? renderDetails() : renderInProgress() }
    </Card>
  );
}

export default RecipeDetailsIngredients;

RecipeDetailsIngredients.propTypes = {
  path: propTypes.string,
}.isRequired;
