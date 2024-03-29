import { Col } from "react-bootstrap";
import { Navbar, Button, Form, Nav } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { HouseFill, BookFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { searchMusic } from "../redux/actions/action";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <Col lg={2}>
      <Navbar className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Navbar.Brand href="/">
            <img src={logo} alt="Spotify Logo" style={{ width: "131px", height: "40px" }} />
          </Navbar.Brand>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Nav variant="pills" className="d-flex flex-column">
              <Nav.Item>
                <Nav.Link href="/">
                  <div className="d-flex">
                    <HouseFill size={25} />
                    <p className="px-1 m-1">Home</p>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <div className="d-flex">
                    <BookFill size={25} />
                    <p className="px-1 m-1">Your Library</p>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Form
                  className="input-group mt-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(searchMusic(e.target["0"].value));
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <Button className="btn btn-outline-secondary btn-sm h-100 bg-black" type="submit">
                      GO
                    </Button>
                  </div>
                </Form>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <div>
            <Nav.Link className="d-inline" href="/">
              Cookie Policy
            </Nav.Link>{" "}
            |
            <Nav.Link className="d-inline" href="/">
              {" "}
              Privacy
            </Nav.Link>
          </div>
        </div>
      </Navbar>
    </Col>
  );
};

export default NavBar;
