import { api } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

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
    <>
      <div>
        <h1>MEUS PEDIDOS</h1>
      </div>

      {orders.map((currentOrder) => {
        console.log(currentOrder);
        return currentOrder.pedido.map((currentElement) => {
          return (
            <>
              <div>
                <img alt={currentElement.prato} src={currentElement.imagem} />
                <h2>{currentElement.prato}</h2>
                <h4>{currentElement.serve}</h4>
              </div>
            </>
          );
        });
      })}
    </>
  );
}

export { FinishOrder };
