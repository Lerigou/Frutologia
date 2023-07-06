import React, { useState } from "react";
import "./home.scss";
import cherry from "../../Assets/icon-cherry.svg";
import Input from "../../Components/Input/input";
import DialogFruit from "../../Components/dialog/dialog";
import { getFruit } from "../../Service/api";

export default function Home() {
  const [fruitData, setFruitData] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSearch = async (name) => {
    try {
      const data = await getFruit(name);
      setFruitData(data);
      setDialogOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="home">
      <div className="right">
          <h1>Frutologia</h1>

        <div className="text">
          <p>Explore o universo das frutas</p>
          <label>
            Preparado para embarcar em uma jornada emocionante para descobrir mais sobre os segredos das frutas?
            Insira abaixo o nome da fruta que deseja conhecer!
          </label>
        </div>
        <div className="input">
          <Input onSearch={handleSearch} />
        </div>
      </div>
      <div className="img-div">
        <img src={cherry} alt="" />
      </div>
      <DialogFruit fruitData={fruitData} open={dialogOpen} onClose={handleCloseDialog} />
    </div>
  );
}
