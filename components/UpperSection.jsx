import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Grid, List } from "react-bootstrap-icons";

const UpperSection = () => {
  return (
    <Container fluid className="px-4">
      <Row>
        <Col className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <h2>TV Shows</h2>

            <Dropdown className="ms-1">
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-genres"
                className="rounded-0 btn-sm"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark" className="rounded-0">
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
                <Dropdown.Item href="#">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-none d-md-block">
              <List className="fs-1 px-2" />
            </div>
            <div className="d-none d-md-block">
              <Grid className="fs-1 px-2" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UpperSection;
