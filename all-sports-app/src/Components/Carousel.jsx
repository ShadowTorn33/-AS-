import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";

function HomepageCarousel() {
  const url = "https://sports.api.decathlon.com/sports/?parents_only=true";
  const [images, setImages] = useState(null);
  const fetchImages = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log("Images Res", res.data);
        setImages(res.data);
      });
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return images ? (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[0].relationships.images.data[0].url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>All Sports</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[15].relationships.images.data[0].url}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>All Sports</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[8].relationships.images.data[0].url}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>All Sports</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  ) : (
    <p>Loading...</p>
  );
}

export default HomepageCarousel;
