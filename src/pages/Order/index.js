import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function YourOrder(props) {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [foodOrder, setFoodOrder] = useState({});
  const navigate = useNavigate();

  //adcionar mais itens

  //finalizar pedido
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(props.foodOrder);
      const response = await api.post("/order", {
        pedido: props.foodOrder,
      });
      console.log(response);
      navigate("/finishOrder");
    } catch (err) {
      console.log(err);
    }
  }

  //deletar pedido

  async function handleDelete() {
    // try {
    //   const response = await api.delete(`/order/${params.orderId}`);
    //   console.log(response);
    //   navigate("/order");
    // } catch (err) {
    //   console.log(err);
    // }
    props.setFoodOrder([]);
  }
  console.log(foodOrder);
  return (
    <div className="flex">
      <>
        <div className="mx-auto space-x-10 flex-3 items-stretch ">
          <Link to={`/itensmenu`}>
            <button className="mx-auto w-64 mb-8 bg-lime-600 text-white p-3 font-bold rounded-full hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-7  00  ">
              Adicionar
            </button>
          </Link>

          <button
            onClick={handleDelete}
            className="mx-auto w-64 mb-8 bg-red-600 text-white p-3 font-bold rounded-full hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-7  00  "
          >
            Deletar
          </button>

          <button
            onClick={handleSubmit}
            className="mx-auto w-64 mb-8 bg-blue-600 text-white p-3 font-bold rounded-full hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-7  00  "
          >
            Finalizar Pedido
          </button>
        </div>
        <div>
          {props.foodOrder.map((currentFood) => {
            return (
              <div className="mx-auto my-8 max-w-md border-4 border-slate-700 flex flex-col rounded-3xl">
                <img src={currentFood.imagem} alt={currentFood.prato} />
                <h1>{currentFood.prato}</h1>
                <p>{currentFood.serve}</p>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
}

export { YourOrder };
