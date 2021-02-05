import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { RecipeContext } from '../../context/RecipeContext';
import shareIcon from '../../images/shareIcon.svg';
import arrowIcon from '../../images/arrowIcon.svg';
import '../DoneRecipes.css';

function grabTop(recipe, index) {
  if (recipe.type === 'bebida') {
    return (
      <Card.Subtitle
        className="recipe-subtitle text-muted"
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${recipe.alcoholicOrNot} - ${recipe.category}` }
      </Card.Subtitle>
    );
  }
  return (
    <Card.Subtitle
      className="recipe-subtitle text-muted"
      data-testid={ `${index}-horizontal-top-text` }
    >
      { `${recipe.area} - ${recipe.category}` }
    </Card.Subtitle>);
}

const notFavorite = (
  <svg
    className="done-icon heart"
    viewBox="0 0 32 29.6"
    onClick={ (event) => checkFavorite(event) }
  >
    <path
      d={ `M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,
      0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
      c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z` }
    />
  </svg>
)

const checkFavorite = ({ target }) => {
  let icon = target;
  const firstParameter = 0;
  if (icon.className.baseVal.length === firstParameter) icon = target.parentElement;
  if (icon.className.baseVal.includes('heart')) {
    return icon.className.baseVal = 'done-icon favorite';
  };
  icon.className.baseVal = 'done-icon heart';
};

function DoneCard(props) {
  const { recipe, index, history } = props;
  const { setShow } = useContext(RecipeContext);
  return (
    <div
      className="favor-recipe-container"
      key={ index }
    >
      <div
        className="favor-image-container"
      >
        <Image
          onClick={ () => history.push(`/${recipe.type}s/${recipe.id}`) }
          className="thumb"
          src={ recipe.image }
          data-testid={ `${index}-horizontal-image` }
          alt="receita"
          fluid
        />
      </div>
      <div className="text-icon-container">
        <div className="text-container">
          { grabTop(recipe, index) }
          <a
            href={ `/${recipe.type}s/${recipe.id}` }
            data-testid={ `${index}-horizontal-name` }
          >
            <Card.Title className="recipe-name">
              { recipe.name }
            </Card.Title>
          </a>
          <Card.Subtitle
            className="done-date"
            data-testid={ `${index}-horizontal-done-date` }
          >
            { `Feito em: ${recipe.doneDate}` }
          </Card.Subtitle>
        </div>
        <div className="icons-container">
          <Image
            className="done-icon share"
            onClick={ () => {
              setShow(true);
              navigator.clipboard.writeText(
                `${window.location.origin}/${recipe.type}s/${recipe.id}`,
              );
            } }
            src={ shareIcon }
            data-testid={ `${index}-horizontal-share-btn` }
            fluid
          />
          { notFavorite }
          <Image
            className="done-icon arrow"
            onClick={ null }
            src={ arrowIcon }
            fluid
          />
        </div>
        <div className="badge-container">
          {recipe.tags.map((tag, tagindex) => (
            <Badge
              className="badge"
              data-testid={ `${index}-${tag}-horizontal-tag` }
              key={ tagindex }
              pill
              variant="secondary"
            >
              { `#${tag}` }
            </Badge>))}
        </div>
      </div>
    </div>
  );
}

DoneCard.propTypes = {
  recipe: PropTypes.objectOf().isRequired,
  index: PropTypes.number.isRequired,
  history: PropTypes.objectOf().isRequired,
};

export default withRouter(DoneCard);
