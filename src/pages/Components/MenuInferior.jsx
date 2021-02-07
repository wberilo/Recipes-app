import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FoodImage from '../../images/mealIcon.svg';
import DrinkImage from '../../images/drinkIcon.svg';
import ExploreImage from '../../images/exploreIcon.svg';
import { RecipeContext } from '../../context/RecipeContext';
import {
  compassPath1,
  compassPath2,
  compassPath3,
  compassPath4,
  foodPath1,
  foodPath2,
  foodPath3,
} from './DoneShareIcon';
import {
  drinkPath1,
  drinkPath2,
  drinkPath3,
  drinkPath4,
  drinkPath5,
} from './drinkIcon';
import './Footer.css';

function MenuInferior({ location }) {
  const { pathname } = location;
  const { darkMode } = useContext(RecipeContext);

  let mode = '';
  let buttonType = 'light';
  if (darkMode) {
    mode = 'dark-footer';
    buttonType = 'dark';
  }

  const parameter = 8;

  if (pathname.includes('explorar') || pathname.includes('perfil')
    || pathname.length === parameter) {
    return (
      <div data-testid="footer" className={ `footer-container ${mode}` }>
        <Link
          className={ `footer-button-link ${mode}` }
          to="/bebidas"
        >
          <Button
            variant={ buttonType }
            className={ `footer-button button-${mode}` }
            type="button"
            data-testid="drinks-bottom-btn"
            src={ DrinkImage }
          >
            <svg
              className={ `drink-icon icon-${mode}` }
              viewBox="0 0 511.999 511.999"
            >
              { drinkPath1 }
              { drinkPath2 }
              { drinkPath3 }
              { drinkPath4 }
              { drinkPath5 }
            </svg>
          </Button>
        </Link>
        <Link
          className={ `footer-button-link ${mode}` }
          to="/explorar"
        >
          <Button
            variant={ buttonType }
            className={ `footer-button button-${mode}` }
            type="button"
            src={ ExploreImage }
            data-testid="explore-bottom-btn"
          >
            <svg
              className={ `explore-icon icon-${mode}` }
              viewBox="0 0 512.002 512.002"
            >
              { compassPath1 }
              { compassPath2 }
              { compassPath3 }
              { compassPath4 }
            </svg>
          </Button>
        </Link>
        <Link
          className={ `footer-button-link ${mode}` }
          to="/comidas"
        >
          <Button
            variant={ buttonType }
            className={ `footer-button button-${mode}` }
            type="button"
            src={ FoodImage }
            data-testid="food-bottom-btn"
          >
            <svg
              className={ `food-icon icon-${mode}` }
              viewBox="0 -1 511.99871 511"
            >
              { foodPath1 }
              { foodPath2 }
              { foodPath3 }
            </svg>
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
