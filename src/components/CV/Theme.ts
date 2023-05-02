import { createTheme } from "@suid/material/styles";

const theme = createTheme({
  typography: {
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 300,
    },
  },
  palette: {
    primary: {
      main: '#078294'
    },
    secondary: {
      main: "#851948",
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