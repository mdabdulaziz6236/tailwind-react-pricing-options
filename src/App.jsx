import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Navbar from "./Components/Navbar/Navbar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import ResultsChart from "./Components/ResultsChart/ResultsChart";
import axios from "axios";
import MarksChart from "./Components/MarksChart/MarksChart";

const marksPromise = axios.get("marksData.json");
// const pricingPromise = fetch("PricingData.json").then((res) => res.json());
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        {/* <Suspense
          fallback={
            <div className="flex justify-center items-center ">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense> */}

        <Suspense
          fallback={
            <div className="flex justify-center items-center ">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        {/* <ResultsChart></ResultsChart> */}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
