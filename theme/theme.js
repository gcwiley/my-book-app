import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';

// Create a custom theme for this app.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue.A700,
      light: blue.A200,
    },
    secondary: {
      main: '#e3f2fd',
      light: '#0044ff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "fff",
    },
  },
});

export default theme;