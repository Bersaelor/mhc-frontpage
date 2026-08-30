import type { Component } from 'solid-js';
import CV from './CV';

import { ThemeProvider } from "@suid/material/styles";
import theme from './Theme';

const CVRoute: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <CV />
    </ThemeProvider>
  );
};

export default CVRoute;