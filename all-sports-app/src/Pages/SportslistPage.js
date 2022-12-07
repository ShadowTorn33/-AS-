import React from "react";
import { Link, useParams } from "react-router-dom";
// import Tags from '../Components/Tags/Tags'
import { useState, useEffect } from 'react'
// import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer";

const SportslistPage = () => {
  const [details, setDetails] = useState(null);

  const { id } = useParams()

  const fetchDetails = () => {
    fetch(`https://sports.api.decathlon.com/sports/${id}`)
      .then((res) => res.json())
      .then((res) => {
          console.log("res", res.data)
        setDetails(res.data);
    });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

 
  return details ? (
    <div className="container">
      {/* <Navbar /> */}
      <h1 className="sportslist">Sports Details!</h1>
      <div>Carousel Location</div> 
      <h2>{details.attributes.name}</h2>
      <p>{details.attributes.description}</p>
      <div>Related sports image (bootstrap)</div>
    </div>
  ) : (<p>Loading. . .</p>);
};

export default SportslistPage;
