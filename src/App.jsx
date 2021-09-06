import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import Routes from './config/Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import theme from './config/Theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <CssBaseline/>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}
