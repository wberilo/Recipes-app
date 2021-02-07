import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { RecipeDetailsModal } from '../components';
import FavoriteCard from './Components/FavoriteCard';
import { RecipeContext } from '../context/RecipeContext';
import './FavoriteRecipes.css';

function FavoriteRecipes() {
  const { darkMode } = useContext(RecipeContext);
  let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!favoriteRecipes) favoriteRecipes = [];
  const [shownRecipes, setShownRecipes] = useState(favoriteRecipes);

  let buttonType = 'outline-secondary'
  let mode = '';
  if (darkMode) {
    buttonType = 'dark';
    mode = 'dark-favor';
  }

  return (
    <div>
      <RecipeDetailsModal />
      <div className="buttons-container">
        <Button
          className={ `filter-btn ${mode}` }
          onClick={ () => setShownRecipes(favoriteRecipes) }
          data-testid="filter-by-all-btn"
          variant={ buttonType }
        >
          All
        </Button>
        <Button
          className={ `filter-btn ${mode}` }
          onClick={
            () => setShownRecipes(favoriteRecipes
              .filter((recipe) => recipe.type === 'comida'))
          }
          data-testid="filter-by-food-btn"
          variant={ buttonType }
        >
          Food
        </Button>
        <Button
          className={ `filter-btn ${mode}` }
          onClick={
            () => setShownRecipes(favoriteRecipes
              .filter((recipe) => recipe.type === 'bebida'))
          }
          data-testid="filter-by-drink-btn"
          variant={ buttonType }
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
