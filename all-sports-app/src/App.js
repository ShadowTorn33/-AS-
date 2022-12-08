import "./App.css";
import "./NavBar.css";
import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Pages/Homepage";
import SportslistPage from "./Pages/SportslistPage";
import WorldRecords from "./Pages/WorldRecords";
import Locations from "./Pages/Locations";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Aboutme from "./Components/About Me/Aboutme";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/sportslist/:id" element={<SportslistPage />} />
        <Route path="/worldrecords" element={<WorldRecords />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
