import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <Col lg={12} md={{ span: 9, offset: 2 }} className="mainPage">
      <Row>
        <Col lg={11} md={9} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>
      <Row>
        <Col lg={10}>
          <div id="searchResults" className="d-none">
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row className="py-3" id="rockSection">
              <Col sm={2} lg={3} xl={4} className="imgLinks">
                {/* Vedere se conviene ciclare la card con la colonna dentro */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={10}>
          <div id="pop">
            <h2>Rock Classics</h2>
            <Row className="py-3" id="popSection">
              <Col sm={2} lg={3} xl={4} className="imgLinks">
                {/* Vedere se conviene ciclare la card con la colonna dentro */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={10}>
          <div id="hiphop">
            <h2>HipHop</h2>
            <Row className="py-3" id="hipHopSection">
              <Col sm={2} lg={3} xl={4} className="imgLinks">
                {/* Vedere se conviene ciclare la card con la colonna dentro */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default MainSection;
