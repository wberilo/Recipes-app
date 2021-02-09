import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { RecipeContext } from '../context/RecipeContext';
import './Login.css';

function Login({ history }) {
  const { darkMode } = useContext(RecipeContext);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const checkButton = () => {
    const inputPassword = document.getElementById('password-input').value;
    const inputEmail = document.getElementById('email-input').value;
    const regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const six = 6;
    setButtonDisable(inputPassword.length > six && regex.test(inputEmail));
    setUserEmail(inputEmail);
  };

  const handleButton = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: userEmail }));
    history.push('/comidas');
  };
  let dark = '';
  let buttonType = 'outline-secondary';
  if (darkMode) {
    buttonType = 'dark';
    dark = 'dark';
  }

  return (
    <div className={ `login-container ${dark}` }>
      <svg className="logo" height="250" viewBox="0 0 64 64" width="250" xmlns="http://www.w3.org/2000/svg">
        <g id="package-delivery-food-restaurant">
          <path className={ `path1-${dark}` } d="m14 17h36v44h-36z" fill="#5bcbfa" />
          <circle className={ `circle-${dark}` } cx="32" cy="39" fill="#ffda44" r="18" />
          <path className={ `path2-${dark}` } d="m61 46v4h-2-9v-4h8z" fill="#c0ab91" />
          <path className={ `g1-${dark}` } d="m59 28-2 11h-1-6v-11z" fill="#957856" />
          <path className={ `path2-${dark}` } d="m61 24v4h-2-9v-4h8z" fill="#c0ab91" />
          <path className={ `path4-${dark}` } d="m56 17 2 7h-8v-7z" fill="#ebe5dd" />
          <path className={ `path4-${dark}` } d="m56 39 2 7h-8v-7z" fill="#e9e9ea" />
          <g className={ `g1-${dark}` } fill="#957856">
            <path d="m59 50-2 11h-7v-11z" />
            <path d="m14 50v11h-7l-2-11z" />
            <path d="m14 28v11h-6-1l-2-11z" />
          </g>
          <path className={ `path4-${dark}` } d="m14 39v7h-8l2-7z" fill="#e9e9ea" />
          <path className={ `path4-${dark}` } d="m14 17v7h-8l2-7z" fill="#ebe5dd" />
          <path className={ `path2-${dark}` } d="m14 46v4h-9-2v-4h3z" fill="#c0ab91" />
          <path className={ `path2-${dark}` } d="m14 24v4h-9-2v-4h3z" fill="#c0ab91" />
          <path
            className={ `path6-${dark}` }
            d="m47 5v12h-6v-7a2.006 2.006 0 0 0 -2-2h-14a2.006
             2.006 0 0 0 -2 2v7h-6v-12a2.006 2.006 0 0 1 2-2h26a2.006 2.006 0 0 1 2 2z"
            fill="#48a3d2"
          />
          <path d="m41 42v8h-4l1-9z" fill="#e9e9ea" />
          <path
            d="m27.08 39.79.92 10.21h-4l.92-10.21a2.882 2.882 0 0 0 2.16 0z"
            fill="#e9e9ea"
          />
          <path
            className={ `path7-${dark}` }
            d="m41 42-6-2v-4a6 6 0 0 1 6-6z"
            fill="#fff"
          />
          <path
            className={ `path7-${dark}` }
            d="m28 30v4h-1v-4h-2v4h-1v-4h-2v6a4 4 0 0 0 8 0v-6z"
            fill="#fff"
          />
        </g>
      </svg>
      <Form.Control
        className={ `login-input ${dark}` }
        size="lg"
        placeholder="E-mail"
        type="email"
        data-testid="email-input"
        id="email-input"
        onChange={ checkButton }
      />
      <Form.Check.Label htmlFor="email-input" />
      <Form.Control
        className={ `password-input ${dark}` }
        size="lg"
        placeholder="Password"
        type="password"
        data-testid="password-input"
        id="password-input"
        onChange={ checkButton }
      />
      <Form.Check.Label htmlFor="password-input" />
      <Button
        className={ `login-btn ${dark}` }
        variant={ buttonType }
        size="lg"
        type="submit"
        data-testid="login-submit-btn"
        disabled={ !buttonDisable }
        onClick={ handleButton }
      >
        Entrar
      </Button>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/wberilo/Recipes-app">
        <svg className="logo" height="128" viewBox="0 0 16 16" version="1.1" width="128" aria-hidden="true">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
          </path>
        </svg>
      </a>
    </div>
  );
}

Login.propTypes = {
  history: propTypes.arrayOf(Object).isRequired,
};

export default Login;
