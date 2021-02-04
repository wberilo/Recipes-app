import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { RecipeDetailsModal } from '../components';
import Button from 'react-bootstrap/Button';
import FavoriteCard from './Components/FavoriteCard';
import './FavoriteRecipes.css';

function FavoriteRecipes() {
  let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!favoriteRecipes) favoriteRecipes = [];
  const [shownRecipes, setShownRecipes] = useState(favoriteRecipes);

  return (
    <div>
      <RecipeDetailsModal />
      <div className="buttons-container">
        <Button
          className="filter-btn"
          onClick={ () => setShownRecipes(favoriteRecipes) }
          data-testid="filter-by-all-btn"
          variant="outline-secondary"
        >
          All
        </Button>
        <Button
          className="filter-btn"
          onClick={
            () => setShownRecipes(favoriteRecipes
              .filter((recipe) => recipe.type === 'comida'))
          }
          data-testid="filter-by-food-btn"
          variant="outline-secondary"
        >
          Food
        </Button>
        <Button
          className="filter-btn"
          onClick={
            () => setShownRecipes(favoriteRecipes
              .filter((recipe) => recipe.type === 'bebida'))
          }
          data-testid="filter-by-drink-btn"
          variant="outline-secondary"
        >
          Drinks
        </Button>
      </div>
      <div>
        {shownRecipes.map((recipe, index) => (
          <FavoriteCard
            shownRecipes={ shownRecipes }
            setShownRecipes={ setShownRecipes }
            recipe={ recipe }
            index={ index }
            key={ index }
          />))}
      </div>
    </div>);
}

FavoriteRecipes.propTypes = {
};

export default withRouter(FavoriteRecipes);
