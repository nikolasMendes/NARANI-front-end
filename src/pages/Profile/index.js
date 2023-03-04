import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export function Profile() {
  const [user, setUser] = useState({ name: "", email: "" });
  const { setLoggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/user/profile");
      setUser(response.data);
    }

    fetchUser();
  }, []);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(false);
    navigate("/");
  }

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button onClick={handleLogOut}>Sair</button>
    </>
  );
}
