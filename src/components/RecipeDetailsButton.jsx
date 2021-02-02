import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { RecipeContext } from '../context/RecipeContext';
import '../pages/RecipeDetails.css';

function RecipeDetailsButton({ path, recipeId }) {
  const { disable, setDisable, ingredientsLength } = useContext(RecipeContext);

  const renderButton = (boolean, array) => {
    let type = 'start';
    let string = 'Continuar Receita';
    let redirect = `${path}/in-progress`;
    if (!boolean) string = 'Iniciar Receita';
    if (path.includes('progress')) {
      string = 'Finalizar receita';
      type = 'finish';
      redirect = '/receitas-feitas';
      if (array.length !== ingredientsLength) setDisable(true);
    }
    if (!path.includes('progress')) setDisable(false);
    return (
      <Link to={ redirect }>
        <div className="start-recipe-container">
          <Button
            className="start-recipe-btn"
            variant="success"
            data-testid={ `${type}-recipe-btn` }
            disabled={ disable }
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
    let inProgressRecipe = [];
    if (path.includes('comida')) key = 'meals';
    if (doneRecipes) alreadyDone = doneRecipes.some((item) => item.id === recipeId);
    if (alreadyDone) return null;
    if (inProgressRecipes) {
      const id = Object.keys(inProgressRecipes[`${key}`]);
      inProgress = id.some((item) => item === recipeId);
      inProgressRecipe = inProgressRecipes[`${key}`][`${recipeId}`];
      if (!inProgressRecipe) inProgressRecipe = [];
    }
    return renderButton(inProgress, inProgressRecipe);
  };

  return checkButton();
}

export default RecipeDetailsButton;
