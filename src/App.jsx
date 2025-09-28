import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Navbar from "./Components/Navbar/Navbar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";

const pricingPromise = fetch("PricingData.json").then((res) => res.json());
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <div className="flex justify-center items-center ">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
