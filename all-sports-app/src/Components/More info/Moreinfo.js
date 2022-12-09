import React from "react";
import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from "react-bootstrap/Container";
import CardLoading from "../CardLoading";

const Moreinfo = () => {
  const [sports, setSports] = useState([]);

  const fetchDetails = () => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/all_sports.php/`)
      .then((res) => res.json())
      .then((res) => {
        setSports(res.sports);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
          <Accordion defaultActiveKey="0" fluid>
        {sports !== [] ? (
            sports.map((sport, index) => {
                return (
                    <Accordion.Item eventKey={index}>
                     <Accordion.Header>{sport.strSport}</Accordion.Header>
                     <Accordion.Body>
                       {sport.strSportDescription}
                     </Accordion.Body>
                   </Accordion.Item>
            );
        })
        ) : (
            <CardLoading />
            )}
            </Accordion>
    </>
  );
};

export default Moreinfo;
