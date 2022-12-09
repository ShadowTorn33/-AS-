import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
// import CardLoading from "../Components/CardLoading";
import { useParams } from "react-router-dom";

const Moreinfo = () => {
  const [sports, setSports] = useState([]);

  const { id } = useParams();

  const fetchDetails = () => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/all_sports.php/`)
      .then((res) => res.json())
      .then((res) => {
        setSports(res.sports);
        console.log(res.sports);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <Container fluid>
        {sports !== [] ? (
          sports.map((sport, index) => {
            return (
              <Card
                className="body"
                border="light"
                style={{ width: "18rem" }}
                key={index}
              >
                <Card.Img
                  variant="top"
                  src={sport.strSportThumb}
                  style={{
                    width: "100%",
                    height: "12rem",
                    objectfit: "fill",
                  }}
                />
                <Card.Body>
                  <Card.Title>{sport.strSport}</Card.Title>
                  <Card.Text>{sport.strSportDescription}</Card.Text>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          //   <CardLoading />
          <p>Loading. . .</p>
        )}
      </Container>
    </>
  );
};

export default Moreinfo;
