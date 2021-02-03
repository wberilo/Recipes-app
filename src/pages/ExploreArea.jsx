import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Loading } from '../components';
import './ExploreArea.css';

function ExploreArea({ location }) {
  const [foodCards, setFoodCards] = useState([]);
  const [areas, setAreas] = useState([]);
  const [areaSelected, setAreaSelected] = useState();

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

  if (pathname.includes('bebida')) return <h1>Not Found</h1>;

  const parameter = 1;

  if ((foodCards.length || areas.length) < parameter) return <Loading />;

  return (
    <div>
      <Form>
        <Form.Group
          className="categories-container"
        >
          <Form.Control
            as="select"
            data-testid="explore-by-area-dropdown"
            onChange={ (event) => onClick(event.target.value) }
            custom
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
          </Form.Control>
        </Form.Group>
      </Form>
      <CardDeck
        className="cards-container"
      >
        {foodCards.map((card, index) => (
          <Link
            key={ index }
            to={ `/comidas/${card.idMeal}` }
          >
            <Card
              data-testid={ `${index}-recipe-card` }
              className="recipe-card"
            >
              <div className="recipe-image-container">
                <Card.Img
                  data-testid={ `${index}-card-img` }
                  variant="top"
                  src={ card.strMealThumb }
                />
              </div>
              <Card.Body
                className="recipe-body"
              >
                <Card.Title
                  className="recipe-title"
                  data-testid={ `${index}-card-name` }
                >
                  { card.strMeal }
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </CardDeck>
    </div>
  );
}

ExploreArea.propTypes = {
  history: PropTypes.objectOf(),
  location: PropTypes.objectOf(),
}.isRequired;

export default withRouter(ExploreArea);
