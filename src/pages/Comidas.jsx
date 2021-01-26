import React, { useEffect, useState } from 'react';

function Comidas() {
  const [foodCards, setFoodCards] = useState([]);

  useEffect(() => {
    async function grabFoodItems() {
      const fetched = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then((data) => data.json());
      console.log(fetched.meals);
      const min = 0;
      const max = 12;
      setFoodCards(fetched.meals.slice(min, max));
    }
    grabFoodItems();
  }, []);

  return (
    <div>
      <p>Comidas</p>
      {foodCards.map((card, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
        >
          <p data-testid={ `${index}-card-name` }>{card.strMeal}</p>
          <img
            src={ card.strMealThumb }
            alt={ index }
            data-testid={ `${index}-card-img` }
          />
        </div>))}
    </div>
  );
}

export default Comidas;
