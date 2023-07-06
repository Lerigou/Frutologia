import './App.css';
import Home from './Pages/Home/home';
import Purpose from './Pages/Purpose/purpose';
import Product from './Pages/Product/product';
import Footer from './Pages/Footer/footer';
import Faq from './Pages/Faq/faq';
import Menu from './Components/Menu/menu';

export default function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Purpose />
      <Product />
      <Faq />
      <Footer />
    </div>
  );
}