import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#1976d2",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#fff',
    },
  },
});

export default theme;
