import { createTheme } from "@suid/material/styles";

export const mobileQuery = `@media only screen and (max-width: 480px)`;
export const desktopQuery = `@media only screen and (min-width: 600px) and (min-height: 600px)`;

const theme = createTheme({
  typography: {
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#ef2b63'
    },
    secondary: {
      main: "#851948",
    },
    text: {
      primary: "#232323",
      secondary: '#8e8e8e'
    },
    background: {
      default: '#ffffff',
    },
  },
  mobileQuery: mobileQuery,
  desktopQuery: desktopQuery
} as any);

export default theme;