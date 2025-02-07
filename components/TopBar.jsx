import { Container, Dropdown, FormGroup, Nav, Navbar } from "react-bootstrap";
import "./TopBar.css";
import { BellFill, Search } from "react-bootstrap-icons";

const TopBar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={props.src} width={props.width} height={props.height} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Link className="fw-bold" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              Tv Shows
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              My List
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <FormGroup id="searchForm" class="d-flex my-2 my-lg-0 " role="search">
              <input className="form-control me-2" type="search" placeholder="Cerca sul sito" aria-label="Search" />
              <button className="btn btn-outline-danger my-2 my-sm-0 mx-2" type="submit">
                Cerca
              </button>
            </FormGroup>
            <Nav.Link href="#">
              <Search color="white" />
            </Nav.Link>
            <Nav.Link className="fw-bold text-white" href="#">
              KIDS
            </Nav.Link>
            <Nav.Link href="#">
              <BellFill />
            </Nav.Link>

            <Dropdown align="end" className="d-inline mx-2">
              <Dropdown.Toggle id="custom-dropdown" as="div" className="p-0 border-0 bg-transparent">
                <img src="../avatar.png" alt="User" width="40px" />
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark" container="body">
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Item href="#">Contattaci</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
