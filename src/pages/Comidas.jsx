import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function Comidas(props) {
  const [foodCards, setFoodCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [catSelected, setCatSelected] = useState();

  const { history, location } = props;
  const { ingredient } = location;

  useEffect(() => {
    async function grabFoodItems() {
      const fetched = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then((data) => data.json());
      const fetchCategories = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then((data) => data.json());
      const min = 0;
      const max = 5;
      const max2 = 12;
      setCategories(fetchCategories.meals.slice(min, max));
      setFoodCards(fetched.meals.slice(min, max2));
    }
    if (!catSelected && !ingredient) {
      grabFoodItems();
    }
  }, [ingredient, catSelected]);

  useEffect(() => {
    async function grabByCategory() {
      const fetchByCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catSelected}`)
        .then((data) => data.json());
      const min = 0;
      const max = 12;
      setFoodCards(fetchByCategory.meals.slice(min, max));
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
      const fetchCategories = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then((data) => data.json());
      const fetchByIngredient = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then((data) => data.json());
      setCategories(fetchCategories.meals.slice(min, max));
      setFoodCards(fetchByIngredient.meals.slice(min, max2));
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

  return (
    <div>
      <div>
        <button
          onClick={ () => onClick() }
          type="button"
          data-testid="All-category-filter"
        >
          Todas Categorias
        </button>
        {categories.map((card, index) => (
          <button
            data-testid={ `${card.strCategory}-category-filter` }
            onClick={ () => onClick(card.strCategory) }
            key={ index }
            type="button"
          >
            {card.strCategory}
          </button>
        ))}
      </div>
      <div className="gallery">
        {foodCards.map((card, index) => (
          <div
            tabIndex="0"
            role="button"
            onClick={ () => history.push(`/comidas/${card.idMeal}`) }
            onKeyDown={ () => console.log('a') }
            key={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <p data-testid={ `${index}-card-name` }>{card.strMeal}</p>
            <img
              className="thumb"
              src={ card.strMealThumb }
              alt={ index }
              data-testid={ `${index}-card-img` }
            />
          </div>))}
      </div>
    </div>
  );
}

Comidas.propTypes = {
  history: PropTypes.objectOf(),
  location: PropTypes.objectOf(),
}.isRequired;

export default withRouter(Comidas);
