import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// Material UI Components
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';

// Layout Components
import MenuAppBar from '../components/layout/MenuAppBar';
import Copyright from '../components/layout/Copyright';

export default function MyApp(props) {
  
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My Book Library</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MenuAppBar />
          <Component {...pageProps} />
        <Copyright />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
