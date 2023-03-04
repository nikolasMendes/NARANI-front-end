import { useState, useEffect } from "react";
import { api } from "../../api/api";

export function ItensMenu() {
  const [menu, setMenu] = useState([]);
  console.log(menu, "teste");

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await api.get("/menu");
        setMenu([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMenu();
  }, [setMenu]);
  return (
    <>
      <h2>Culinária Japonesa</h2>
      <>
        {menu.map((currentMenu) => {
          return (
            <div>
              <h3>{currentMenu.prato}</h3>
              <img alt="foto do prato" src={currentMenu.imagem} />
              <p> Descrição: {currentMenu.descrição}</p>
              <p>Porção: {currentMenu.quantidade}</p>
              <p>Serve: {currentMenu.serve}</p>
              <p>Tempo de preparo: {currentMenu.preparo}</p>
              <p>Calorias: {currentMenu.calorias}</p>
              <p></p>
            </div>
          );
        })}

        <button>Gerenciar</button>
      </>
    </>
  );
}
