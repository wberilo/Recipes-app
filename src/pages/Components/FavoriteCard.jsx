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
            data-testid={ `${index}-horizontal-name` }
          >
            <Card.Title>
              { recipe.name }
            </Card.Title>
          </a>
          <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
        </div>
        <div className="icon-container">
          <Image
            className="icon"
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
          <Image
            className="icon"
            onClick={ () => removeFromFavorites(recipe.id, setShownRecipes) }
            src={ favoriteIcon }
            data-testid={ `${index}-horizontal-favorite-btn` }
            fluid
          />
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
