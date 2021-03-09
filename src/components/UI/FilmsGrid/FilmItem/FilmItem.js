import React, { useState } from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import StarsRating from "../../StarsRating/StarsRating";

const FilmItem = ({ data, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {(data?.title || data?.name) && (
        <div
          className={styles.filmWrapper}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onClick={() => onClick(data)}
        >
          <LazyLoadImage
            effect="blur"
            style={{ width: "100%" }}
            src={`https://image.tmdb.org/t/p/w400/${data.poster_path}`}
            alt={data?.title || data?.name}
          />
          {isHovered && (
            <>
              <div className={styles.opacityLayer}></div>
              <div className={styles.filmDescription}>
                <div>
                  <h1 className={styles.title}>{data?.title ?? data?.name}</h1>
                  <p className={styles.description}>{(data?.release_date ?? data?.first_air_date).slice(0, 4)}</p>
                </div>
                <StarsRating rating={data.vote_average} color="black" />
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
