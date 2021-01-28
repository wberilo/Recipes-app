import React, { useState } from 'react';
import { Button, Badge, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

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

function DoneCard(props) {
  const { recipe, index, history } = props;
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
      <Card.Img
        onClick={ () => history.push(`/${recipe.type}s/${recipe.id}`) }
        className="thumb"
        src={ recipe.image }
        data-testid={ `${index}-horizontal-image` }
        alt="receita"
      />
      {recipe.tags.map((tag, tagindex) => (
        <Badge
          data-testid={ `${index}-${tag}-horizontal-tag` }
          key={ tagindex }
        >
          { tag }
        </Badge>))}
    </Card>
  );
}

DoneCard.propTypes = {
  recipe: PropTypes.objectOf().isRequired,
  index: PropTypes.number.isRequired,
  history: PropTypes.objectOf().isRequired,
};

export default withRouter(DoneCard);
