import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function YourOrder(props) {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState({});
  const navigate = useNavigate();

  //adcionar mais itens

  //finalizar pedido
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const response = await api.post("/order", { ...props.foodOrder });
      console.log(response);
      navigate("/finishOrder");
    } catch (err) {
      console.log(err);
    }
  }

  //deletar pedido

  async function handleDelete() {
    try {
      const response = await api.delete(`/order/${params.orderId}`);
      console.log(response);
      navigate("/order");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div>
        {props.foodOrder.map((currentFood) => {
          return <h1>{currentFood.prato}</h1>;
        })}
      </div>
      <Link to={`/itensmenu`}>
        <button>Adicionar</button>
      </Link>

      <button onClick={handleDelete}>Deletar</button>

      <button onClick={handleSubmit}>Finalizar Pedido</button>
    </>
  );
}

export { YourOrder };
