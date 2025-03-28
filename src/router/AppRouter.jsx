import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";  // Asegúrate de importar el Layout
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Tickets from "../pages/Tickets";
import SignIn from "../pages/SignIn";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/MeatParty" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="ingresar" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;