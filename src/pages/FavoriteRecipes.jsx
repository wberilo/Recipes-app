import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import DoneCard from './Components/DoneCard';

function FavoriteRecipes() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <div>
      <p>AAAAAAAAAAAAAAAAA</p>
      { favoriteRecipes.map((recipe, index) => <DoneCard recipe={recipe} index={index}></DoneCard>)}
    </div>);
}

FavoriteRecipes.propTypes = {
};

export default withRouter(FavoriteRecipes);
