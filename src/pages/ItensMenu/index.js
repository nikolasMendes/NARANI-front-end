import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";

import { Link } from "react-router-dom";
export function ItensMenu() {
  const { loggedInUser } = useContext(AuthContext);
  const [menu, setMenu] = useState([]);

  console.log(menu, "teste");

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await api.get("/menu");
        console.log(response);
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
        {loggedInUser && loggedInUser.user.role === "ADMIN" ? (
          <Link to={`/createfood`}>
            <button>Criar Prato</button>
          </Link>
        ) : null}
        {menu.map((currentMenu) => {
          return (
            <div>
              <h3>{currentMenu.prato}</h3>
              <img alt="foto do prato" src={currentMenu.imagem} />
              <p> Descrição: {currentMenu.descrição}</p>
              <p>Porção: {currentMenu.quantidade}</p>

              <p>Tempo de preparo: {currentMenu.preparo}</p>
              <p>Calorias: {currentMenu.calorias}</p>
              <Link to={`/details/${currentMenu._id}`}>
                <button>Details</button>
              </Link>
              {loggedInUser && loggedInUser.user.role === "ADMIN" ? (
                <Link to={`/edit/${currentMenu._id}`}>
                  <button>Gerenciar</button>
                </Link>
              ) : null}
            </div>
          );
        })}
      </>
    </>
  );
}
