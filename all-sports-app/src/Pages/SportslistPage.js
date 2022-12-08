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
      <h1 className="sportslist">Sports Details!</h1>
      <img src={details.relationships.images.data[0].url} style={{width: '30rem'}} />
      <h2>{details.attributes.name}</h2>
      <p>{details.attributes.description}</p>
      <img src={details.attributes.icon} className='App-logoo'/>
    </div>
  ) : (<p>Loading. . .</p>);
};

export default SportslistPage;
