import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <Card
      style={ {
        display: 'flex',
        borderColor: 'transparent',
        borderRadious: '0',
        paddingTop: '1rem',
      } }
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
