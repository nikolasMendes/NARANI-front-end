import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";

export function FoodDetails(props) {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState({});
  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await api.get(`/menu/details/${params.id}`);
        console.log(response.data);
        setFood(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchFood();
  }, [params.id]);

  console.log(food);
  const navigate = useNavigate();
  function handleSubmit() {
    const clone = [...props.foodOrder];
    clone.push(food);
    props.setFoodOrder(clone);

    navigate("/order");
  }
  return (
    <div>
      {!isLoading && (
        <>
          <div className="mx-auto my-8 max-w-3xl border-4 border-slate-700 flex flex-col rounded-3xl">
            <img
              alt={food.prato}
              src={food.imagem}
              className="rounded-xl border-2 border-slate-700 "
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
            <button
              onClick={handleSubmit}
              className="mx-auto w-1/4 mb-8 bg-black text-white p-3 font-bold rounded-full hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-7  00  ">
              Fazer Pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
}
