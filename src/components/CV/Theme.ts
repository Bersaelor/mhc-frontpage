import { createTheme } from "@suid/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h4: {
      fontSize: '1.45rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.05rem',
      fontWeight: 300,
    },
    body1: {
      fontSize: '0.9rem',
    },
    body2: {
      fontSize: '0.75rem',
    },
  },
  palette: {
    primary: {
      main: '#078294'
    },
    secondary: {
      main: "#506fc0",
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff'
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      footer: '#c8d7d2',
    },
  }
} as any);

export default theme;