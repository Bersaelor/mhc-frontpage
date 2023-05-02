import { createTheme } from "@suid/material/styles";

export const mobileQuery = `@media only screen and (max-width: 480px)`;
export const desktopQuery = `@media only screen and (min-width: 600px) and (min-height: 600px)`;

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
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: '#c1dff5'
    },
    secondary: {
      main: "#851948",
    },
    text: {
      primary: '#ffffff',
      secondary: '#8e8e8e'
    },
    background: {
      default: '#e2f5f700',
      paper: '#ffffff',
      footer: '#c8d7d2',
    },
  },
  mobileQuery: mobileQuery,
  desktopQuery: desktopQuery
} as any);

export default theme;