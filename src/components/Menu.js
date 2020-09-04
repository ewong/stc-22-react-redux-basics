import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRestoMenu } from "../redux/restoSlice";
import { addItem, removeItem, clearItems } from "../redux/cartSlice";

import styles from "./Menu.module.css";

export function Menu() {
  const dispatch = useDispatch();
  const menu = useSelector(selectRestoMenu);

  const handlePlus = (e) => {

  };

  const handleMinus = (e) => {

  };

  return (
    <div>
      {Object.keys(menu).map((k) => {
        const x = menu[k];
        return (
          <div key={`menu-${x.id}`} className={styles.menu}>
            <div className={styles.menuItem}>
              <div className={styles.menuItemName}>{x.name}</div>
            </div>
            <div className={styles.menuItem}>
              <button className={styles.button}>-</button>
            </div>
            <div className={styles.menuItem}>{`$${x.price}`}</div>
            <div className={styles.menuItem}>
              <button className={styles.button}>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
