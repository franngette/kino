import React, { useState } from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

import StarsRating from "../../StarsRating/StarsRating";

const FilmItem = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {(data?.title || data?.name) && (
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className={styles.filmWrapper}
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.poster_path})`,
          }}
        >
          {isHovered && (
            <>
              <div className={styles.opacityLayer}></div>
              <div className={styles.filmDescription}>
                <div>
                  <h1 className={styles.title}>{data?.title ?? data?.name}</h1>
                  <p className={styles.description}>{(data?.release_date ?? data?.first_air_date).slice(0, 4)}</p>
                </div>
                <StarsRating rating={data.vote_average} />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

FilmItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FilmItem;
