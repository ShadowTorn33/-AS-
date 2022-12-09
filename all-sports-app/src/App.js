import "./App.css";
import "./NavBar.css";
import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Pages/Homepage";
import SportslistPage from "./Pages/SportslistPage";
import LeaguesPage from "./Pages/LeaguesPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import MoreInfoPage from "./Components/More info/Moreinfo";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/moreinfopage" element={<MoreInfoPage />} />
        <Route path="/sportslist/:id" element={<SportslistPage />} />
        <Route path="/leaguespage" element={<LeaguesPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
