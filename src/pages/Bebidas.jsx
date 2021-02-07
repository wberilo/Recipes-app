import React, { useEffect, useState, useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Loading } from '../components';
import { RecipeContext } from '../context/RecipeContext';
import './Comidas.css';

const checkButton = (boolean) => {
  if (boolean) return 'dark';
  return 'outline-secondary';
};

const checkMode = (boolean) => {
  if (boolean) return 'dark-food';
  return '';
};

function Bebidas({ location }) {
  const { darkMode, searched } = useContext(RecipeContext);
  const [beverageCards, setBeverageCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [catSelected, setCatSelected] = useState();

  const { ingredient } = location;

  useEffect(() => {
    if (searched !== undefined) {
      setBeverageCards(searched);
    }
  }, [searched]);
  useEffect(() => {
    async function grabFoodItems() {
      const fetched = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((data) => data.json());
      const fetchCategories = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then((data) => data.json());
      const min = 0;
      const max = 5;
      const max2 = 12;
      setCategories(fetchCategories.drinks.slice(min, max));
      setBeverageCards(fetched.drinks.slice(min, max2));
    }
    if (!catSelected && !ingredient) {
      grabFoodItems();
    }
  }, [ingredient, catSelected]);

  useEffect(() => {
    async function grabByCategory() {
      const fetchByCategory = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${catSelected}`)
        .then((data) => data.json());
      const min = 0;
      const max = 12;
      setBeverageCards(fetchByCategory.drinks.slice(min, max));
    }
    if (catSelected !== undefined) {
      grabByCategory();
    }
  }, [catSelected]);

  useEffect(() => {
    async function grabByIngredient() {
      const min = 0;
      const max = 5;
      const max2 = 12;
      const fetchCategories = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then((data) => data.json());
      const fetchByIngredient = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then((data) => data.json());
      setCategories(fetchCategories.drinks.slice(min, max));
      setBeverageCards(fetchByIngredient.drinks.slice(min, max2));
    }
    if (ingredient && !catSelected) grabByIngredient();
  }, [ingredient, catSelected]);

  function onClick(string) {
    if (catSelected === string) {
      setCatSelected();
    } else {
      setCatSelected(string);
    }
  }

  const parameter = 1;

  if ((beverageCards.length || categories.length) < parameter) return <Loading />;

  const buttonType = checkButton(darkMode);
  const mode = checkMode(darkMode);

  return (
    <div>
      <div className="categories-container">
        <Button
          className={ `category-btn ${mode}` }
          variant={ buttonType }
          onClick={ () => onClick() }
          type="button"
          data-testid="All-category-filter"
        >
          Todas Categorias
        </Button>
        {categories.map((card, index) => (
          <Button
            className={ `category-btn ${mode}` }
            variant={ buttonType }
            data-testid={ `${card.strCategory}-category-filter` }
            onClick={ () => onClick(card.strCategory) }
            key={ index }
            type="button"
          >
            {card.strCategory}
          </Button>
        ))}
      </div>
      <CardDeck
        className="cards-container"
      >
        {beverageCards.map((card, index) => (
          <Link
            key={ index }
            to={ `/bebidas/${card.idDrink}` }
          >
            <Card
              data-testid={ `${index}-recipe-card` }
              className={ `recipe-card card-${mode}` }
            >
              <div className="recipe-image-container">
                <Card.Img
                  data-testid={ `${index}-card-img` }
                  variant="top"
                  src={ card.strDrinkThumb }
                />
              </div>
              <Card.Body
                className="recipe-body"
              >
                <Card.Title
                  className="recipe-title"
                  data-testid={ `${index}-card-name` }
                >
                  { card.strDrink }
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </CardDeck>
    </div>
  );
}

Bebidas.propTypes = {
  history: PropTypes.objectOf(),
  location: PropTypes.objectOf(),
}.isRequired;

export default withRouter(Bebidas);
