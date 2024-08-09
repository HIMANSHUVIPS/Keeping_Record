import React from "react";
import styles from "./App.module.css";
import Heading from "./components/Heading";
import AddInput from "./components/AddInput";
import DataContainer from "./components/ItemContainer/DataContainer";

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <Heading/>
        <AddInput/>
        <DataContainer/>
      </div>
    </>
  );
};

export default App;
