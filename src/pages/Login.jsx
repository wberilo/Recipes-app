import React, { useState } from 'react';
import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';

function Login({ history }) {
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

  return (
    <div className="login-container">
      <Form.Control
        className="login-input"
        size="lg"
        placeholder="E-mail"
        type="email"
        data-testid="email-input"
        id="email-input"
        onChange={ checkButton }
      />
      <Form.Check.Label htmlFor="email-input" />
      <Form.Control
        className="password-input"
        size="lg"
        placeholder="Password"
        type="password"
        data-testid="password-input"
        id="password-input"
        onChange={ checkButton }
      />
      <Form.Check.Label htmlFor="password-input" />  
      <Button
        className="login-btn"
        variant="outline-secondary"
        size="lg"
        type="submit"
        data-testid="login-submit-btn"
        disabled={ !buttonDisable }
        onClick={ handleButton }
      >
        Entrar
      </Button>
    </div>
  );
}

Login.propTypes = {
  history: propTypes.arrayOf(Object).isRequired,
};

export default Login;
