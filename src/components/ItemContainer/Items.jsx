import React from "react";
import styles from "./Items.module.css";
const Items = () => {
  return (
    <>
     <div className={styles.content2}>
      <div className={styles.items}>
        <h3 className="name">Himanshu</h3>
        <h3 className="email">sharmahimanshuvdi@gmail.com</h3>
        <button type="button">Delete</button>
      </div>
      <div className={styles.items}>
        <h3 className="name">Himanshu</h3>
        <h3 className="email">sharmahimanshuvdi@gmail.com</h3>
        <button type="button">Delete</button>
      </div>
      <div className={styles.items}>
        <h3 className="name">Himanshu</h3>
        <h3 className="email">sharmahimanshuvdi@gmail.com</h3>
        <button type="button">Delete</button>
      </div>
      </div>
    </>
  );
};

export default Items;
