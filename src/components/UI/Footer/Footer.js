import React from "react";
import styles from "./style.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.pageInfo}>
        <div className={styles.contentWrapper}>
          <div className={styles.logoContainer}>
            <h1 className={styles.kino}>kin</h1>
            <FontAwesomeIcon className={styles.kinoIcon} size="2x" icon={faPlayCircle} />
            <h3 className={styles.show}>show</h3>
          </div>
          <h3 style={{ marginTop: "1rem", color: "gray" }}>Whatch them all.</h3>
        </div>
        <div className={styles.tecnologies}>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
            className={styles.tmdb}
            title="The Movie Data Base"
          >
            {" "}
          </a>
          <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer" title="React.js">
            <FontAwesomeIcon size="2x" icon={faReact} color="white" className={styles.react} />
          </a>
        </div>
      </div>
      <div className={styles.contactWrapper}>
        <div className={styles.contact}>
          <a href="https://www.linkedin.com/in/francis-alberto-gette-2822a8120/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon size="2x" icon={faLinkedin} color="white" className={styles.linkedin} />{" "}
          </a>
          <a href="https://github.com/franngette" target="_blank" rel="noreferrer">
            <FontAwesomeIcon size="2x" icon={faGithub} color="white" className={styles.github} />
          </a>
          <a href="mailto: franngette@gmail.com">
            <FontAwesomeIcon size="2x" icon={faEnvelope} color="white" className={styles.mail} />
          </a>
        </div>
        <p className={styles.name}>Francis Gette. 2021.</p>
      </div>
    </div>
  );
};

export default Footer;
