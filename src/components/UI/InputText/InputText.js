import React from "react";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

const InputText = ({ placeholder, type, onChange }) => {
  return (
    <label>{" "}
      <input type={type} placeholder={placeholder} className={styles.input} onChange={onChange}></input>
    </label>
  );
};

InputText.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
