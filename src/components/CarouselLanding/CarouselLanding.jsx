import Carousel from 'react-bootstrap/Carousel';
import './CarouselLanding.css';
import Chartpic from '../../assets/Chart.png';
import Createpic from '../../assets/CreateLog.png';
import Viewpic from '../../assets/ViewLogs.png';

function CarouselLanding() {

    const textData = [
        {
          title: "Create Logs",
          text: "Jot down your thoughts",
          image: Createpic
        },
        {
          title: "View Logs",
          text: "Reflect on your journey",
          image: Viewpic
        },
        {
          title: "Track Stats",
          text: "Chart your vibes",
          image: Chartpic
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
                            <img src={info.image} alt={info.title} className="carousel-image" />
                        </div>
      
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default CarouselLanding;