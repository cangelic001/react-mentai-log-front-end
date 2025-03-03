import Carousel from 'react-bootstrap/Carousel';
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
                        <div className="carousel-box">
                            <h5 style={{ color: "#ffa50a" }}>{info.title}</h5>
                            <h6 style={{ color: "#ff94a6" }}>{info.text}</h6>
                        </div>
                        
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default CarouselLanding;