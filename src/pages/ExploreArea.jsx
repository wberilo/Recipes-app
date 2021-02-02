import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function ExploreArea(props) {
  const [foodCards, setFoodCards] = useState([]);
  const [areas, setAreas] = useState([]);
  const [areaSelected, setAreaSelected] = useState();

  const { history, location } = props;
  const { pathname } = location;

  useEffect(() => {
    async function grabFoodItems() {
      const fetched = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then((data) => data.json());
      const fetchAreas = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then((data) => data.json());
      const min = 0;
      const max = 12;
      setAreas(fetchAreas.meals);
      setFoodCards(fetched.meals.slice(min, max));
    }
    if (!areaSelected) {
      grabFoodItems();
    }
  }, [areaSelected]);

  useEffect(() => {
    async function grabByArea() {
      const fetchByArea = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaSelected}`)
        .then((data) => data.json());
      const min = 0;
      const max = 12;
      setFoodCards(fetchByArea.meals.slice(min, max));
    }
    if (areaSelected) {
      grabByArea();
    }
  }, [areaSelected]);

  function onClick(string) {
    if (areaSelected === string) {
      setAreaSelected();
    } else {
      setAreaSelected(string);
    }
  }

  console.log(areas);

  if (pathname.includes('bebida')) return <h1>Not Found</h1>;

  return (
    <div>
      <div>
        <select
          data-testid="explore-by-area-dropdown"
          onChange={ (event) => onClick(event.target.value) }
        >
          <option
            value=""
            data-testid="All-option"
          >
            All
          </option>
          { areas.map((area, index) => (
            <option
              key={ index }
              value={ area.strArea }
              data-testid={ `${area.strArea}-option` }
            >
              {area.strArea}
            </option>))}
        </select>
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

ExploreArea.propTypes = {
  history: PropTypes.objectOf(),
  location: PropTypes.objectOf(),
}.isRequired;

export default withRouter(ExploreArea);
