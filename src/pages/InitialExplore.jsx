import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './InitialExplore.css';

function InitialExplore() {
  return (
    <div className="container">
      <Link to="/explorar/comidas">
        <Button
          className="explore-btn"
          data-testid="explore-food"
          variant="outline-secondary"
          size="lg"
        >
          Explorar Comidas
        </Button>
      </Link>
      <Link to="/explorar/bebidas">
        <Button
          className="explore-btn"
          data-testid="explore-drinks"
          variant="outline-secondary"
          size="lg"
        >
          Explorar Bebidas
        </Button>
      </Link>
    </div>
  );
}

export default InitialExplore;
