import React from "react";
import styles from "./AddInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Items_Context } from "../store/Data.context";
import { useState, useContext } from "react";

const AddInput = () => {
  const { addItem } = useContext(Items_Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddItem = () => {
    addItem(name, email);
    setEmail("");
    setName("");
  };
  return (
    <div className={styles.addInput}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Name:"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="email"
        name=""
        id=""
        placeholder="Enter e-mail:"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <button type="button" onClick={handleAddItem}>
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
    </div>
  );
};

export default AddInput;
