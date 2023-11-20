import React from "react";
import "../../styles/app.css";
import "../../styles/app.scss";
import s from "../../styles/app.module.scss";
import { Link, Outlet } from "react-router-dom";
import { ADMIN_ROUTES, POSTS_ROUTES } from "@packages/shared/src/routes";

const Home = () => {
  return (
    <div data-testid="app-test1" className={s.wrap}>
      <h1>HOST MODULE</h1>
      <Link to={POSTS_ROUTES.posts}>POSTS</Link>
      <br />
      <Link to={ADMIN_ROUTES.admin}>ADMIN</Link>

      <div className={s.module}>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

