import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const Navigate = useNavigate();

  function handleLoggout() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    Navigate("/");
  }

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/ItensMenu">Menu</Link>

      {loggedInUser && (
        <>
          <Link to="/finishOrder">Acompanhe seus Pedidos</Link>
          <button onClick={handleLoggout}>Sair</button>
        </>
      )}

      {!loggedInUser && (
        <>
          <Link to="/">Login</Link>
        </>
      )}
    </>
  );
}
