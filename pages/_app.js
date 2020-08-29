import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'

import theme from '../theme/theme';

import MenuAppBar from '../components/layout/MenuAppBar';
import NavBar from '../components/layout/NavBar';

export default function MyApp(props) {
  
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My Book Library</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuAppBar />
        <Container maxWidth="md">
          <NavBar />
            <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
