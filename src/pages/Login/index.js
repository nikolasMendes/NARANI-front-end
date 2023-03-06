import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <>
      <h1>Bem Vindos ao Narani</h1>

      <form onSubmit={handleSumit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <label>Senha:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Entrar!</button>

        <p>Ainda não tem cadastro?</p>
        <Link to="/signup">Clique aqui para se cadastrar!</Link>
      </form>
    </>
  );
}
