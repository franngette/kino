import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faFilm, faSearch, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import InputText from "../InputText/InputText";
import { getData } from "../../../services/dummyData";
/* import {getTrending} from '../../../services/axios' */

const Header = ({ getSelected, inputHandler }) => {
  const [selectedOption, setSeletedOption] = useState("tv");
  const [searchHover, setSearchHover] = useState(false);
  const [isInFocus, setIsInFocus] = useState(false);

  const chooseType = () => {
    const res = getData(selectedOption);
    /* You can search with real data using:  
    const res = getTrending(selectedOption, 'week') */
    getSelected(res.results);
  };

  let searchClass = styles.searchHidden;
  if (searchHover) {
    searchClass = styles.searchShow;
  }

  const clooseOnHover = () => {
    if (!isInFocus) {
      setSearchHover(false);
    }
  };

  const clooseInput = () => {
    setIsInFocus(false);
    setSearchHover(false);
  };

  const onChangeInput = (value) => {
    if (value === "") {
      chooseType();
    } else {
      inputHandler(value);
    }
  };

  useEffect(() => {
    chooseType();
  }, [selectedOption]);

  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.iconsContainer}>
            <div>
              <input
                id="radio-1"
                className={styles.input}
                type="radio"
                name="radio-group"
                value="tv"
                onChange={(e) => {
                  setSeletedOption(e.target.value);
                }}
              />
              <label
                htmlFor="radio-1"
                className={selectedOption === "tv" ? styles.selectedIconContainer : styles.iconContainer}
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
                value="movie"
                onClick={(e) => {
                  setSeletedOption(e.target.value);
                }}
              />
              <label
                htmlFor="radio-2"
                className={selectedOption === "movie" ? styles.selectedIconContainer : styles.iconContainer}
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
          <div
            className={styles.searchWrapper}
            onMouseEnter={() => setSearchHover(true)}
            onMouseLeave={() => clooseOnHover()}
          >
            <FontAwesomeIcon size="1x" icon={faSearch} color="white" />
            <div className={searchClass} onFocus={() => setIsInFocus(true)} onBlur={() => clooseInput()}>
              <InputText placeholder="Search..." onChange={(e) => onChangeInput(e.target.value)} />
            </div>
          </div>
        </div>
        <div className={styles.shadow}></div>
      </header>
    </>
  );
};

Header.propTypes = {
  getSelected: PropTypes.func.isRequired,
  inputHandler: PropTypes.func.isRequired,
};

export default Header;
