import React, { useState, useEffect } from 'react';
import styles from "./Card.module.css";

function Card({ listings, setClicked, getElem, element }) {
  const [filtered, setFiltered] = useState(listings);

  useEffect(() => {
    setFiltered(listings);
  }, [listings]);

  useEffect(() => {
    if (element.length === 0) {
      setFiltered(listings); // Reset filtered to the original listings
    } else {
      const filteredList = listings.filter(item =>
        item.role === element[element.length - 1] ||
        item.level === element[element.length - 1] ||
        item.tools.includes(element[element.length - 1]) ||
        item.languages.includes(element[element.length - 1])
      );
      setFiltered(filteredList);
    }
  }, [element, listings]);

  const handleOnClick = (buttonName) => {
    getElem(prev => {
      const list = [...prev, buttonName];
      return list;
    });
    setClicked(true);
  };

  return (
    <div className={styles.container}>
      {filtered.length > 0 ? (
        filtered.map((elem, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.left}>
              <div className={styles.imageContainer}>
                <img src={elem.logo} className={styles.image} alt={`${elem.company} logo`} />
                <div className={styles.textContainer}>
                  <div className={styles.paracontainer}>
                    <p className={styles.para}>{elem.company}</p>
                    <div className={styles.tagsleft}>
                      {elem.new && <p className={styles.tag}>New</p>}
                      {elem.featured && <p className={styles.tag} style={{ backgroundColor: "#2c3839" }}>Featured</p>}
                    </div>
                  </div>
                  <h2 className={styles.heading}>{elem.position}</h2>
                  <div className={styles.para2}>
                    <span>{elem.postedAt}</span>
                    <span>{elem.contract}</span>
                    <span>USA Only</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.tags}>
                <button onClick={() => handleOnClick(elem.role)}>
                  <span className={styles.span}>{elem.role}</span>
                </button>
                <button onClick={() => handleOnClick(elem.level)}>
                  <span className={styles.span}>{elem.level}</span>
                </button>
                {elem.tools.map((tool, ind) => (
                  <button key={ind} onClick={() => handleOnClick(tool)}>
                    <span className={styles.span}>{tool}</span>
                  </button>
                ))}
                {elem.languages.map((lang, idx) => (
                  <button key={idx} onClick={() => handleOnClick(lang)}>
                    <span className={styles.span}>{lang}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No cards to display</p>
      )}
    </div>
  );
}

export default Card;
