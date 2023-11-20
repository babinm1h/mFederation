import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
// @ts-ignore
import adminRoutes from "admin/Router";
// @ts-ignore
import postsRoutes from "posts/Router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [...postsRoutes, ...adminRoutes],
  },
]);

