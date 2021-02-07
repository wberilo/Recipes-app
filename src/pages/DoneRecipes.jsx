import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { RecipeDetailsModal } from '../components';
import DoneCard from './Components/DoneCard';
import { RecipeContext } from '../context/RecipeContext';
import './DoneRecipes.css';

function DoneRecipes() {
  const { darkMode } = useContext(RecipeContext);

  let doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipes) doneRecipes = [];
  const [shownRecipes, setShownRecipes] = useState(doneRecipes);

  let buttonType = 'outline-secondary'
  let mode = '';
  if (darkMode) {
    buttonType = 'dark';
    mode = 'dark-done';
  }

  return (
    <div>
      <RecipeDetailsModal className="modal" />
      <div className="buttons-container">
        <Button
          className={ `filter-btn ${mode}` }
          onClick={ () => setShownRecipes(doneRecipes) }
          data-testid="filter-by-all-btn"
          variant={ buttonType }
        >
          All
        </Button>
        <Button
          className={ `filter-btn ${mode}` }
          onClick={
            () => setShownRecipes(doneRecipes.filter((recipe) => (
              recipe.type === 'comida')))
          }
          data-testid="filter-by-food-btn"
          variant={ buttonType }
        >
          Food
        </Button>
        <Button
          className={ `filter-btn ${mode}` }
          onClick={
            () => setShownRecipes(doneRecipes.filter((recipe) => (
              recipe.type === 'bebida')))
          }
          data-testid="filter-by-drink-btn"
          variant={ buttonType }
        >
          Drinks
        </Button>
      </div>
      <div>
        {shownRecipes.map((recipe, index) => (
          <DoneCard recipe={ recipe } index={ index } key={ index } />))}
      </div>
    </div>);
}

DoneRecipes.propTypes = {
};

export default withRouter(DoneRecipes);
