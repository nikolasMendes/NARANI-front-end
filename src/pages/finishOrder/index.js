import { api } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import addfood from "../../images/addfood.png";

function FinishOrder() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function feftchOrders() {
      try {
        const response = await api.get("/order");

        setOrders([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    feftchOrders();
  }, []);
  console.log(orders);
  return (
    <div class=" bg-[#F9E4D4] w-screen h-screen-100">
      <div className="flex justify-items-center items-center flex-col">
        <img
          alt="sushihero"
          src={addfood}
          className="w-1/4 h-1/4 border-spacing-0 "
        />
      </div>
      <div className="mx-auto w-64 mb-8 bg-lime-600 text-white p-3 font-bold rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-7  00 items-center justify-center flex ">
        MEUS PEDIDOS
      </div>

      <div className="flex justify-items-center items-center flex-col">
        {orders.map((currentOrder) => {
          return currentOrder.pedido.map((food) => {
            return (
              <div className="flex flex-col max-auto my-8 bg-[#e09e6e] border-2 border-orange-500  rounded-3xl">
                <img
                  alt={food.prato}
                  src={food.imagem}
                  className="rounded-xl border-2 border-orange-500"
                />
                <h1 className="pt-3 text-center text-3xl font-bold">
                  {food.prato}
                </h1>
                <p className="pb-4">{food.serve}</p>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export { FinishOrder };
