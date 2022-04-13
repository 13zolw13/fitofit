import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    background: {
      default: '#F8F8F8',
    },
    list: {
      lightbg: '#e3f2fd',
    },
  }
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: '2rem',
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500,
      fontSize: '1.75rem',
      color: theme.palette.primary.main,
    },
  },
});

export { theme };
