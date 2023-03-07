import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import { ItensMenu } from "./pages/ItensMenu";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { EditFood } from "./pages/EditFood";
import { FoodDetails } from "./pages/FoodDetails";

import { YourOrder } from "./pages/Order";
import { FinishOrder } from "./pages/finishOrder";
import { useState } from "react";
import { CreateFood } from "./pages/CreateFood";

function App() {
  const [foodOrder, setFoodOrder] = useState([]);
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/itensmenu" element={<ItensMenu />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route path="/createfood" element={<CreateFood />} />
          <Route path="/edit/:id" element={<EditFood />} />
          <Route
            path="/details/:id"
            element={
              <FoodDetails foodOrder={foodOrder} setFoodOrder={setFoodOrder} />
            }
          />
          <Route
            path="/order"
            element={
              <YourOrder foodOrder={foodOrder} setFoodOrder={setFoodOrder} />
            }
          />
          <Route path="/finishOrder" element={<FinishOrder />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
