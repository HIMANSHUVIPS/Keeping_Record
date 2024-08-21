import React from "react";
import styles from "./DataContainer.module.css";
import Items from "./Items";
import { Items_Context } from "../../store/Data.context";
import { useContext } from "react";
const DataContainer = () => {
  const {inputVal,deleteItem} = useContext(Items_Context);
  // console.log(Context_Item)
  return (
    <div className={styles.content}>
      <div className={styles.content1}>
        <h3 className="name">Name</h3>
        <h3 className="email">E-Mail</h3>
        <h3 className="remove">Remove</h3>
      </div>
      
      <Items
        data={inputVal}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default DataContainer;
