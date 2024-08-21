import React, { useState } from "react";
import styles from "./App.module.css";
import Heading from "./components/Heading";
import AddInput from "./components/AddInput";
import DataContainer from "./components/ItemContainer/DataContainer";
import { Items_Context } from "./store/Data.context";

const App = () => {
  const data = [
    { id: 1, name: "John", email: "sharma@gamil.com" },
    { id: 2, name: "Jane", email: "mishra@gamil.com" },
    { id: 3, name: "Bob", email: "verma@gamil.com" },
  ];
  const [inputVal, setInputVal] = useState(data);
 

  const addItem = (name,email) => {
    const newVal = { id: inputVal.length + 1, name, email };
    // const updateData = [...inputVal, newVal];
    // setInputVal(updateData);
    setInputVal((currVal) => [...currVal, newVal]);
  };
  const deleteItem = (CurrentId) => {
    console.log(CurrentId);
    let newData = inputVal;
    newData = newData.filter((item) => item.id != CurrentId);
    setInputVal(newData);
  };
  return (
    <Items_Context.Provider value={{inputVal,addItem,deleteItem}}>
      <div className={styles.container}>
        <Heading />
        <AddInput/>
        <DataContainer/>
      </div>
    </Items_Context.Provider>
  );
};

export default App;
