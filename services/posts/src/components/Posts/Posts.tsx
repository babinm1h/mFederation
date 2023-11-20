import React from "react";
import "../../styles/app.css";
import "../../styles/app.scss";
import s from "./posts.module.scss";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <div data-testid="app-test1" className={s.wrap}>
      <h1>POSTS MODULE</h1>
    </div>
  );
};

export default Posts;

