import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { dark } from './styles/themes/dark'

import Routes from './Router';

export const App = () => {
  return(
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles/>
        <Routes />
      </ThemeProvider>
    </>
  )
}