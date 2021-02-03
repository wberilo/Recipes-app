import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './InitialExplore.css';

function Profile({ history }) {
  const user = JSON.parse(localStorage.getItem('user'));
  let email = '';
  if (user) {
    email = user.email;
  }
  return (
    <div className="container profile">
      <h1
        data-testid="profile-email"
        className="profile-title"
      >
        {email}
      </h1>
      <Button
        className="profile-btn"
        variant="outline-secondary"
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </Button>
      <Button
        className="profile-btn"
        variant="outline-secondary"
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </Button>
      <Button
        className="profile-btn"
        variant="outline-secondary"
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Sair
      </Button>
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.objectOf().isRequired,
};

export default withRouter(Profile);
