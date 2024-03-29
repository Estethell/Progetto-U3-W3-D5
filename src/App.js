import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import NavBarButtom from "./components/NavBarBottom";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <NavBar />
          <MainSection />
          <NavBarButtom />
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
