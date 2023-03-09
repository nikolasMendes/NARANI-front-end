import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";
import sushi from "../../images/surshista-removebg-preview.png";

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
    <div class=" bg-[#F9E4D4]">
      <div class="text-center py-3 text-7xl tracking-widest font-normal antialiased border-b border-orange-300 mx-20 py-10">
        <h1>Narani</h1>

        <div class="w-20 inline-block">
          <img alt="logo" src={sushi} />
        </div>

        {loggedInUser && loggedInUser.user.role === "ADMIN" ? (
          <Link to={`/createfood`}>
            <div class="text-center py-3 text-2xl tracking-widest font-normal antialiased  mx-20 py-10">
              <button>Criar Prato</button>
            </div>
          </Link>
        ) : null}
      </div>
      {menu.map((currentMenu) => {
        return (
          <div class=" px-4 border-b border-orange-300 mx-20  flex-col">
            <div class="text-center py-8">
              <h3 class="text-2xl font-bold tracking-wider">
                {currentMenu.prato}
              </h3>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-48 h-48 m-10 mt-0 ">
                <img
                  class="w-48 h-48 shadow-2xl shadow-gray-900"
                  alt="foto do prato"
                  src={currentMenu.imagem}
                />
              </div>
              <div class="w-3/5 pl-10 mt-10 mb-10">
                <p>
                  <b class="tracking-widest">Descrição:</b>{" "}
                  {currentMenu.descrição}
                </p>
                <p>
                  <b>Porção:</b> {currentMenu.quantidade}
                </p>

                <p>
                  <b>Tempo de preparo:</b> {currentMenu.preparo}
                </p>
                <p>
                  <b>Calorias:</b> {currentMenu.calorias}
                </p>
              </div>
              <div class=" w-1/12 flex items-center justify-end">
                <Link to={`/details/${currentMenu._id}`}>
                  <div class="hover:bg-[#e09e6e] place-self-center bg-[#db6916] text-center font-bold border-orange-100 = text-white shadow-2xl shadow-gray-900  py-0.5 border-solid border w-3/4 ml-24 rounded pointer-events-auto">
                    <button class="tracking-wider">Detalhes</button>
                  </div>
                </Link>
                {loggedInUser && loggedInUser.user.role === "ADMIN" ? (
                  <Link to={`/edit/${currentMenu._id}`}>
                    <div>
                      <div class="hover:bg-[#e09e6e] place-self-center bg-[#db6916] text-center font-bold border-orange-100 = text-white shadow-2xl shadow-gray-900  py-0.5 border-solid border w-3/4 ml-24 rounded pointer-events-auto">
                        <button>Gerenciar</button>
                      </div>
                    </div>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
