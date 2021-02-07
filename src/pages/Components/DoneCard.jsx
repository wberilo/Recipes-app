import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { RecipeContext } from '../../context/RecipeContext';
import shareIcon from '../../images/shareIcon.svg';
import '../DoneRecipes.css';

// favor-icon favor-heart set-dark-favor
// done-icon favorite dark-favor
// done-icon heart dark-heart

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

const checkFavorite = (event, id, darkMode) => {
  const { target } = event;
  let icon = target;
  const firstParameter = 0;
  let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!favoriteRecipes) favoriteRecipes = [];
  if (icon.className.baseVal.length === firstParameter) icon = target.parentElement;
  if (icon.className.baseVal.includes('heart')) {
    icon.className.baseVal = 'done-icon favorite';
    if (darkMode) icon.className.baseVal = 'done-icon favorite set-dark-favor';
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const recipe = doneRecipes.find((item) => item.id === id);
    const { type, area, category, alcoholicOrNot, name, image } = recipe;
    const newFavorite = {
      id: recipe.id,
      type,
      area,
      category,
      alcoholicOrNot,
      name,
      image,
    };
    favoriteRecipes.push(newFavorite);
    return localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }
  const newFavorites = favoriteRecipes.filter((item) => item.id !== id);
  icon.className.baseVal = 'done-icon heart';
  if (darkMode) icon.className.baseVal = 'done-icon heart dark-heart';
  return localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
};

const clearIngredients = (type, id) => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  let key = 'meals';
  if (type.includes('bebida')) key = 'cocktails';
  inProgressRecipes[`${key}`][`${id}`] = [];
  return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};

const sharePath1 = (
  <path
    d={ `m389.332031 160c-44.09375 0-80-35.882812-80-80s35.90625-80 80-80c44.097657
    0 80 35.882812 80 80s-35.902343 80-80 80zm0-128c-26.453125 0-48 21.523438-48
    48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0` }
  />
)

const sharePath2 = (
  <path
    d={ `m389.332031 512c-44.09375 0-80-35.882812-80-80s35.90625-80 80-80c44.097657
    0 80 35.882812 80 80s-35.902343 80-80 80zm0-128c-26.453125 0-48 21.523438-48
    48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0` }
  />
)

const sharePath3 = (
  <path
    d={ `m80 336c-44.097656 0-80-35.882812-80-80s35.902344-80 80-80 80 35.882812 80
    80-35.902344 80-80 80zm0-128c-26.453125 0-48 21.523438-48 48s21.546875 48 48 48
    48-21.523438 48-48-21.546875-48-48-48zm0 0` }
  />
)

const sharePath4 = (
  <path
    d={ `m135.703125
    240.425781c-5.570313
    0-10.988281-2.902343-13.910156-8.0625-4.375-7.679687-1.707031-17.453125
    5.972656-21.824219l197.953125-112.855468c7.65625-4.414063 17.449219-1.726563
    21.800781 5.976562 4.375 7.679688 1.707031 17.449219-5.972656
    21.824219l-197.953125 112.851563c-2.496094 1.40625-5.203125 2.089843-7.890625
    2.089843zm0 0` }
  />
)

const sharePath5 = (
  <path
    d={ `m333.632812 416.425781c-2.6875
    0-5.398437-.683593-7.894531-2.109375l-197.953125-112.855468c-7.679687-4.371094-10.34375-14.144532-5.972656-21.824219
    4.351562-7.699219 14.125-10.367188 21.804688-5.972657l197.949218
    112.851563c7.679688 4.375 10.347656 14.144531 5.976563 21.824219-2.945313
    5.183594-8.363281 8.085937-13.910157 8.085937zm0 0` }
  />
)

