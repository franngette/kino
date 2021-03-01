import React from "react";
import styles from "./style.module.scss";
import { films } from "../../../services/dummyData";
import FilmItem from "./FilmItem/FilmItem";

const FilmsGrid = (props) => {
  const displayMovies = () => {
    return films.results.map((e, i) => <FilmItem data={e} key={i} />);
  };

  displayMovies();

  return <div className={styles.wrapper}>{displayMovies()}</div>;
};

export default FilmsGrid;
