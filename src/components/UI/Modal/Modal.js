import React from "react";
import style from "./style.module.scss";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ onClose, children }) => {
  return (
    <div className={style.show}>
      <div className={style.modalMain}>
        <div className={style.header}>
          <button className={style.closeButton} onClick={() => onClose()}>
            <FontAwesomeIcon icon={faWindowClose} />
          </button>
        </div>
        <div className={style.children}>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
