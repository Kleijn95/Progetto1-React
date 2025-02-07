import { Button, Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <Container className="footer-container w-50 m-auto mt-5 align-items-center">
      <div className="d-flex gap-2 mb-2 fs-4">
        <Facebook></Facebook>
        <Instagram></Instagram>
        <Twitter></Twitter>

        <Youtube></Youtube>
      </div>

      <Row>
        <Col>
          <a href="#">Audio and Subtitles</a>
        </Col>
        <Col>
          <a href="#">Audio Descriation</a>
        </Col>
        <Col>
          <a href="#">Hela Center</a>
        </Col>
        <Col>
          <a href="#">Gift Cards</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#">Media Center</a>
        </Col>
        <Col>
          <a href="#">Investor Relations</a>
        </Col>
        <Col>
          <a href="#">Jobs</a>
        </Col>
        <Col>
          <a href="#">Terms of Use</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#">arivacy</a>
        </Col>
        <Col>
          <a href="#">Legal Notices</a>
        </Col>
        <Col>
          <a href="#">Cookie areferences</a>
        </Col>
        <Col>
          <a href="#">Coraorate Information</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#">Contact Us</a>
        </Col>
      </Row>

      <Button type="button" className="footer-btn btn rounded-0 mb-3 mt-2">
        Service Code
      </Button>
      <p>&copy; 1997-2019 Netflix, Inc. i-0d00fcda2fdf9c0de</p>
    </Container>
  );
};

export default Footer;
