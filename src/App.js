import React, { useEffect, useState } from "react";
import FilmsGrid from "./components/UI/FilmsGrid/FilmsGrid";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";
function App() {
  const [dataFromChild, setDataFromChild] = useState([]);

  const getDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const inputHandler = (val) => {
    if (val === "") {
      console.log("vacio");
      getDataFromChild();
    }
    const filtered = dataFromChild.filter((el) => (el.name || el.title).includes(val));
    console.log(filtered);
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
}

export default App;