const arrowPath = (
  <path
    d={ `M 7.402344 0.492188 C 4.171875 0.886719 1.351562 3.484375 0.507812 6.855469
    C 0.292969 7.707031 0.222656 9.386719 0.367188 10.292969 C 0.652344 12.15625
    1.492188 13.839844 2.769531 15.121094 C 3.785156 16.125 4.75 16.707031 6.140625
    17.160156 C 6.867188 17.390625 7.089844 17.421875 8.375 17.421875 C 9.664062
    17.421875 9.886719 17.390625 10.613281 17.160156 C 11.488281 16.878906 12.316406
    16.464844 12.980469 16 C 13.511719 15.625 14.730469 14.386719 14.730469 14.234375
    C 14.730469 14.167969 14.601562 14.011719 14.441406 13.894531 L 14.15625 13.683594
    L 13.503906 14.367188 C 13.136719 14.734375 12.582031 15.21875 12.269531 15.429688
    C 9.390625 17.363281 5.503906 16.871094 3.167969 14.28125 C 2.144531 13.144531
    1.609375 12.128906 1.28125 10.640625 C 1.023438 9.550781 1.078125 7.851562
    1.378906 6.808594 C 2.125 4.296875 3.921875 2.421875 6.351562 1.621094 C 6.941406
    1.429688 7.234375 1.398438 8.375 1.398438 C 9.519531 1.398438 9.8125 1.429688
    10.402344 1.621094 C 13.0625 2.5 14.949219 4.644531 15.511719 7.417969 C 15.574219
    7.773438 15.613281 8.09375 15.59375 8.132812 C 15.566406 8.167969 15.117188
    7.976562 14.582031 7.695312 C 13.816406 7.300781 13.585938 7.214844 13.457031
    7.300781 C 13.097656 7.542969 13.21875 7.820312 14.398438 9.648438 C 15.757812
    11.742188 15.804688 11.800781 16.089844 11.761719 C 16.273438 11.742188 16.515625
    11.375 17.453125 9.703125 C 18.078125 8.585938 18.59375 7.628906 18.59375 7.570312
    C 18.59375 7.523438 18.539062 7.398438 18.484375 7.308594 C 18.375 7.164062
    18.28125 7.203125 17.492188 7.675781 C 17.011719 7.964844 16.589844 8.207031
    16.550781 8.207031 C 16.523438 8.207031 16.46875 7.976562 16.433594 7.695312 C
    16.089844 5.050781 14.3125 2.519531 11.921875 1.273438 C 11.296875 0.945312
    10.117188 0.609375 9.25 0.492188 C 8.339844 0.375 8.339844 0.375 7.402344 0.492188
    Z M 7.402344 0.492188` }
  />
)

function DoneCard(props) {
  const { recipe, index, history } = props;
  const { id } = recipe;
  const { darkMode, setShow } = useContext(RecipeContext);

  let iconClass = 'done-icon heart';
  let mode = '';
  let heartMode = '';
  if (darkMode) {
    mode = 'dark-done';
    heartMode = 'dark-heart';
  }

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes) {
    const isFavorite = favoriteRecipes.some((item) => item.id === id);
    if (isFavorite) {
      iconClass = 'done-icon favorite';
      if (darkMode) heartMode = 'set-dark-favor';
    }
  }

  return (
    <div
      className={ `favor-recipe-container cont-${mode}`}
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
          >
            <Card.Title
              className={ `recipe-name name-${mode}` }
              data-testid={ `${index}-horizontal-name` }
            >
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
          <svg
            viewBox="-21 0 512 512"
            className={ `done-icon share set-${mode}` }
            onClick={ () => {
              setShow(true);
              navigator.clipboard.writeText(
                `${window.location.origin}/${recipe.type}s/${recipe.id}`,
              );
            } }
            src={ shareIcon }
            data-testid={ `${index}-horizontal-share-btn` }
          >
            { sharePath1 }
            { sharePath2 }
            { sharePath3 }
            { sharePath4 }
            { sharePath5 }  
          </svg>
          <svg
            className={ `${iconClass} ${heartMode}` }
            viewBox="0 0 32 29.6"
            onClick={ (event) => checkFavorite(event, recipe.id, darkMode) }
          >
            <path
              d={ `M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,
              0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
              c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z` }
            />
          </svg>
          <Link
            to={ `/${recipe.type}s/${recipe.id}/in-progress` }
            onClick={ () => clearIngredients(recipe.type, id) }
          >
            <svg
              className={ `done-icon arrow set-${mode}`}
              viewBox="0 0 19 18"
            >
              { arrowPath }
            </svg>
          </Link>
        </div>
        <div className="badge-container">
          {recipe.tags.map((tag, tagindex) => (
            <Badge
              className={ `badge badge-${mode}` }
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
