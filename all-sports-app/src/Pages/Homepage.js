import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Homepage = () => {
  const [card, setCards] = useState([]);

  const fecthCards = () => {
    fetch("https://sports.api.decathlon.com/sports/?parents_only=true")
      .then((res) => res.json())
      .then((res) => {
        setCards(res.data);
      })
      .catch(console.error);
  };

  console.log(card);

  useEffect(() => {
    fecthCards();
  }, []);

  return (
    <Container fluid>
      {card.map((card) => {
        return (
          <Card border="info" style={{ width: "18rem" }}>
            <Link to="/sportslist">
              <Card.Img
                variant="top"
                src={card.relationships.images.data[0].url}
              />
            </Link>
            <Card.Body>
              <Card.Title>{card.attributes.name}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Homepage;
