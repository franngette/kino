import "./App.css";
import Layout from "./hoc/Layout/Layout";
import FilmsGrid from "./components/UI/FilmsGrid/FilmsGrid";

function App() {
  return (
    <>
      <Layout>
        <FilmsGrid />
      </Layout>
    </>
  );
}

export default App;
