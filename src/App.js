import GlobalStyles from './styles/GlobalStyles';
import ThemeProvider from './hooks/theme';
import Layout from './Layout';

import Routes from './Router';

export const App = () => {

  return(
    <ThemeProvider>
      <Layout>
        <GlobalStyles/>
        <Routes />
      </Layout>
  </ThemeProvider>
  )
}