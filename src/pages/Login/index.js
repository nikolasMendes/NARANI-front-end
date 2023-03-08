import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import imageLogin from "../../images/image-login.jpg";
import logo from "../../images/surshista.PNG";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      console.log(response, "teste___");
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/itensMenu");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="flex min-h-full items-center justify-center px-4 sm:px-6 bg-[#F9E4D4] h-screen flex-row space-x-10">
      <div class="border-yellow-600 border-solid border p-16 mr-48  rounded-2xl bg-[#e09e6e] shadow-2xl shadow ">
        <div class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 w-full max-w-md space-y-8">
          <h1>Bem Vindos ao Narani</h1>
        </div>
        <form
          onSubmit={handleSumit}
          class="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <label for="email-address" class="sr-only">
            Email:
          </label>
          <input
            id="email-address"
            autocomplete="email"
            required
            class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <label class="sr-only">Senha:</label>
          <input
            id="password"
            autocomplete="current-password"
            required
            class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Senha"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <div class="place-self-center bg-[#d5cdca] text-center font-bold border-zinc-400 bg-zinc-200 py-0.5 border-solid border w-1/3 ml-24 rounded-2xl">
            <button type="submit">Entrar</button>
          </div>
          <div class="flex-row flex justify-between ">
            <p class="mr-3">Ainda não tem cadastro?</p>
            <span class="font-semibold italic antialiased">
              <Link to="/signup">Clique aqui!</Link>
            </span>
          </div>
        </form>
      </div>
      <div class="w-1/3">
        <img alt="login" src={logo} />
      </div>
    </div>
  );
}
