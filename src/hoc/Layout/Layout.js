import React from "react";
import Footer from "../../components/UI/Footer/Footer";
import Header from "../../components/UI/Header/Header";
import styles from "./style.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
