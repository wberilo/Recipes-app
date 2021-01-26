import React, { useEffect, useState } from 'react';

function Comidas() {
  const [foodCards, setFoodCards] = useState([]);
  const [categories, setCategories] = useState([]);

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
