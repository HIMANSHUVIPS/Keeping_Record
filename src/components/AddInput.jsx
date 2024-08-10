import React from "react";
import styles from "./AddInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
const AddInput = ({handleEmailChange,handleNameChange,handleClick,name,email}) => {
  return (
    <div className={styles.addInput}>
      <input type="text" name="" id="" placeholder="Enter Name:" onChange={handleNameChange} value={name}/>
      <input type="email" name="" id="" placeholder="Enter e-mail:" onChange={handleEmailChange} value={email}/>
      <button type="button" onClick={handleClick}>
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
    </div>
  );
};

export default AddInput;
