import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Info from "../pages/Info";
import ShoppingCart from "../pages/ShoppingCart";
import NotFound from "../pages/NotFound";
import Tickets from "../pages/Tickets";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import micro_boy from "../components/images/micro_boy.webp";
import pixelMouse from '../components/images/pixelMouse.webp';


const homeImages = [micro_boy, pixelMouse,
  "https://i.postimg.cc/mrbynkz8/banner.jpg",
  "https://i.postimg.cc/yY6cBxdL/dj.jpg",
  "https://i.postimg.cc/x893DCrS/rave.jpg",
  "https://i.postimg.cc/k57dY0wR/mas.png",
  "https://i.postimg.cc/prKmJNqc/etapas.jpg"];

const ticketsImages = [micro_boy];
const signInImages = [micro_boy];
const infoImages = ["https://picsum.photos/1920/200"];

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/MeatParty" element={<Layout loadingImages={homeImages} />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/MeatParty/tickets" element={<Layout loadingImages={ticketsImages} />}>
        <Route index element={<Tickets />} />
      </Route>

      <Route path="/MeatParty/info" element={<Layout loadingImages={infoImages} />}>
        <Route index element={<Info />} />
      </Route>

      <Route path="/MeatParty/Login" element={<Layout loadingImages={signInImages} />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="/MeatParty/signup">
        <Route index element={<Signup />} />
      </Route>

      <Route path="/MeatParty/carrito">
        <Route index element={<ShoppingCart />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;