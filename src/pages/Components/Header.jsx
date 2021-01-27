import React from 'react';
import { Button } from 'react-bootstrap';
import profileIcon from '../../images/profileIcon.svg';

function Header() {
  return (
    <div>
      <Button
        type="button"
        data-testid="profile-top-btn"
        src={ profileIcon }
      />
      <h2 data-testid="page-title">Page title</h2>
      <Button
        type="button"
        data-testid="search-top-btn"
      >
        Search
      </Button>
    </div>
  );
}

export default Header;
