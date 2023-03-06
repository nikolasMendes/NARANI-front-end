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
          <h3>{food.prato}</h3>
          <img alt={food.prato} src={food.imagem} />
          <p> Descrição: {food.descrição}</p>
          <p>Porção: {food.quantidade}</p>
          <p>Serve: {food.serve}</p>
          <p>Tempo de preparo: {food.preparo}</p>
          <p>Calorias: {food.calorias}</p>
          <button onClick={handleSubmit}>Fazer Pedido</button>
        </>
      )}
    </div>
  );
}
