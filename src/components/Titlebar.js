import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectRestoName, selectRestoMenu } from "../redux/restoSlice";
import { selectCartCount, selectCartItems } from "../redux/cartSlice";

import styles from "./Titlebar.module.css";

export function Titlebar() {
  const name = useSelector(selectRestoName);
  const menu = useSelector(selectRestoMenu);
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);

  return (
    <div className={styles.bar}>
      {name}
      <button
        className={styles.cart}
        onClick={(e) => {
          e.preventDefault();
          if (count === 0) return;
          Object.values(items).forEach((item) => {
            const menuItem = menu[item.menuId];
            if (menuItem === undefined) return;
            console.log(
              `Name: ${menuItem.name}, Price: ${menuItem.price}, Quantity: ${item.qty}`
            );
          });
        }}
      >
        <FontAwesomeIcon icon={faShoppingBag} />
        <div className={count > 0 ? styles.badge : undefined}>
          {count > 0 ? count : undefined}
        </div>
      </button>
    </div>
  );
}
