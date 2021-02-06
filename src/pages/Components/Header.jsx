import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { RecipeContext } from '../../context/RecipeContext';
import SearchBar from './SearchBar';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

import './Header.css';

function Header(props) {
  const { location, history } = props;
  const { pathname } = location;
  const [pagetitle, setPagetitle] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const { darkMode } = useContext(RecipeContext);
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
      <SearchBar />
    </Popover>
  );

  if (!showSearch) {
    searchBar = <div />;
  }

  let mode = '';
  let buttonType = 'light';
  if (darkMode) {
    mode = 'dark-search';
    buttonType = 'dark';
  }

  let searchbttn = (
    <div className={ `profile-button-container ${mode}` }>
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={ searchBar }
      >
        <Button
          variant={ `${buttonType}`}
          className={ `header-button button-${mode}` }
          type="button"
          data-testid="search-top-btn"
          src={ searchIcon }
          onClick={ () => setShowSearch(!showSearch) }
        >
          <svg
            className={ `search-icon icon-${mode}` }
            viewBox="0 0 512.005 512.005"
          >
            <path
              d={ `M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
              S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
              c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
               M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z` }
            />
          </svg>
        </Button>
      </OverlayTrigger>
    </div>
  );
  if ((pathname.includes('explorar')
  && !pathname.includes('area'))
  || pathname === '/perfil'
  || pathname === '/receitas-feitas'
  || pathname === '/receitas-favoritas') {
    searchbttn = <div className="invisible-button" />;
  }

  return (
    <div className={ `header-container ${mode}` }>
      <div className={ `profile-button-container ${mode}` }>
        <Button
          className={ `header-button button-${mode}` }
          variant={ `${buttonType}` }
          type="button"
          data-testid="profile-top-btn"
          src={ profileIcon }
          onClick={ () => history.push('/perfil') }
        >
          <svg
            className={ `profile-icon icon-${mode}` }
            viewBox="0 0 512 512"
          >
            <path
              d={ `M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,
              243.251,404,198.548,404,148	C404,66.393,337.607,0,256,0S108,66.393,108,
              148c0,50.548,25.479,95.251,64.262,121.962 c-36.21,12.495-69.398,33.136-97.281,
              61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,
              96.897,216,216 h40C512,443.62,485.371,379.333,437.02,330.98z M256,
              256c-59.551,0-108-48.448-108-108S196.449,40,256,40 c59.551,0,108,48.448,
              108,108S315.551,256,256,256z` }
            />
          </svg>
        </Button>
      </div>
      <h2
        className={ `header-title ${mode}` }
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
