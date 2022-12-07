import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
// import Tags from "../Components/Tags/Tags";
import HomepageCarousel from "../Components/Carousel";

const Homepage = () => {
  const [cards, setCards] = useState([]);

  const { id } = useParams();

  const fecthCards = () => {
    fetch("https://sports.api.decathlon.com/sports/?parents_only=true")
      .then((res) => res.json())
      .then((res) => {
        setCards(res.data);
        // console.log('homepage', res.data);
      })
      .catch(console.error);
  };

//   console.log(card);

  useEffect(() => {
    fecthCards();
  }, []);
  
  return (
    <>
      <HomepageCarousel />
      <Container fluid>
        {cards.map((card,index) => {
        //   const id = card.attributes.id;
          return (
            <Card border="info" style={{ width: "18rem" }} key={index}>
              <Link to={`/sportslist/${card.id}`}>
                <Card.Img
                  variant="top"
                  src={card.relationships.images.data[0].url}
                  style={{ width: "100%", height: "12rem", objectfit: "fill" }}
                />
              </Link>
              <Card.Body>
                <Card.Title>{card.attributes.name}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Homepage;
