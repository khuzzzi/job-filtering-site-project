import React from 'react';
import styles from "./Header.module.css";
import Filter from './Filter';

function Header({ clicked, element, getElem, setClicked }) {
  return (
    <div>
      <img src="./images/bg-header-desktop.svg" alt="" className={styles.image} />

      {clicked && <Filter element={element} getElem={getElem} setClicked={setClicked} />}
    </div>
  );
}

export default Header;
