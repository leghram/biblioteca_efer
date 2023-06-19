import Generic from "../layouts/Generic";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Offers from "../pages/Offers";
import NotFound from "../pages/NotFound";

const GenericRouter = {
  element: <Generic />,
  path: "/",
  children: [
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Store />,
      path: "/store",
    },
    {
      element: <Offers />,
      path: "/offers",
    },
    {
      element: <NotFound />,
      path: "/*",
    },
  ],
};

export default GenericRouter;
