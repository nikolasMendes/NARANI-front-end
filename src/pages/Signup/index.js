import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import sushihero from "../../images/sushihero.png";
export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [img] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  /*
  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/upload-image", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }
*/
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //const imgURL = await handleUpload();
      await api.post("/user/signup", { ...form });
      //await api.post("/user/signup", { ...form, img: imgURL });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="flex flex-col min-h-full items-center   bg-[#F9E4D4] h-screen pb-96">
      <img src={sushihero} alt="signUp logo" className="w-80" />
      <div className="mx-auto my-8 p-6 max-w-2xl border-4 border-gray-800 border-double rounded-md bg-[#e09e6e] shadow-2xl ">
        <form onSubmit={handleSubmit} className="space-y-8 border-black-500">
          <div className="mt-6 text-left ">
            <label htmlFor="formName" className="font-semibold">
              Nome:
            </label>
            <input
              id="formName"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-6 text-left ">
            <label htmlFor="formEmail" className="font-semibold">
              E-mail:
            </label>
            <input
              id="formEmail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-6 text-left ">
            <label htmlFor="formPassword" className="font-semibold">
              Senha:
            </label>
            <input
              id="formPassword"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-6 text-left ">
            <label htmlFor="formConfirmPassword" className="font-semibold">
              Confirmação de senha
            </label>
            <input
              id="formConfirmPassword"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              class="relative block w-80 rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button
            type="submit"
            class="place-self-center bg-[#f9e4d4] text-center font-bold border-orange-400 py-0.5 border-solid border w-1/3 ml-24 rounded-2xl pointer-events-auto">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
