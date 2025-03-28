import { Outlet } from "react-router-dom";
import LoaderScreen from "./LoaderScreen";

const Layout = ({ loadingImages = [] }) => {
  return (
    <>
      <LoaderScreen images={loadingImages} />
      <Outlet />
    </>
  );
};

export default Layout;