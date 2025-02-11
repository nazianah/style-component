import { ThemeProvider} from 'styled-components';
import Container from './components/Container';
import Header from './components/Header';
import GlobalStyles from './components/Global';
import Footer from './components/Footer';
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container/>
        <Footer/>
       
      </>
    </ThemeProvider>
  )
};

export default App;

