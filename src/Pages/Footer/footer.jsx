import React, { useState } from "react";
import "./footer.scss";

import IconOrange from "../../Assets/icon-orange.svg";
import IconPhone from "../../Assets/phone-number.svg";
import IconMail from "../../Assets/icon-mail.svg";
import DialogFeedback from "../../Components/dialogFeedback/dialogFeedback";

export default function Footer() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="footer-component">
      <div className="footer-img">
        <img src={IconOrange} alt="" />
        <p className="talk-orange">Uau, frutas são incríveis!</p>
      </div>

      <div className="footer-items">
        <div className="texts-container">
          <div className="contact">
            <h2 className="contact-title">Fale conosco</h2>

            <div className="phone">
              <img src={IconPhone} alt="" />
              <p>(48) 99999-9999</p>
            </div>

            <div className="mail">
              <img src={IconMail} alt="" />
              <p>suporte@xulepisco.com</p>
            </div>

            <h2 className="site-name">Frutologia</h2>
          </div>

          <div className="reference">
            <h2 className="reference-title">Referências</h2>

            <div className="art">
              <p>
                Artes utilizadas:{" "}
                <a href="https://pixabay.com/de/users/julieta_masc-5768105/">
                  julieta_masc
                </a>
              </p>
            </div>

            <div className="api">
              <p>
                Api utilizada:{" "}
                <a href="https://www.fruityvice.com/">fruityvice.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="feedback-container">
          <div className="feedback">
            <h2 className="feedback-title">Mande um comentário!</h2>

            <div className="text">
              <p>
                Encontrou algum problema ou simplesmente quer deixar uma
                mensagem para nós? Clique no botão abaixo!
              </p>
            </div>

            <div className="btn-feedback">
              <button className="btn" onClick={handleOpenDialog}>
                {" "}
                Escrever comentário{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <DialogFeedback open={dialogOpen} onClose={handleCloseDialog} />
    </div>
  );
}
