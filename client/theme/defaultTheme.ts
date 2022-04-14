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
    primary: {
      main: '#406CE1',
      light: '#e3f2fd',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    mainColor: {
      lightBorder: '#bdcfff',
      lightBg: '#e3f2fd',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontFamily: "'Montserrat', 'Roboto', sans-serif",
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
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500,
      fontSize: '1.35rem',
      color: theme.palette.primary.main,
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500,
      fontSize: '1.15rem',
      textTransform: 'uppercase',
      color: theme.palette.primary.main,
    },
    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 300,
      fontSize: '1rem',
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
