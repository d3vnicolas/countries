import { ThemeProvider } from 'styled-components';
import { light, dark } from './Themes/themes';
import Template from './Components/Layout';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Template />
    </ThemeProvider>
  );
}

export default App;
