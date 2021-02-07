import React, { useEffect, useState, useContext } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { RecipeContext } from '../context/RecipeContext';
import './InitialExplore.css';

function Explore({ history }) {
  const { location } = history;
  const { pathname } = location;
  const { darkMode } = useContext(RecipeContext);

  const [randomRecipe, setRandomRecipe] = useState('');

  async function getRandomRecipe() {
    if (pathname.includes('comida')) {
      return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((response) => response.json())
        .then(({ meals }) => setRandomRecipe(`/comidas/${meals[0].idMeal}`));
    }
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then(({ drinks }) => setRandomRecipe(`/bebidas/${drinks[0].idDrink}`));
  }

  useEffect(() => {
    getRandomRecipe();
  });

  let buttonType = 'outline-secondary';
  let mode = '';
  if (darkMode) {
    buttonType = 'dark';
    mode = 'dark-explore';
  }

  const renderOrigin = () => (
    <Link to="/explorar/comidas/area">
      <Button
        className={ `explore-btn ${mode}` }
        data-testid="explore-by-area"
        variant={ buttonType }
        size="lg"
      >
        Por Local de Origem
      </Button>
    </Link>
  );

  return (
    <div className="container">
      <Link to={ `${pathname}/ingredientes` }>
        <Button
          className={ `explore-btn ${mode}` }
          data-testid="explore-by-ingredient"
          variant={ buttonType }
          size="lg"
        >
          Por Ingredientes
        </Button>
      </Link>
      { pathname.includes('comidas') && renderOrigin() }
      <Link to={ randomRecipe }>
        <Button
          className={ `explore-btn ${mode}` }
          data-testid="explore-surprise"
          variant={ buttonType }
          size="lg"
        >
          Me Surpreenda!
        </Button>
      </Link>
    </div>
  );
}

export default Explore;

Explore.propTypes = {
  history: propTypes.objectOf(propTypes.object),
}.isRequired;
