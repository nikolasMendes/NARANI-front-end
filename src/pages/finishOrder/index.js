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
  return (
    <>
      <h1>MEUS PEDIDOS</h1>

      {orders.map((currentOrder) => {
        return <h2>{currentOrder.prato}</h2>;
      })}
    </>
  );
}

export { FinishOrder };
