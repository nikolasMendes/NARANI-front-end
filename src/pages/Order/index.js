import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import sushihero from "../../images/sushihero.png";

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
    <div class="bg-[#F9E4D4] w-screen h-screen-100">
      <div className="flex justify-items-center items-center flex-col">
        <img
          alt="sushihero"
          src={sushihero}
          className="w-1/4 h-1/4 border-spacing-0 "
        />
      </div>
      <div className="flex">
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
      </div>
      <div className="flex justify-items-center items-center flex-col">
        {props.foodOrder.map((food) => {
          return (
            // <div className="mx-auto my-8 max-w-md border-4 border-slate-700 flex flex-col rounded-3xl">
            //   <img src={currentFood.imagem} alt={currentFood.prato} />
            //   <h1>{currentFood.prato}</h1>
            //   <p>{currentFood.preparo}</p>
            // </div>
            <div className=" max-auto my-8 max-w-3xl bg-[#e09e6e] border-4  border-orange-500  flex flex-col rounded-3xl">
              <img
                alt={food.prato}
                src={food.imagem}
                className="rounded-xl border-2 border-orange-500  "
              />
              <h1 className="pt-3 text-center text-3xl font-bold">
                {food.prato}
              </h1>
              <div className="p-4">
                <p className="pb-4">
                  <span className="font-semibold"> Descrição:</span>{" "}
                  {food.descrição}
                </p>

                <div className="flex justify-between">
                  <p>
                    <span className="font-semibold">Tempo de preparo: </span>
                    {food.preparo}
                  </p>
                  <p className=" pr-80">
                    <span className="font-semibold">Calorias:</span>{" "}
                    {food.calorias}
                  </p>
                </div>
                <div className="flex justify-between  pt-3">
                  <p>
                    <span className="font-semibold">Porção: </span>
                    {food.quantidade}
                  </p>
                  <p className=" pr-96">
                    <span className="font-semibold">Tempo de preparo: </span>
                    {food.preparo}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { YourOrder };
