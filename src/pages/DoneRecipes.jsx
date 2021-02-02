import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import DoneCard from './Components/DoneCard';

function DoneRecipes() {
  let doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipes) doneRecipes = [];
  const [shownRecipes, setShownRecipes] = useState(doneRecipes);
  return (
    <div>
      <Button
        onClick={ () => setShownRecipes(doneRecipes) }
        data-testid="filter-by-all-btn"
      >
        All
      </Button>
      <Button
        onClick={
          () => setShownRecipes(doneRecipes.filter((recipe) => recipe.type === 'comida'))
        }
        data-testid="filter-by-food-btn"
      >
        Food
      </Button>
      <Button
        onClick={
          () => setShownRecipes(doneRecipes.filter((recipe) => recipe.type === 'bebida'))
        }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </Button>
      <div className="gallery">
        {shownRecipes.map((recipe, index) => (
          <DoneCard recipe={ recipe } index={ index } key={ index } />))}
      </div>
    </div>);
}

DoneRecipes.propTypes = {
};

export default withRouter(DoneRecipes);
