import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    background: {
      default: '#F8F8F8',
    },
    list: {
      lightbg: '#e3f2fd',
    },
    landing: {
      bgcolor: '#406CE1',
    },
    error: {
      main: '#F86D70',
      light: '#ffccd2',
      dark: '#ff4649',
      contrastText: '#fff',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500,
      fontSize: '1.75rem',
      color: theme.palette.primary.main,
    },
    body2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 300,
      fontSize: '1.5rem',
      color: theme.palette.primary.main,
    },
  },
});

export { theme };
