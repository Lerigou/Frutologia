import React, { useState } from "react";
import "./input.scss";

export default function Input({onSearch}) {

    const [nameValue, setNameValue] = useState("");

    const handleSearch = () => {
      // Chamar a função onSearch com o valor de pesquisa
      onSearch(nameValue);
    };
  
    const handleChange = (event) => {
      setNameValue(event.target.value);
    };

    return (
        <div className="inputSearch">
            <input 
                className="input" 
                placeholder="Nome da fruta"
                value={nameValue}
                onChange={handleChange} 
            />
            <button type="submit" className="btnSearch" onClick={handleSearch}>Pesquisar</button>
        </div>
    )
}