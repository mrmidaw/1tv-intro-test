import styles from "./Layout.module.scss";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
};

export default Layout;
