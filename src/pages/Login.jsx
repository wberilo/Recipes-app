import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { RecipeContext } from '../context/RecipeContext';
import './Login.css';
import { Link } from 'react-router-dom';
import githubIcon from '../images/GitHub-Mark-64px.png';

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
      <a target="_blank" rel="noreferrer" href="https://github.com/wberilo/Recipes-app">
        <img src={ githubIcon } className="githubIcon" href="https://github.com/wberilo/Recipes-app" />
      </a>
    </div>
  );
}

Login.propTypes = {
  history: propTypes.arrayOf(Object).isRequired,
};

export default Login;
