import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { RecipeContext } from '../context/RecipeContext';
import './InitialExplore.css';

function InitialExplore() {
  const { darkMode } = useContext(RecipeContext);

  let buttonType = 'outline-secondary'
  let mode = '';
  if (darkMode) {
    buttonType = 'dark';
    mode = 'dark-explore';
  }

  return (
    <div className="container">
      <Link to="/explorar/comidas">
        <Button
          className={ `explore-btn ${mode}` }
          data-testid="explore-food"
          variant={ buttonType }
          size="lg"
        >
          Explorar Comidas
        </Button>
      </Link>
      <Link to="/explorar/bebidas">
        <Button
          className={ `explore-btn ${mode}` }
          data-testid="explore-drinks"
          variant={ buttonType }
          size="lg"
        >
          Explorar Bebidas
        </Button>
      </Link>
    </div>
  );
}

export default InitialExplore;
