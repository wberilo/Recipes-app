import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import './Header.css';

function Header(props) {
  const { location, history } = props;
  const { pathname } = location;
  const [pagetitle, setPagetitle] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    switch (pathname) {
    case '/bebidas':
      setPagetitle('Bebidas');
      break;
    case '/comidas':
      setPagetitle('Comidas');
      break;
    case '/explorar':
      setPagetitle('Explorar');
      break;
    case '/explorar/comidas':
      setPagetitle('Explorar Comidas');
      break;
    case '/explorar/bebidas':
      setPagetitle('Explorar Bebidas');
      break;
    case '/explorar/comidas/ingredientes':
      setPagetitle('Explorar Ingredientes');
      break;
    case '/explorar/bebidas/ingredientes':
      setPagetitle('Explorar Ingredientes');
      break;
    case '/explorar/comidas/area':
      setPagetitle('Explorar Origem');
      break;
    case '/explorar/bebidas/area':
      setPagetitle('Explorar Origem');
      break;
    case '/receitas-feitas':
      setPagetitle('Receitas Feitas');
      break;
    case '/receitas-favoritas':
      setPagetitle('Receitas Favoritas');
      break;
    case '/perfil':
      setPagetitle('Perfil');
      break;
    default:
      break;
    }
  }, [pathname]);
  if (pathname === '/'
  || (pathname.includes('/comidas/') && !pathname.includes('/ingredientes')
  && !pathname.includes('area'))
  || (pathname.includes('/bebidas/') && !pathname.includes('/ingredientes')
  && !pathname.includes('area'))) {
    return <div />;
  }

  let searchBar = (
    <Popover>
      <input
        className="header-input"
        data-testid="search-input"
      />
    </Popover>
  );

  if (!showSearch) {
    searchBar = <div />;
  }

  let searchbttn = (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={ searchBar }
    >
      <Button
        variant="light"
        className="header-button"
        type="button"
        data-testid="search-top-btn"
        src={ searchIcon }
        onClick={ () => setShowSearch(!showSearch) }
      >
        <img src={ searchIcon } alt="profile icon" />
      </Button>
    </OverlayTrigger>
  );
  if ((pathname.includes('explorar')
  && !pathname.includes('area'))
  || pathname === '/perfil'
  || pathname === '/receitas-feitas'
  || pathname === '/receitas-favoritas') {
    searchbttn = <div className="invisible-button" />;
  }

  return (
    <div className="header-container">
      <div className="profile-button-container">
        <Button
          className="header-button"
          variant="light"
          type="button"
          data-testid="profile-top-btn"
          src={ profileIcon }
          onClick={ () => history.push('/perfil') }
        >
          <img src={ profileIcon } alt="profile icon" />
        </Button>
      </div>
      <h2
        className="header-title"
        data-testid="page-title"
      >
        {pagetitle}
      </h2>
      {searchbttn}
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.objectOf().isRequired,
  history: PropTypes.objectOf().isRequired,
};

export default withRouter(Header);
