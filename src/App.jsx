import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Highlight from "./components/highlight";
import Model from "./components/model";
import Features from "./components/features";
import Footer from "./components/footer";
import Support from "./components/support";
import Vehicles from "./components/vehicles";

const App = () => {
  return (
    <Router>
      <main className="bg-black">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Highlight />
                <Model />
                <Features />
              </>
            }
            exact
          />
          <Route path="/support" element={<Support />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
