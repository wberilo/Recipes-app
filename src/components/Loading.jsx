import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <Card style={ { display: 'flex' } }>
      <Card.Title>Carregando...</Card.Title>
      <div style={ { alignSelf: 'center' } }>
        <Spinner animation="border" />
      </div>
    </Card>
  );
}

export default Loading;
