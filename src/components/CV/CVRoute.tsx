import type { Component } from 'solid-js';
import LocaleWrapper from '../LocaleWrapper/LocaleWrapper';
import CV from './CV';

import { ThemeProvider } from "@suid/material/styles";
import theme from './Theme';

const CVRoute: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocaleWrapper>
        <CV />
      </LocaleWrapper>
    </ThemeProvider>
  );
};

export default CVRoute;