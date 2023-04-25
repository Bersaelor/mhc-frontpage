import type { Component } from 'solid-js';

import { ThemeProvider } from "@suid/material/styles";
import AppRoutes from '../Routes/Routes';

import theme from '../../Theme';

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
