import React, { useState } from "react";
import styles from "./style.module.scss";
const FilmItem = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={styles.filmWrapper}
      style={{
        background: `url(https://image.tmdb.org/t/p/original/${data.poster_path}) center`,
        backgroundSize: "cover",
      }}
    >
      {isHovered && (
        <>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>{data.vote_average}</p>
          <p className={styles.description}>{data.release_date}</p>
        </>
      )}
    </div>
  );
};

export default FilmItem;
