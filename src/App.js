import { ToastContainer } from 'react-toastify';

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
          <ToastContainer autoClose={3000}/>
        </AuthProvider>
      </Layout>
  </ThemeProvider>
  )
}