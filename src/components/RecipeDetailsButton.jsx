import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../pages/RecipeDetails.css';

function RecipeDetailsButton({ path, recipeId }) {
  const renderButton = (boolean) => {
    let string = 'Continuar Receita';
    if (!boolean) string = 'Iniciar Receita';
    return (
      <Link to={ `${path}/in-progress` }>
        <div className="start-recipe-container">
          <Button
            className="start-recipe-btn"
            variant="success"
            data-testid="start-recipe-btn"
          >
            <strong>
              { string }
            </strong>
          </Button>
        </div>
      </Link>
    );
  };

  const checkButton = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    let alreadyDone = false;
    let inProgress = false;
    let key = 'cocktails';
    if (path.includes('comida')) key = 'meals';
    if (doneRecipes) alreadyDone = doneRecipes.some((item) => item.id === recipeId);
    if (alreadyDone) return null;
    if (inProgressRecipes) {
      const id = Object.keys(inProgressRecipes[`${key}`]);
      inProgress = id.some((item) => item === recipeId);
    }
    return renderButton(inProgress);
  };

  return checkButton();
}

export default RecipeDetailsButton;
