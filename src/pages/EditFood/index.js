import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";

export function EditFood() {
  const params = useParams();
  const [form, setForm] = useState({
    prato: "",
    imagem: "",
    descrição: "",
    quantidade: "",
    serve: "",
    calorias: "",
  });

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/menu/details/${params.id}`);
        console.log(response.data);
        setForm(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchDish();
  }, [params.id]);

  const navigate = useNavigate();
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.put(`/menu/edit/${params.id}`, { ...form });
      console.log(response);
      navigate("/itensmenu");
    } catch (err) {
      console.log(err);
    }
  }
  async function handleDelete() {
    try {
      const response = await api.delete(`/menu/delete/${params.id}`);
      console.log(response);
      navigate("/itensmenu");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Editar o prato</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-name">Prato:</label>
        <input
          id="input-name"
          name="prato"
          type="text"
          value={form.prato}
          onChange={handleChange}
        />
        <label htmlFor="input-image">Imagem:</label>
        <input
          id="input-image"
          name="imagem"
          type="text"
          value={form.imagem}
          onChange={handleChange}
        />
        <label htmlFor="input-description">Descrição:</label>
        <input
          id="input-description"
          name="descrição"
          type="text"
          value={form.descrição}
          onChange={handleChange}
        />
        <label htmlFor="input-quantity">Quantidade:</label>
        <input
          id="input-quantity"
          name="quantidade"
          type="text"
          value={form.quantidade}
          onChange={handleChange}
        />
        <label htmlFor="input-serve">Serve:</label>
        <input
          id="input-serve"
          name="serve"
          type="text"
          value={form.serve}
          onChange={handleChange}
        />
        <label htmlFor="input-calories">Calorias:</label>
        <input
          id="input-caloories"
          name="calorias"
          type="text"
          value={form.calorias}
          onChange={handleChange}
        />
        <button>Editar</button>
      </form>
      <button onClick={handleDelete}>Deletar prato</button>
    </>
  );
}
