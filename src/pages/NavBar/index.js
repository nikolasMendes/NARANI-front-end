import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/surshista.PNG";

export function NavBar() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const Navigate = useNavigate();

  function handleLoggout() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    Navigate("/");
  }

  return (
    <div class="relative flex h-12 items-center bg-[#db6916] px-3 justify-between ">
      <div>
        <img class="w-10 overflow-hidden" alt="logo" src={logo} />
      </div>
      <div class="relative flex h-12 items-center justify-around w-1/3 text-white  ">
        <Link
          to="/"
          class="hover:bg-[#e09e6e] block rounded-md px-3 py-2 text-base font-medium"
        >
          Home
        </Link>
        <Link
          to="/ItensMenu"
          class="hover:bg-[#e09e6e]  block rounded-md px-3 py-2 text-base font-medium text-white"
        >
          Menu
        </Link>
        {loggedInUser && (
          <>
            <Link
              to="/finishOrder"
              class="hover:bg-[#e09e6e]  block rounded-md px-3 py-2 text-base font-medium text-white"
            >
              Acompanhe seus Pedidos
            </Link>
          </>
        )}

        {!loggedInUser && (
          <>
            <Link
              to="/"
              class="hover:bg-[#e09e6e]  block rounded-md px-3 py-2 text-base font-medium text-white"
            >
              Login
            </Link>
          </>
        )}
      </div>
      <div>
        <button
          onClick={handleLoggout}
          class="hover:bg-[#e09e6e]  block rounded-md px-3 py-2 text-base font-medium text-white"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
