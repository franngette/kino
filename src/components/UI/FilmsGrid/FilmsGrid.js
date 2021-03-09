import React, { useState } from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

import FilmItem from "./FilmItem/FilmItem";
import Modal from "../Modal/Modal";
import StarsRating from "../StarsRating/StarsRating";

const FilmsGrid = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();

  const modalHandler = (val) => {
    setModalData(val);
    setShowModal(true);
  };

  const displayMovies = () => {
    let arrOfFilms = [];
    if (data.length > 0) {
      data.map((e, i) =>
        arrOfFilms.push(
          <FilmItem
            data={e}
            key={i}
            onClick={(val) => {
              modalHandler(val);
            }}
          />
        )
      );
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

  return (
    <>
      {displayMovies()}
      {showModal && (
        <div onClick={() => setShowModal(false)}>
          <Modal onClose={() => setShowModal(false)}>
            <div className={styles.overview}>
              <h1 className={styles.overviewTitle}>{modalData?.title || modalData?.name}</h1>
              <p className={styles.overviewText}>{modalData.overview}</p>
              <StarsRating rating={modalData.vote_average} />
              <p>{modalData?.release_date ?? modalData?.first_air_date}</p>
            </div>
            <div className={styles.imgWrapper}>
              <img
                src={`https://image.tmdb.org/t/p/w780/${modalData.poster_path}`}
                className={styles.img}
                alt={modalData.name || modalData.title}
              />
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

FilmsGrid.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FilmsGrid;
