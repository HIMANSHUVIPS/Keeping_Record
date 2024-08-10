import React from "react";
import styles from "./Items.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Items = ({ data,handleDelete }) => {
  return (
    <>
      <div className={styles.content2}>
        {data.map(({ id, name, email }) => (
          <div key={id} className={styles.items}>
            <h3 className="name">{name}</h3>
            <h3 className="email">{email}</h3>
            <button type="button" onClick={()=>handleDelete(id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
