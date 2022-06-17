import GlobalStyles from './styles/GlobalStyles';
import ThemeProvider from './hooks/theme';
import Layout from './Layout';

import Routes from './Router';
import AuthProvider from './hooks/auth';

export const App = () => {

  return(
    <ThemeProvider>
      <Layout>
        <AuthProvider>
          <GlobalStyles/>
          <Routes />
        </AuthProvider>
      </Layout>
  </ThemeProvider>
  )
}