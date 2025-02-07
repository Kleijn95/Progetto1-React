import { Container, Navbar } from "react-bootstrap";

const TopBarProfilePage = (props) => {
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={props.src} width={props.width} height={props.height} alt="Logo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TopBarProfilePage;
