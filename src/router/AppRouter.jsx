import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Tickets from "../pages/Tickets";
import Login from "../pages/Login";
import Signup from "../pages/Signup"
import micro_boy from "../components/images/micro_boy.gif";


const homeImages = [micro_boy, "https://i.postimg.cc/mrbynkz8/banner.jpg"];
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

      <Route path="/MeatParty/Login" element={<Layout loadingImages={signInImages} />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="/MeatParty/signup">
        <Route index element={<Signup />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;