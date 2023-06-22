import React, { Fragment } from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Momo Meals</h1>
        <HeaderCartButton onCartShow={props.onCartShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt='Banner_Image' />
      </div>
    </Fragment>
  );
};

export default Header;
