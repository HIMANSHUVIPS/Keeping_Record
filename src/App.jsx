import React, { useState } from "react";
import styles from "./App.module.css";
import Heading from "./components/Heading";
import AddInput from "./components/AddInput";
import DataContainer from "./components/ItemContainer/DataContainer";

const App = () => {
  const data = [
    { id: 1, name: "John", email: "sharma@gamil.com" },
    { id: 2, name: "Jane", email: "mishra@gamil.com" },
    { id: 3, name: "Bob", email: "verma@gamil.com" },
  ];
  const [inputVal, setInputVal] = useState(data);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleClick = () => {
    const newVal = { id: inputVal.length + 1, name, email };
    // const updateData = [...inputVal, newVal];
    // setInputVal(updateData);
    setInputVal((currVal)=>[
      ...currVal,newVal
    ]);
    setName("");
    setEmail("");
  };
  const handleDelete = (CurrentId) =>{
    console.log(CurrentId);
    let newData = inputVal;
    newData = newData.filter((item)=>item.id!=CurrentId);
    setInputVal(newData);
  }
  return (
    <>
      <div className={styles.container}>
        <Heading />
        <AddInput
          setInputVal={setInputVal}
          handleEmailChange={handleEmailChange}
          handleNameChange={handleNameChange}
          handleClick={handleClick}
          name={name}
          email={email}
        />
        <DataContainer data={inputVal} handleDelete={handleDelete}/>
      </div>
    </>
  );
};


export default App;
