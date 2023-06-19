import { useRoutes } from "react-router-dom";

import GenericRouter from "./GenericRouter";

function RouterApp() {
  return useRoutes([GenericRouter]);
}

export default RouterApp;
