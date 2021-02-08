import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { RecipeContext } from '../context/RecipeContext';
import './Loading.css';

function Loading() {
  const { darkMode } = useContext(RecipeContext);

  let mode = '';

  if (darkMode) mode = 'dark-loading';

  return (
    <Card
      className={ `loading-container ${mode}` }
    >
      <Card.Title
        style={ { alignSelf: 'center' } }
      >
        Carregando...
      </Card.Title>
      <div style={ { alignSelf: 'center' } }>
        <Spinner animation="border" />
      </div>
    </Card>
  );
}

export default Loading;
