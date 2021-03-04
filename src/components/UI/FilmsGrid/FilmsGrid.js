import React from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

import FilmItem from "./FilmItem/FilmItem";

const FilmsGrid = ({ data }) => {
  const displayMovies = () => {
    let arrOfFilms = [];
    if (data.length > 0) {
      data.map((e, i) => arrOfFilms.push(<FilmItem data={e} key={i} />));
      return <div className={styles.gridWrapper}>{arrOfFilms}</div>;
    } else {
      return (
        <div className={styles.notFound}>
          <p className={styles.notFoundText}>
            Your search did not return any results. please try again with other information.
          </p>
        </div>
      );
    }
  };

  return displayMovies();
};

FilmsGrid.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FilmsGrid;
