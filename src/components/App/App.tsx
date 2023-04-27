import type { Component } from 'solid-js';

import { ThemeProvider } from "@suid/material/styles";
import AppRoutes from '../Routes/Routes';
import Stars from '../Stars/Stars';
import theme from '../../Theme';

const App: Component = () => {
  return <>
    <Stars />
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </>;
};

export default App;
