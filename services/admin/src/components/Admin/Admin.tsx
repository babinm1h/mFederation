import React from "react";
import "../../styles/app.css";
import "../../styles/app.scss";
import s from "./admin.module.scss";
import { Link, Outlet } from "react-router-dom";
import { ADMIN_ROUTES } from "@packages/shared/src/routes";

const Admin = () => {
  return (
    <div data-testid="app-test1" className={s.wrap}>
      <h1>ADMIN MODULE</h1>
      <Link to={ADMIN_ROUTES.profile}>Profile</Link> <br />
      <Link to={ADMIN_ROUTES.admin}>Admin</Link>
      <Outlet />
    </div>
  );
};

export default Admin;

