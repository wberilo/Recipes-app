import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import FavoriteCard from './Components/FavoriteCard';

function FavoriteRecipes() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [shownRecipes, setShownRecipes] = useState(favoriteRecipes);

  console.log(shownRecipes);

  return (
    <div>
      <Button
        onClick={ () => setShownRecipes(favoriteRecipes) }
        data-testid="filter-by-all-btn"
      >
        All
      </Button>
      <Button
        onClick={
          () => setShownRecipes(favoriteRecipes
            .filter((recipe) => recipe.type === 'comida'))
        }
        data-testid="filter-by-food-btn"
      >
        Food
      </Button>
      <Button
        onClick={
          () => setShownRecipes(favoriteRecipes
            .filter((recipe) => recipe.type === 'bebida'))
        }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </Button>
      <div className="gallery">
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
