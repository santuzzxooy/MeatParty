import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Tickets from "../pages/Tickets";
import SignIn from "../pages/SignIn";
import micro_boy from "../components/images/micro_boy.gif";


const homeImages = [micro_boy];
const ticketsImages = [micro_boy];
const signInImages = [micro_boy];

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/MeatParty" element={<Layout loadingImages={homeImages} />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/MeatParty/tickets" element={<Layout loadingImages={ticketsImages} />}>
        <Route index element={<Tickets />} />
      </Route>

      <Route path="/MeatParty/ingresar" element={<Layout loadingImages={signInImages} />}>
        <Route index element={<SignIn />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;