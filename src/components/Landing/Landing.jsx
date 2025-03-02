import { Link } from "react-router-dom"
import CarouselLanding from "../CarouselLanding/CarouselLanding";
import { Container } from "react-bootstrap";
import CardLanding from "../CardLanding/CardLanding";
import Button from 'react-bootstrap/Button';

const Landing = () => {
  return (
    <div>
      <Container>
        <CarouselLanding />

        <div className="mb-3 mt-5 text-center" style={{display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', alignItems: 'center'}}>
          <h1 className="nori-text">Welcome to </h1>
          <h1 className="fw-bold mb-5"> 
            <span className="mentai-text">Mentai</span> 
            <span className="nori-text">-</span>  
            <span className="salmon-text">Log</span>
          </h1>
          
          <h6 className="mt-3 w-50" style={{ color: "#fcdb7f" }}>Your thoughts deserve a home — start journaling today to capture your dreams, untangle your emotions, and discover the power of your own voice.</h6>
          
          <div className="mt-5 mb-5 " style={{ display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', alignItems: 'center'}}>
            <Button variant="warning" className="mt-3 w-90">
                <Link to="/sign-up" style={{ textDecoration: 'none', color: 'inherit' }}>
                    New here? Start Logging Now
                </Link>
            </Button>

            <Link to="/sign-in" style={{ color: "#a5a196" }}>
                Already have an account? Continue logging
            </Link>
          </div>
        </div>

        <CardLanding />

      </ Container>
    </div>
  );
};

export default Landing;






