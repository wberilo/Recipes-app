import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Explore({ history }) {
  const { location } = history;
  const { pathname } = location;

  const renderOrigin = () => (
    <Link to="/explorar/comidas/area">
      <Button
        data-testid="explore-by-area"
        variant="outline-secondary"
        size="lg"
      >
        Por Local de Origem
      </Button>
    </Link>
  );
  // incluir header
  // implementar link do botão Me Surpreenda!
  return (
    <div>
      <Link to={ `${pathname}/ingredientes` }>
        <Button
          data-testid="explore-by-ingredient"
          variant="outline-secondary"
          size="lg"
        >
          Por Ingredientes
        </Button>
      </Link>
      { pathname === '/explorar/comidas' && renderOrigin() }
      <Link to="/">
        <Button
          data-testid="explore-surprise"
          variant="outline-secondary"
          size="lg"
        >
          Me Surpreenda!
        </Button>
      </Link>
    </div>
  );
}

export default Explore;

Explore.propTypes = {
  history: propTypes.objectOf(propTypes.object),
}.isRequired;
