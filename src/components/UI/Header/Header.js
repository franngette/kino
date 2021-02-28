import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faFilm, faSearch, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import InputText from "../InputText/InputText";

const Header = () => {
  const [selectedOption, setSeletedOption] = useState("shows");

  const chooseType = (e) => {
    setSeletedOption(e);
  };

  useEffect(() => {
    console.log(selectedOption);
  });

  return (
    <>
      <header className={styles.header}>
        <div className={styles.iconsContainer}>
          <div>
            <input
              id="radio-1"
              className={styles.input}
              type="radio"
              name="radio-group"
              value="shows"
              onChange={(e) => {
                chooseType(e.target.value);
              }}
            />
            <label
              for="radio-1"
              className={selectedOption === "shows" ? styles.selectedIconContainer : styles.iconContainer}
            >
              <FontAwesomeIcon size="2x" icon={faTv} />
              <p className={styles.iconText}>TV shows</p>
            </label>
          </div>
          <div>
            <input
              id="radio-2"
              className={styles.input}
              type="radio"
              name="radio-group"
              value="films"
              onClick={(e) => {
                chooseType(e.target.value);
              }}
            />
            <label
              for="radio-2"
              className={selectedOption === "films" ? styles.selectedIconContainer : styles.iconContainer}
            >
              <FontAwesomeIcon size="2x" icon={faFilm} />
              <p className={styles.iconText}>Films</p>
            </label>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <h1 className={styles.kino}>kin</h1>
          <FontAwesomeIcon className={styles.kinoIcon} size="2x" icon={faPlayCircle} />
          <h3 className={styles.show}>show</h3>
        </div>
        <div className={styles.searchWrapper}>
          <FontAwesomeIcon size="1x" icon={faSearch} />
          <InputText placeholder="Search..." />
        </div>
      </header>
      <div className={styles.shadow}></div>
    </>
  );
};

export default Header;
