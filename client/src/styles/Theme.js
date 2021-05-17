import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import GlobalStyles from './Global';
import Toggle from '../components/Toggle';
import { useDarkMode } from '../components/UseDarkMode';

const lightTheme = {
  breakpoints: {
    desktop: '2000px',
    laptop: '1200px',
    tablet: '992px',
    mobile: '767px',
  },

  colors: {
    black: '#222831',
    grey: '#393e46',
    teal: '#00adb5',
    white: '#eeeeee',
    yellow: '#fed049',
    red: '#810034',
  },
  shift: {
    html: 'white',
    background: '#ffffff',
    body: '#eeeeee',
    text: '#222831',
    toggleborder: '00adb5',
    button: '222831',
  },
};

const darkTheme = {
  breakpoints: {
    desktop: '2000px',
    laptop: '1200px',
    tablet: '992px',
    mobile: '767px',
  },
  shift: {
    html: 'black',
    background: '#222831',
    body: '#393e46',
    text: '#eeeeee',
    toggleborder: '00adb5',
    button: '393e46',
    bilde: 'url(https://cdn.tek.no/pro/no/current/assets/images/stars.svg)',
    skygge: '0 0 60px 30px #222831',
  },
  colors: {
    black: '#222831',
    grey: '#393e46',
    teal: '#00adb5',
    white: '#eeeeee',
    yellow: '#fed049',
    red: '#810034',
  },
};

const Theme = ({ children }) => {
  const [theme, themeToggler, mounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mounted) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        {children}
      </>
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.object,
};

export default Theme;
