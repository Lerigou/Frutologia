import React from "react";
import Menu from "./Components/Menu/menu";
import Home from "./Pages/Home/home";
import Purpose from "./Pages/Purpose/purpose";
import Product from "./Pages/Product/product";
import Footer from "./Pages/Footer/footer";
import Faq from "./Pages/Faq/faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div id="home">
          <Home />
        </div>
        <div id="purpose">
          <Purpose />
        </div>
        <div id="product">
          <Product />
        </div>
        <div id="faq">
          <Faq />
        </div>
        <Footer />
      </div>
    </Router>
  );
}


// import React from "react";
// import Menu from "./Components/Menu/menu";
// import Home from "./Pages/Home/home";
// import Purpose from "./Pages/Purpose/purpose";
// import Product from "./Pages/Product/product";
// import Footer from "./Pages/Footer/footer";
// import Faq from "./Pages/Faq/faq";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Menu />
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/purpose" element={<Purpose />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/faq" element={<Faq />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }
