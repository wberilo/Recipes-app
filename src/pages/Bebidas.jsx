import React, { useState, useEffect } from 'react';

function Bebidas() {
  const [beverageCards, setBeverageCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [catSelected, setCatSelected] = useState();

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
    if (!catSelected) {
      grabFoodItems();
    }
  }, [catSelected]);

  useEffect(() => {
    async function grabByCategory() {
      const fetchByCategory = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${catSelected}`)
        .then((data) => data.json());
      console.log('catSelected');
      const min = 0;
      const max = 12;
      setBeverageCards(fetchByCategory.drinks.slice(min, max));
    }
    console.log(catSelected);
    if (catSelected !== undefined) {
      grabByCategory();
    }
  }, [catSelected]);

  return (
    <div>
      <div>
        {categories.map((card, index) => (
          <button
            data-testid={ `${card.strCategory}-category-filter` }
            onClick={ () => setCatSelected(card.strCategory) }
            key={ index }
            type="button"
          >
            {card.strCategory}
          </button>
        ))}
      </div>
      <div className="gallery">
        {beverageCards.map((card, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <p data-testid={ `${index}-card-name` }>{card.strDrink}</p>
            <img
              className="thumb"
              src={ card.strDrinkThumb }
              alt={ index }
              data-testid={ `${index}-card-img` }
            />
          </div>))}
      </div>
    </div>
  );
}

export default Bebidas;
