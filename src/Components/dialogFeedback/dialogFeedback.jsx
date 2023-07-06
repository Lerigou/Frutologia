import React from "react";
import "./dialogFeeback.scss";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import cancel from "../../Assets/icon-cancel-brown.svg";

export default function DialogFeedback({ open, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="dialog-feedback">
      <DialogTitle className="dialog-feedback-title">
        <p>Obrigada pela gentileza!</p>
        <button className="close-dialog-feedback" onClick={handleClose}>
          <img src={cancel} alt="Close" />
        </button>
      </DialogTitle>
      <DialogContent className="dialog-feedback-body">
        <p>
          Ficamos muito felizes em saber que deseja nos enviar um comentário de
          feedback. Por favor, fique a vontade para reportar erros encontrados e
          sua opinião sobre a ferramenta!
        </p>

        <div className="feedback-phone">
          <p>Telefone *</p>
          <input className="input-feedback" required></input>
        </div>

        <div className="feedback-mail">
          <p>Email *</p>
          <input className="input-feedback" required></input>
        </div>

        <div className="feedback-box">
          <p>Seu comentário!</p>
          <textarea className="textarea-feedback"></textarea>
        </div>

        <div className="div-btn">
          <button className="btnFeedback" onClick={handleClose}>Enviar</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
