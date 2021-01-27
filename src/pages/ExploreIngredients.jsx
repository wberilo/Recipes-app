import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Loading from '../components';

function ExploreIngredients({ history }) {
  const { location } = history;
  const { pathname } = location;
  const initialLength = 0;

  const [ingredients, setIngredients] = useState([]);

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

  const renderLoading = () => (
    <Card style={ { display: 'flex' } }>
      <Card.Title>Carregando...</Card.Title>
      <div style={ { alignSelf: 'center' } }>
        <Loading />
      </div>
    </Card>
  );

  return (
    <CardDeck
      style={ {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      } }
    >
      { ingredients.length > initialLength ? ingredients.map((ingredient, index) => {
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
              style={ {
                width: '140px',
                margin: '10px',
                boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2),
                  0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
              } }
            >
              <Card.Img
                data-testid={ `${index}-card-img` }
                variant="top"
                src={ `https://www.${url}.com/images/ingredients/${name}-Small.png` }
              />
              <Card.Body>
                <Card.Title data-testid={ `${index}-card-name` }>
                  { name }
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        );
      })
        : renderLoading() }
    </CardDeck>
  );
}

export default ExploreIngredients;

ExploreIngredients.propTypes = {
  history: propTypes.objectOf(),
}.isRequired;
