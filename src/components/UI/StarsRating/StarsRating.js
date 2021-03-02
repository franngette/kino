import React from "react";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const StarsRating = (props) => {
  const roundRating = (number) => {
    return Math.round((number / 2) * 2) / 2;
  };

  const maxRating = 5;

  let num = roundRating(props.rating);

  let starsArr = [];

  const renderStars = () => {
    for (let i = 0; i < Math.floor(num); i++) {
      starsArr.push(<FontAwesomeIcon icon={faStar} color="black" size="2x" key={Math.random()} />);
    }
    if (num - Math.floor(num) !== 0) {
      starsArr.push(<FontAwesomeIcon icon={faStarHalfAlt} color="black" size="2x" key={Math.random()} />);
    }
    if (num < 5) {
      for (let i = starsArr.length; i < maxRating; i++) {
        starsArr.push(<FontAwesomeIcon icon={emptyStar} color="black" size="2x" key={Math.random()} />);
      }
    }
  };

  renderStars();
  return (
    <div className={styles.wrapper} key={Math.random()}>
      {starsArr}
    </div>
  );
};

export default StarsRating;
