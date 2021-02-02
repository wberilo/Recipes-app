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
            data-testid="drinks-bottom-btn"
          >
            <img src={ DrinkImage } alt="drink" />
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
            data-testid="explore-bottom-btn"
          >
            <img src={ ExploreImage } alt="explore" />
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
            data-testid="food-bottom-btn"
          >
            <img src={ FoodImage } alt="food" />
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
