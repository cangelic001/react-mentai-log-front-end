import { Link } from "react-router-dom"
import CarouselLanding from "../CarouselLanding/CarouselLanding";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Landing = () => {
  return (
    <div>
      <Container>
    
        <div className="mb-1 mt-5 text-center" style={{display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', alignItems: 'center'}}>
          <h1 className="fw-bold mb-1"> 
            <span className="mentai-text display-3"><strong>Mentai</strong></span> 
            <span className="nori-text display-3"><strong>-</strong></span>  
            <span className="salmon-text display-3"><strong>Log</strong></span>
          </h1>
          
          <h6 className="mt-1 w-50" style={{ color: "#fcdb7f" }}>Your thoughts deserve a home — start journalling today to capture your dreams, untangle your emotions, and discover the power of your own voice.</h6>
          
          <div className="mt-1" style={{ display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', alignItems: 'center'}}>
            <Button variant="warning" className="mt-1 w-90 text-white">
                <Link to="/sign-up" style={{ textDecoration: 'none', color: 'inherit' }}>
                    New here? Start Logging Now
                </Link>
            </Button>

            <Link to="/sign-in" style={{ color: "#a5a196" }}>
                Already have an account? Continue logging
            </Link>
          </div>

          <CarouselLanding />

        </div>

      </ Container>
    </div>
  );
};

export default Landing;






