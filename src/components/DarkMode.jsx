import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RecipeContext } from '../context/RecipeContext';
import './DarkMode.css';

function DarkMode() {
  const { darkMode, setDarkMode } = useContext(RecipeContext);

  const changeMode = () => {
    if (darkMode) return setDarkMode(false);
    setDarkMode(true);
  };

  let mode = 'Noturno';
  let buttonType = 'outline-secondary';
  let elementsClass = '';
  if (darkMode) {
    mode = 'Diurno';
    buttonType = 'dark';
    elementsClass = 'light';
  }

  return (
    <div className="great-container">
      <div className="dark-mode-container">
        <Button
          variant={ buttonType }
          className={ `dark-mode-button button-${elementsClass}` }
          onClick={ changeMode }
        >
          <svg
            className={ `dark-mode-icon ${elementsClass}` }
            viewBox="0 0 64 64"
          >
            <path
              data-name="layer2"
              d={ `M36.4 20.4a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm0 28a12 12 0 0
              1-10.3-5.8l2.5.3A13.7 13.7 0 0 0 42 25.8a12 12 0 0 1-5.6 22.6z` }
            />
            <path
              data-name="layer1"
              d={ `M36.4 16.4a2 2 0 0 0 2-2v-8a2 2 0 1 0-4 0v8a2 2 0 0 0 2 2zm-20
              20a2 2 0 0 0-2-2h-8a2 2 0 0 0 0 4h8a2 2 0 0 0 2-2zm3-14.1a2 2 0 0 0
              2.8-2.8l-5.7-5.7a2 2 0 0 0-2.8 2.8zM59 13.8a2 2 0 0 0-2.8 0l-5.7 5.7a2
              2 0 1 0 2.8 2.8l5.7-5.7a2 2 0 0 0 0-2.8zM19.4 50.5l-5.7 5.7a2 2 0 1 0
              2.9 2.8l5.7-5.7a2 2 0 1 0-2.8-2.8z` }
            />
          </svg>
          <Card.Title
            className="dark-mode-text"
          >
            { `Modo ${mode}` }
          </Card.Title>
          <div className="dark-mode-icon" />
        </Button>
      </div>
      <div className="show-dark-mode fixed-top" />
    </div>
  );
}

export default DarkMode;
