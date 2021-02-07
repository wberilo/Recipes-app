import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { RecipeContext } from '../../context/RecipeContext';
import shareIcon from '../../images/shareIcon.svg';
import favoriteIcon from '../../images/blackHeartIcon.svg';
import '../FavoriteRecipes.css';

function grabTop(recipe, index) {
  if (recipe.type === 'bebida') {
    return (
      <Card.Subtitle
        className="text-muted"
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${recipe.alcoholicOrNot} - ${recipe.category}` }
      </Card.Subtitle>
    );
  }
  return (
    <Card.Subtitle
      className="text-muted"
      data-testid={ `${index}-horizontal-top-text` }
    >
      { `${recipe.area} - ${recipe.category}` }
    </Card.Subtitle>);
}

function removeFromFavorites(id, setShownRecipes) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const favoriteFiltered = favoriteRecipes.filter((recipe) => recipe.id !== id);
  setShownRecipes(favoriteFiltered);
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteFiltered));
}

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

function FavoriteCard(props) {
  const { recipe, index, history, setShownRecipes } = props;
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
          >
            <Card.Title
              data-testid={ `${index}-horizontal-name` }
            >
              { recipe.name }
            </Card.Title>
          </a>
          <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
        </div>
        <div className="icon-container">
          <svg
            viewBox="-21 0 512 512"
            className="favor-icon share"
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
            className="favor-icon favor-heart"
            viewBox="0 0 32 29.6"
            src={ favoriteIcon }
            data-testid={ `${index}-horizontal-favorite-btn` }
            onClick={ () => removeFromFavorites(recipe.id, setShownRecipes) }
          >
            <path
              d={ `M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,
              0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
              c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z` }
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

FavoriteCard.propTypes = {
  recipe: PropTypes.objectOf().isRequired,
  index: PropTypes.number.isRequired,
  history: PropTypes.objectOf().isRequired,
  setShownRecipes: PropTypes.func.isRequired,
};

export default withRouter(FavoriteCard);
