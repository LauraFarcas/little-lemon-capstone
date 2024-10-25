import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
