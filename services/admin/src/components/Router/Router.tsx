import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../app";
import Admin from "../Admin/Admin";
import { ADMIN_ROUTES } from "@packages/shared/src/routes";

const routes: RouteObject[] = [
  {
    path: ADMIN_ROUTES.admin,
    element: <Admin />,

    children: [
      {
        path: ADMIN_ROUTES.profile,
        element: <div>ADMIN PROFILE</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;

