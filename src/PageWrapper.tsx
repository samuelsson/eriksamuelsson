import React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import '@fontsource/montserrat/latin.css';
import GlobalStyles from './GlobalStyles';
import { darkTheme, lightTheme } from './styles/theme';

const PageWrapper = ({ element }: WrapPageElementBrowserArgs): JSX.Element => (
  <ThemeProvider theme={lightTheme}>
    <>
      <Normalize />
      <GlobalStyles />
      {element}
    </>
  </ThemeProvider>
);

export default PageWrapper;
