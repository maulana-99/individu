import { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import { featureData } from "./data/features";

const App = () => {
  const [features] = useState(featureData);

  return (
    <>
      <Header />

      <main>
        <Home features={features} />
        {/* <About />
        <Pricing /> */}
      </main>

      <Footer />
    </>
  );
};

export default App;
