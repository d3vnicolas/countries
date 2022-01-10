import React from 'react'
import Header from './Components/Header';
import Rotas from './Routes';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './Themes/themes';
import { useGlobal } from './Context/global';


function App() {
  const { theme } = useGlobal();

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
      <Header />
      <Rotas />
    </ThemeProvider>
  );
}

export default App;
