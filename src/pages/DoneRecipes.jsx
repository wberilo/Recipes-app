import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { RecipeDetailsModal } from '../components';
import DoneCard from './Components/DoneCard';
import './DoneRecipes.css';

function DoneRecipes() {
  let doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipes) doneRecipes = [];
  const [shownRecipes, setShownRecipes] = useState(doneRecipes);
  return (
    <div>
      <RecipeDetailsModal className="modal" />
      <div className="buttons-container">
        <Button
          className="filter-btn"
          onClick={ () => setShownRecipes(doneRecipes) }
          data-testid="filter-by-all-btn"
          variant="outline-secondary"
        >
          All
        </Button>
        <Button
          className="filter-btn"
          onClick={
            () => setShownRecipes(doneRecipes.filter((recipe) => (
              recipe.type === 'comida')))
          }
          data-testid="filter-by-food-btn"
          variant="outline-secondary"
        >
          Food
        </Button>
        <Button
          className="filter-btn"
          onClick={
            () => setShownRecipes(doneRecipes.filter((recipe) => (
              recipe.type === 'bebida')))
          }
          data-testid="filter-by-drink-btn"
          variant="outline-secondary"
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
