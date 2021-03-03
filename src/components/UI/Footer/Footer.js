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
        <div>
          <FontAwesomeIcon size="2x" icon={faReact} color="white" style={{ marginRight: "1rem" }} />
        </div>
      </div>
      <div className={styles.contactWrapper}>
        <div className={styles.contact}>
          <a href="https://www.linkedin.com/in/francis-alberto-gette-2822a8120/" target="_blank">
            <FontAwesomeIcon size="2x" icon={faLinkedin} color="white" style={{ marginRight: "1rem" }} />{" "}
          </a>

          <a href="https://github.com/franngette" target="_blank">
            <FontAwesomeIcon size="2x" icon={faGithub} color="white" style={{ marginRight: "1rem" }} />
          </a>
          <FontAwesomeIcon size="2x" icon={faEnvelope} color="white" />
        </div>
        <p className={styles.name}>Fran Gette. 2021.</p>
      </div>
    </div>
  );
};

export default Footer;
