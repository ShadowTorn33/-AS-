import logo from "./logo.svg";
import "./App.css";
import "./NavBar.css";
import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Pages/Homepage";
import SportslistPage from "./Pages/SportslistPage";
import WorldRecords from "./Pages/WorldRecords";
import Locations from "./Pages/Locations";
import "bootstrap/dist/css/bootstrap.min.css";
import Tags from "./Components/Tags/Tags";
import Title from "./Components/Title";
import { faFacebook,  faInstagram, faGithub, faTwitter, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <header className="Container">
        <h1 className="Title">- AS -</h1>
      </header>
      <Title />
      <NavBar />
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sportslist" element={<SportslistPage />} />
        <Route path="/worldrecords" element={<WorldRecords />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>

        <Footer />
    </>
  );
}

export default App;
