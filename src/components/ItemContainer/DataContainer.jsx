import React from 'react'
import styles from "./DataContainer.module.css";
import Items from './Items';
const DataContainer = ({data ,handleClick ,handleDelete}) => {
  return (
    <div className={styles.content}>
          <div className={styles.content1}>
            <h3 className="name">Name</h3>
            <h3 className="email">E-Mail</h3>
            <h3 className="remove">Remove</h3>
          </div>
         
            <Items data={data} handleClick={handleClick} handleDelete={handleDelete}/>
          
        </div>
  )
}

export default DataContainer