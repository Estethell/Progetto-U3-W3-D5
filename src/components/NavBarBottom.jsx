import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";

const NavBarButtom = () => {
  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row className=" h-100">
        <Col lg={{ span: 10, offset: 2 }}>
          <Row className=" h-100 flex-column justify-content-center align-items-center">
            <Col lg={6} md={4} className=" playerControls">
              <div className="d-flex">
                <Link to="/">
                  <img src={shuffle} alt="shuffle" />
                </Link>
                <Link to="/">
                  <img src={prev} alt="prev" />
                </Link>
                <Link to="/">
                  <img src={play} alt="play" />
                </Link>
                <Link to="/">
                  <img src={next} alt="next" />
                </Link>
                <Link to="/">
                  <img src={repeat} alt="repeat" />
                </Link>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBarButtom;
