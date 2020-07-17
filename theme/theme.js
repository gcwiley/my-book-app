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
      main: '#1976d2',
      dark: '#115293'
    },
    secondary: {
      light: '#e33371',
      main: '#dc004e',
      dark: '#9a0036'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f'
    },
    background: {
      default: "fff",
    },
  },
});

export default theme;