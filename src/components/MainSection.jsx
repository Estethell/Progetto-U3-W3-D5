import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomePageFetch from "./HomePageFetch";
import { useSelector } from "react-redux";

const MainSection = () => {
  let array = [
    {
      name: "queen",
      sectionName: "Rock Classic",
    },
    {
      name: "katyperry",
      sectionName: "Pop Classic",
    },
    {
      name: "eminem",
      sectionName: "Rap",
    },
  ];
  const selector = useSelector((state) => {
    if (state !== "") {
      array = [
        {
          name: state.music.search,
          sectionName: "Search Results",
        },
      ];
    }
    return state.music.search;
  });

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
            <Col sm={2} lg={3} xl={4} className="imgLinks"></Col>
          </div>
        </Col>
      </Row>

      {array.map((e, i) => {
        return (
          <Row>
            <Col lg={10}>
              <div id={i} className="rock">
                <h2>{e.sectionName}</h2>
                <Row className=" py-3" id="rockSection">
                  <div className="d-flex">
                    <HomePageFetch artistName={e.name} />
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        );
      })}
    </Col>
  );
};

export default MainSection;
