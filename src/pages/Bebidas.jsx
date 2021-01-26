import React, { useState, useEffect } from 'react';

function Bebidas() {
  const [beverageCards, setBeverageCards] = useState([]);
  const [categories, setCategories] = useState([]);

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
    grabFoodItems();
  }, []);

  return (
    <div>
      <div>
        {categories.map((card, index) => (
          <button
            data-testid={ `${card.strCategory}-category-filter` }
            key={ index }
            type="button"
          >
            {card.strCategory}
          </button>
        ))}
      </div>
      {beverageCards.map((card, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
        >
          <p data-testid={ `${index}-card-name` }>{card.strDrink}</p>
          <img
            src={ card.strDrinkThumb }
            alt={ index }
            data-testid={ `${index}-card-img` }
          />
        </div>))}
    </div>
  );
}

export default Bebidas;
