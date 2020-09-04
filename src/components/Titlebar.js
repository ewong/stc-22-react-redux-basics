import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectRestoName } from "../redux/restoSlice";
import { selectCartCount } from "../redux/cartSlice";

import styles from "./Titlebar.module.css";

export function Titlebar() {
  const name = useSelector(selectRestoName);
  const count = useSelector(selectCartCount);

  return (
    <div className={styles.bar}>
      {name}
      <button className={styles.cart} onClick={() => console.log("show cart")}>
        <FontAwesomeIcon icon={faShoppingBag} />
        <div className={count > 0 ? styles.badge : undefined}>{count > 0 ? count : undefined}</div>
      </button>
    </div>
  );
}
