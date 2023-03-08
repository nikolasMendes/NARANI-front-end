import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function CreateFood() {
  const [form, setForm] = useState({
    prato: "",
    imagem: "",
    descrição: "",
    quantidade: "",
    serve: "",
    calorias: "",
  });

  const navigate = useNavigate();
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("/menu", { ...form });
      console.log(response);
      navigate("/itensmenu");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="mx-auto my-8 p-6 max-w-2xl border-4 border-gray-800 border-double rounded-md">
        <h1 className="text-center font-bold text-3xl">Criar novo prato</h1>
        <form onSubmit={handleSubmit} className="space-y-8 border-black-500">
          <div className="mt-6 text-left ">
            <label
              htmlFor="input-name"
              className="text-lg font-medium text-gray-700">
              Prato
            </label>
            <input
              id="input-name"
              name="prato"
              type="text"
              value={form.prato}
              onChange={handleChange}
              placeholder="Coloque o nome do prato"
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-green-40 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
          <div className="mt-6 text-left">
            <label
              htmlFor="input-image"
              className="text-lg font-medium text-gray-700 w-1/5">
              Imagem
            </label>
            <input
              id="input-image"
              name="imagem"
              type="text"
              value={form.imagem}
              onChange={handleChange}
              placeholder="Inserir URL"
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-green-40 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
          <div className="mt-6 text-left">
            <label
              htmlFor="input-description"
              className="w-full text-lg font-medium text-gray-700">
              Descrição
            </label>
            <input
              id="input-description"
              name="descrição"
              type="text"
              value={form.descrição}
              onChange={handleChange}
              placeholder="Breve descrição do prato"
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-green-40 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
          <div className="mt-6 text-left">
            <label
              htmlFor="input-quantity"
              className="w-full text-lg font-medium text-gray-700">
              Quantidade
            </label>
            <input
              id="input-quantity"
              name="quantidade"
              type="number"
              value={form.quantidade}
              onChange={handleChange}
              placeholder="Quantidade de pratos a serem servidos"
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-green-40 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
          <div className="mt-6 text-left">
            <label
              htmlFor="input-serve"
              className="w-full text-lg font-medium text-gray-700">
              Tempo de preparo
            </label>
            <input
              id="input-serve"
              name="serve"
              type="text"
              value={form.serve}
              onChange={handleChange}
              placeholder="Quantas pessoas são servidas por prato"
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-green-40 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
          <div className="mt-6 text-left">
            <label
              htmlFor="input-calories"
              className="w-full text-lg font-medium text-gray-700">
              Calorias
            </label>
            <input
              id="input-caloories"
              name="calorias"
              type="text"
              value={form.calorias}
              onChange={handleChange}
              placeholder="Quantidade de calorias de uma unidade"
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-green-40 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
          <div className="flex justify-center">
            <button className="rounded-md bg-indigo-600 py-2 px-8 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Criar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
