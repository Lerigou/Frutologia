// import './App.css';
import '../src/css/styles.scss';
import Home from './Pages/Home/home';
import Purpose from './Pages/Purpose/purpose';
import Product from './Pages/Product/product';
import Footer from './Pages/Footer/footer';
import Menu from './Components/Menu/menu';

export default function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Purpose />
      <Product />
      <Footer />
    </div>
  );
}