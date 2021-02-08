import React, { useEffect, useState, useContext } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Loading } from '../components';
import { RecipeContext } from '../context/RecipeContext';
import './Comidas.css';

function ExploreIngredients({ history }) {
  const { location } = history;
  const { pathname } = location;
  const parameter = 1;

  const [ingredients, setIngredients] = useState([]);
  const { darkMode } = useContext(RecipeContext);

  useEffect(() => {
    async function getIngredients() {
      const min = 0;
      const max = 12;
      if (pathname.includes('comida')) {
        return fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
          .then((response) => response.json())
          .then(({ meals }) => setIngredients(meals.slice(min, max)));
      }
      fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
        .then((response) => response.json())
        .then(({ drinks }) => setIngredients(drinks.slice(min, max)));
    }
    getIngredients();
  }, [pathname]);

  if (ingredients.length < parameter) return <Loading />;

  let mode = '';
  if (darkMode) mode = 'dark-food';

  return (
    <CardDeck
      className="cards-container"
    >
      { ingredients.map((ingredient, index) => {
        let url = 'thecocktaildb';
        let name = ingredient.strIngredient1;
        let redirect = '/bebidas';
        if (pathname.includes('comida')) {
          url = 'themealdb';
          name = ingredient.strIngredient;
          redirect = '/comidas';
        }
        return (
          <Link
            key={ index }
            to={ {
              pathname: redirect,
              ingredient: name,
            } }
          >
            <Card
              data-testid={ `${index}-ingredient-card` }
              className={ `recipe-card card-${mode}` }
            >
              <div
                className="recipe-image-container"
              >
                <Card.Img
                  data-testid={ `${index}-card-img` }
                  variant="top"
                  src={ `https://www.${url}.com/images/ingredients/${name}-Small.png` }
                />
              </div>
              <Card.Body
                className="recipe-body"
              >
                <Card.Title
                  data-testid={ `${index}-card-name` }
                  className="recipe-title"
                >
                  { name }
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </CardDeck>
  );
}

export default ExploreIngredients;

ExploreIngredients.propTypes = {
  history: propTypes.objectOf(),
}.isRequired;
