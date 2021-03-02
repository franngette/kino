import React from "react";
import styles from "./style.module.scss";
const InputText = ({ placeholder, type, onChange }) => {
  return <input type={type} placeholder={placeholder} className={styles.input} onChange={onChange}></input>;
};

export default InputText;
