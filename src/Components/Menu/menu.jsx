import React from "react";
import "./menu.scss";

export default function Menu() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-right">
          <div className="nav-item">
            <a href="#home" onClick={() => scrollToSection("home")}>
              Frutologia
            </a>
          </div>
        </div>
        <div className="nav-left">
          <div className="nav-item">
            <a href="#home" onClick={() => scrollToSection("home")}>
              Pesquisar
            </a>
          </div>
          <div className="nav-item">
            <a href="#purpose" onClick={() => scrollToSection("purpose")}>
              Missão
            </a>
          </div>
          <div className="nav-item">
            <a href="#product" onClick={() => scrollToSection("product")}>
              Sobre
            </a>
          </div>
          <div className="nav-item">
            <a href="#faq" onClick={() => scrollToSection("faq")}>
              Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


// import React from "react";
// import "./menu.scss";


// export default function Menu() {
//     return (
//         <div className="navbar">
//             <div className="nav">
//                 <div className="nav-right">
//                     <div className="nav-item">
//                         <a href="">Frutologia</a>
//                     </div>
//                 </div>
//                 <div className="nav-left">
//                     <div className="nav-item">
//                         <a href="">Pesquisar</a>
//                     </div>
//                     <div className="nav-item">
//                         <a href="">Missão</a>
//                     </div>
//                     <div className="nav-item">
//                         <a href="">Sobre</a>
//                     </div>
//                     <div className="nav-item">
//                         <a href="">Contato</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// import React from "react";
// import { Link } from "react-router-dom";
// import "./menu.scss";

// export default function Menu() {
//   return (
//     <div className="navbar">
//       <div className="nav">
//         <div className="nav-right">
//           <div className="nav-item">
//             <Link to="/home">Frutologia</Link>
//           </div>
//         </div>
//         <div className="nav-left">
//           <div className="nav-item">
//             <Link to="/home">Pesquisar</Link>
//           </div>
//           <div className="nav-item">
//             <Link to="/purpose">Missão</Link>
//           </div>
//           <div className="nav-item">
//             <Link to="/product">Sobre</Link>
//           </div>
//           <div className="nav-item">
//             <Link to="/faq">Contato</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
