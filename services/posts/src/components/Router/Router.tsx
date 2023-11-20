import { createBrowserRouter } from "react-router-dom";
import App from "../../app";
import Posts from "../Posts/Posts";
import { POSTS_ROUTES } from "@packages/shared/src/routes";

const routes = [
  {
    path: POSTS_ROUTES.posts,
    element: <Posts />,
  },
];

export const router = createBrowserRouter(routes);

export default routes;

