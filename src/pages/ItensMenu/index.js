import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";

import { Link } from "react-router-dom";
export function ItensMenu() {
  const { loggedInUser } = useContext(AuthContext);
  const [menu, setMenu] = useState([]);

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
              <Link to={`/details/${currentMenu._id}`}>
                <button>Details</button>
              </Link>
            </div>
          );
        })}
        {loggedInUser && loggedInUser.user.role === "ADMIN" ? (
          <button>Gerenciar</button>
        ) : null}
      </>
    </>
  );
}
