import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
export function FoodDetails(props) {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
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
          <div class="flex min-h-full items-center  bg-[#F9E4D4] h-screen pb-36">
            <div className="mx-auto max-w-3xl border-4 border-slate-700 flex flex-col rounded-3xl bg-[#e09e6e] shadow-2xl ">
              <img
                alt={food.prato}
                src={food.imagem}
                className="rounded-xl border-2 border-slate-700 max-h-96"
              />
              <h1 className="pt-3 text-center text-3xl font-bold">
                {food.prato}
              </h1>
              <div className="p-4">
                <p className="pb-4">
                  <span className="font-semibold"> Descrição:</span>{" "}
                  {food.descrição}
                </p>

                <div className="flex justify-between pb-6">
                  <p>
                    <span className="font-semibold">Tempo de preparo: </span>
                    {food.preparo}
                  </p>
                  <p className="pr-7">
                    <span className="font-semibold">Calorias:</span>{" "}
                    {food.calorias}
                  </p>
                  <p className="pr-12">
                    <span className="font-semibold">Porção: </span>
                    {food.quantidade} porções
                  </p>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="mx-auto w-1/4 mb-8 border-zinc-400 bg-zinc-200 p-3 font-bold rounded-full hover:bg-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-7  00  ">
                Fazer Pedido
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
