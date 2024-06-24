import React from 'react';
import styles from "./Filter.module.css";
import { ImCross } from "react-icons/im";

function Filter({ element, getElem, setClicked }) {
  const handleClear = () => {
    getElem([]); 
    setClicked(false);
  };

  const handleDelete = (index) => {
    const filteredElement = element.filter((item, idx) => idx !== index);
    getElem(filteredElement);
    if(element.length === 0){
      setClicked(false)
    }
  };
  
  return (
    <div className={styles.container}>
      {element.map((elem, index) => (
        <div className={styles.inside} key={index}>
          <p className={styles.para}>{elem}</p>
          <button onClick={() => handleDelete(index)}>
            <ImCross className={styles.btncross} />
          </button>
        </div>
      ))}
      <button className={styles.btn} onClick={handleClear}>Clear</button>
    </div>
  );
}

export default Filter;
