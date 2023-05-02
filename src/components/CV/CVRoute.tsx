import type { Component } from 'solid-js';
import LocaleWrapper from '../LocaleWrapper/LocaleWrapper';
import CV from './CV';

import { ThemeProvider } from "@suid/material/styles";
import theme from './Theme';

const CVRoute: Component = () => {
  return (
    <LocaleWrapper>
      <ThemeProvider theme={theme}>
        <CV />
      </ThemeProvider>
    </LocaleWrapper>
  );
};

export default CVRoute;