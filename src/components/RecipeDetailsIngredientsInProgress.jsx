import React from 'react';
import propTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import IngredientsCheckbox from './IngredientsCheckbox';
import '../pages/RecipeDetails.css';

function RecipeDetailsIngredientsInProgress(props) {
  const { ingredients, rcpId, foodOrDrink, pathname } = props;
  return (
    <Form.Group className="in-progress">
      { ingredients.map((igrd, index) => {
        const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
        let inProgressRecipe = null;
        if (inProgressRecipes) {
          inProgressRecipe = inProgressRecipes[`${foodOrDrink}`][`${rcpId}`];
        }
        let isDone = false;
        let labelClass = '';
        if (inProgressRecipe) {
          isDone = inProgressRecipe
            .some((item) => {
              let string = `${igrd.name} | ${igrd.measure}`;
              if (pathname.includes('bebida')) string = `${igrd.name}`;
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
              recipeID={ rcpId }
              type={ foodOrDrink }
              verify={ isDone }
              lbClass={ labelClass }
              igd={ igrd }
            />
          </div>
        );
      })}
    </Form.Group>
  );
}

export default RecipeDetailsIngredientsInProgress;

RecipeDetailsIngredientsInProgress.propTypes = {
  ingredients: propTypes.arrayOf(),
  rcpId: propTypes.string,
  foodOrDrink: propTypes.string,
  pathname: propTypes.string,
}.isRequired;
