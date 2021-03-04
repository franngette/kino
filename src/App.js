import React, { useState } from "react";

import FilmsGrid from "./components/UI/FilmsGrid/FilmsGrid";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";
/* import {getSearch} from './services/axios' */

const App = () => {
  const [dataFromChild, setDataFromChild] = useState([]);

  /*getDataFromChild uses de data from the child to store the films/shows */
  const getDataFromChild = (data) => {
    setDataFromChild(data);
  };

  /*inputHandler will filter the dummyData with the input*/
  const inputHandler = (val) => {
    if (val === "") {
      getDataFromChild();
      /* if val is empty will fire the child component to look for trendings */
    }

    /* You can use getSearch(val) from "./services/axios" to find the title. */
    const filtered = dataFromChild.filter((el) => (el.name || el.title).includes(val));
    if (filtered) {
      setDataFromChild(filtered);
    }
  };

  return (
    <div className="wrapper">
      <Header getSelected={getDataFromChild} inputHandler={inputHandler} />
      <div className="children">
        <FilmsGrid data={dataFromChild} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
