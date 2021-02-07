import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { RecipeContext } from '../context/RecipeContext';
import '../pages/RecipeDetails.css';

function RecipeDetailsButton({ path, recipeId }) {
  const {
    darkMode,
    disable,
    setDisable,
    ingredientsLength,
    recipe } = useContext(RecipeContext);

  const finishRecipe = () => {
    let doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (!doneRecipes) doneRecipes = [];
    const alreadyDone = doneRecipes.some((item) => item.id === recipeId);
    if (alreadyDone) return null;
    const months = ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const {
      strMeal,
      strDrink,
      strArea,
      strAlcoholic,
      strMealThumb,
      strDrinkThumb,
      strCategory,
      strTags,
    } = recipe[0];
    let name = strMeal;
    let type = 'comida';
    let area = strArea;
    let alcoholicOrNot = '';
    let image = strMealThumb;
    let tags = [];
    const date = new Date();
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const doneDate = `${day} de ${month} de ${year}`;

    if (path.includes('bebida')) {
      name = strDrink;
      type = 'bebida';
      area = '';
      alcoholicOrNot = strAlcoholic;
      image = strDrinkThumb;
    }

    if (strTags) tags = strTags.split(',');

    const newDoneRecipe = {
      id: recipeId,
      type,
      area,
      category: strCategory,
      alcoholicOrNot,
      name,
      image,
      doneDate,
      tags,
    };
    doneRecipes.push(newDoneRecipe);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  };

  const renderButton = (boolean, array) => {
    let type = 'start';
    let string = 'Continuar Receita';
    let redirect = `${path}/in-progress`;
    let click = null;
    if (!boolean) string = 'Iniciar Receita';
    if (path.includes('progress')) {
      string = 'Finalizar receita';
      type = 'finish';
      redirect = '/receitas-feitas';
      click = finishRecipe;
      if (array.length !== ingredientsLength) setDisable(true);
    }
    if (!path.includes('progress')) setDisable(false);

    let buttonType = 'success';
    if (darkMode) buttonType = 'dark';

    return (
      <Link to={ redirect }>
        <div className="start-recipe-container">
          <Button
            className="start-recipe-btn"
            variant={ buttonType }
            data-testid={ `${type}-recipe-btn` }
            disabled={ disable }
            onClick={ click }
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
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    let inProgress = false;
    let key = 'cocktails';
    let inProgressRecipe = [];
    if (path.includes('comida')) key = 'meals';
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
