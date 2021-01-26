import React, { useState, useEffect } from 'react';

function Bebidas() {
  const [beverageCards, setBeverageCards] = useState([]);

  useEffect(() => {
    async function grabFoodItems() {
      const fetched = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((data) => data.json());
      const min = 0;
      const max = 12;
      console.log(fetched.drinks.slice(min, max))
      setBeverageCards(fetched.drinks.slice(min, max));
    }
    grabFoodItems();
  }, []);

  return (
    <div>
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
