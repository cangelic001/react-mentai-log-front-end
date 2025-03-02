import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import CardBasic from '../CardBasic/CardBasic';
import './CarouselLanding.css';

function CarouselLanding() {

    const textData = [
        {
          title: "Create Logs",
          text: "Jot down your thoughts"
        },
        {
          title: "View Logs",
          text: "Reflect on your journey"
        },
        {
          title: "Track Stats",
          text: "Chart your vibes"
        }
      ];

    return (
        <>
            <Carousel className="carousel-container text-center p-4">
                {textData.map((info, index) => (
                    <Carousel.Item key={index}>
                        <h5 style={{color: "#ffd972"}}>{info.title}</h5>
                        <h6 style={{color: "#fae3a5"}}>{info.text}</h6>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default CarouselLanding;