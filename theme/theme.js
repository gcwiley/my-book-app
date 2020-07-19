import { createMuiTheme } from '@material-ui/core/styles';

// Create a custom theme for this app.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans, sans-serif'
    ]
  },
  palette: {
    primary: {
      light: '#4791db',
      main: '#1976d2'
    }
  }
});

export default theme;