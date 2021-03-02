import React from "react";
import styles from "./style.module.scss";
import FilmItem from "./FilmItem/FilmItem";

const FilmsGrid = ({ data }) => {
  console.log(data);
  const displayMovies = () => {
    if (data.length > 0) {
      return data.map((e, i) => <FilmItem data={e} key={i} />);
    }
  };

  displayMovies();

  return <div className={styles.wrapper}>{displayMovies()}</div>;
};

export default FilmsGrid;
