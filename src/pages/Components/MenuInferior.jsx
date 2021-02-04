import React from 'react';
import propTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FoodImage from '../../images/mealIcon.svg';
import DrinkImage from '../../images/drinkIcon.svg';
import ExploreImage from '../../images/exploreIcon.svg';
import './Footer.css';

function MenuInferior({ location }) {
  const { pathname } = location;

  const parameter = 8;

  if (pathname.includes('explorar') || pathname.includes('perfil')
    || pathname.length === parameter) {
    return (
      <div data-testid="footer" className="footer-container">
        <Link
          className="footer-button-link"
          to="/bebidas"
        >
          <Button
            variant="light"
            className="footer-button"
            type="button"
          >
            <img
              data-testid="drinks-bottom-btn"
              src={ DrinkImage }
              alt="drink"
            />
          </Button>
        </Link>
        <Link
          className="footer-button-link"
          to="/explorar"
        >
          <Button
            variant="light"
            className="footer-button"
            type="button"
          >
            <img
              src={ ExploreImage }
              alt="explore"
              data-testid="explore-bottom-btn"
            />
          </Button>
        </Link>
        <Link
          className="footer-button-link"
          to="/comidas"
        >
          <Button
            variant="light"
            className="footer-button"
            type="button"
          >
            <img
              src={ FoodImage }
              alt="food"
              data-testid="food-bottom-btn"
            />
          </Button>
        </Link>
      </div>
    );
  }
  return null;
}

export default withRouter(MenuInferior);

MenuInferior.propTypes = {
  location: propTypes.objectOf(),
}.isRequired;
