import React from "react";
import styles from "./style.module.scss";
const InputText = ({ placeholder, type }) => {
  return <input type={type} placeholder={placeholder} className={styles.input}></input>;
};

export default InputText;
