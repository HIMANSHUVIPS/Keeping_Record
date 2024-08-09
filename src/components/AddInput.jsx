import React from "react";
import styles from "./AddInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
const AddInput = () => {
  return (
    <div className={styles.addInput}>
      <input type="text" name="" id="" placeholder="Enter Name:" />
      <input type="email" name="" id="" placeholder="Enter e-mail:" />
      <button type="button">
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
    </div>
  );
};

export default AddInput;
