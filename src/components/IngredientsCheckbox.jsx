import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { RecipeContext } from '../context/RecipeContext';
import renderIngredient from '../services';
import '../pages/RecipeDetails.css';

const checkInProgressRecipes = (key, id) => {
  let inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!inProgressRecipes) {
    inProgressRecipes = { cocktails: {}, meals: {} };
    inProgressRecipes[`${key}`][`${id}`] = [];
  }
  return inProgressRecipes;
};

const checkLabel = (element) => {
  let label = element;
  if (!element.className.includes('label')) label = element.nextSibling;
  return label;
};

const checkInput = (element) => {
  let input = element.previousSibling;
  if (!element.className.includes('label')) input = element;
  return input;
};

const createNewInput = () => {
  const newInput = document.createElement('input');
  newInput.className = 'form-check-input checkbox';
  newInput.type = 'checkbox';
  return newInput;
};

function IngredientsCheckbox({ recipeID, type, verify, lbClass, igd }) {
  const {
    darkMode,
    setDisable,
    ingredientsLength } = useContext(RecipeContext);

  const check = ({ target }) => {
    const inProgressRecipes = checkInProgressRecipes(type, recipeID);
    let inProgressRecipe = inProgressRecipes[`${type}`][`${recipeID}`];
    const parent = target.parentElement;
    const label = checkLabel(target);
    const input = checkInput(target);
    input.remove();
    const newInput = createNewInput();
    newInput.addEventListener('click', (event) => check(event));
    parent.insertBefore(newInput, label);
    const ingredient = label.innerText;
    if (!label.className.includes('checked')) {
      if (!inProgressRecipe) inProgressRecipe = [];
      inProgressRecipes[`${type}`][`${recipeID}`] = inProgressRecipe;
      inProgressRecipes[`${type}`][`${recipeID}`].push(ingredient);
      newInput.checked = true;
      label.className = 'form-check-label checked';
      if (darkMode) label.className = 'form-check-label dark-checked';
      if (inProgressRecipe.length === ingredientsLength) setDisable(false);
      return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    }
    const ingredientsArray = inProgressRecipes[`${type}`][`${recipeID}`]
      .filter((item) => item !== ingredient);
    inProgressRecipes[`${type}`][`${recipeID}`] = ingredientsArray;
    newInput.checked = false;
    label.className = 'form-check-label';
    setDisable(true);
    const parameter = 0;
    if (ingredientsArray.length === parameter) {
      delete inProgressRecipes[`${type}`][`${recipeID}`];
    }
    return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  };

  return (
    <Form.Check
      className="ingredient-container"
      type="checkbox"
    >
      <Form.Check.Input
        className="checkbox"
        type="checkbox"
        checked={ verify }
        onClick={ (event) => check(event) }
      />
      <Form.Check.Label
        className={ lbClass }
        onClick={ (event) => check(event) }
      >
        { igd.measure ? renderIngredient(igd)
          : `${igd.name}` }
      </Form.Check.Label>
    </Form.Check>
  );
}

export default IngredientsCheckbox;

IngredientsCheckbox.propTypes = {
  recipeID: propTypes.string,
  type: propTypes.string,
  verify: propTypes.bool,
  lbClass: propTypes.string,
  igd: propTypes.objectOf(),
}.isRequired;
