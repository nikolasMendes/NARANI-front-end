import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";

export function FoodDetails() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState({});
  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await api.get(`/menu/details/${params.id}`);
        console.log(response.data);
        setFood(response);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchFood();
  }, [params.id]);

  return (
    <div>
      {!isLoading && (
        <>
          <h3>{food.data.prato}</h3>
          <img alt={food.data.prato} src={food.data.imagem} />
          <p> Descrição: {food.data.descrição}</p>
          <p>Porção: {food.data.quantidade}</p>
          <p>Serve: {food.data.serve}</p>
          <p>Tempo de preparo: {food.data.preparo}</p>
          <p>Calorias: {food.data.calorias}</p>
          <button>Fazer Pedido</button>
        </>
      )}
    </div>
  );
}
