import React from "react";
import classes from "./Layout.module.css";
import MainHeader from "./MainHeader";
function Layout(props) {
  return (
    <div>
      <MainHeader />
      <main className={classes.layout}>{props.children}</main>
    </div>
  );
}

export default Layout;
