import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import favoriteIcon from '../../images/blackHeartIcon.svg';

function grabTop(recipe, index) {
  if (recipe.type === 'bebida') {
    return (
      <p data-testid={ `${index}-horizontal-top-text` }>
        { `${recipe.alcoholicOrNot} - ${recipe.category}` }
      </p>
    );
  }
  return (
    <p data-testid={ `${index}-horizontal-top-text` }>
      { `${recipe.area} - ${recipe.category}` }
    </p>);
}

function removeFromFavorites(id, setShownRecipes) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const favoriteFiltered = favoriteRecipes.filter((recipe) => recipe.id !== id);
  setShownRecipes(favoriteFiltered);
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteFiltered));
}

function FavoriteCard(props) {
  const { recipe, index, history, setShownRecipes } = props;
  const [showCopied, setShowCopied] = useState(false);
  let shareComponent = <img alt="share img" src={ shareIcon } />;
  if (showCopied) {
    shareComponent = 'Link copiado!';
  }
  return (
    <Card key={ index }>
      { grabTop(recipe, index) }
      <a
        href={ `/${recipe.type}s/${recipe.id}` }
        data-testid={ `${index}-horizontal-name` }
      >
        { recipe.name }
      </a>
      <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
      <Button
        onClick={ () => {
          setShowCopied(true);
          navigator.clipboard.writeText(
            `${window.location.origin}/${recipe.type}s/${recipe.id}`,
          );
        } }
        src={ shareIcon }
        data-testid={ `${index}-horizontal-share-btn` }
      >
        { shareComponent }
      </Button>
      <Button
        onClick={ () => removeFromFavorites(recipe.id, setShownRecipes) }
        src={ favoriteIcon }
        data-testid={ `${index}-horizontal-favorite-btn` }
      >
        <img alt="favorite img" src={ favoriteIcon } />
      </Button>
      <Card.Img
        onClick={ () => history.push(`/${recipe.type}s/${recipe.id}`) }
        className="thumb"
        src={ recipe.image }
        data-testid={ `${index}-horizontal-image` }
        alt="receita"
      />
    </Card>
  );
}

FavoriteCard.propTypes = {
  recipe: PropTypes.objectOf().isRequired,
  index: PropTypes.number.isRequired,
  history: PropTypes.objectOf().isRequired,
  setShownRecipes: PropTypes.func.isRequired,
};

export default withRouter(FavoriteCard);
