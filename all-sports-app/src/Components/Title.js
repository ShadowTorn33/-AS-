import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect} from 'react'


function Title() {
    const [title, setTitle] = useState([])
  
    const fecthTitle = () => {
      fetch("https://sports.api.decathlon.com/sports/?parents_only=true")
        .then((res) => res.json())
        .then((res) => {
          setTitle(res.data);
        })
        .catch(console.error);
    };
  
    console.log(title);
  
    useEffect(() => {
      fecthTitle();
    }, []);

  return (
    
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fvisiting-various-vista-points-vallejo-crockett-to-photograph-alfred-zampa-memorial-bridge-carquinez-bridge-169718116.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.hdqwalls.com/wallpapers/thumb/anime-ninja-4k-lo.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://coolthemestores.com/wp-content/uploads/2021/03/jujutsu-kaisen-chrome-featured-image.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Title;