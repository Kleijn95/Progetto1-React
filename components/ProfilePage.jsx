import { Component } from "react";
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { Pen } from "react-bootstrap-icons";
import "./ProfilePage.css";
class ProfilePage extends Component {
  render() {
    return (
      <Container id="containerProfile">
        <h1 className="display-4 fw-semibold mb-0 text-white">Edit Profile</h1>
        <hr />
        <Row>
          <Col lg={3}>
            <div className="position-relative content-box">
              <img
                src="../avatar.png"
                className="img-fluid object-fit-cover rounded border border-10 border-info shadow"
                alt="profilepic"
              />
              <Pen className="position-absolute iconPen"></Pen>
            </div>
          </Col>
          <Col lg={9}>
            <Form>
              <fieldset disabled>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Strive Student" className="bg-secondary text-white" />
                </Form.Group>
              </fieldset>
            </Form>
            <p className="mb-1">Language:</p>
            <DropdownButton id="dropdown-basic-button" title="English" variant="dark">
              <Dropdown.Item href="#">Italian</Dropdown.Item>
              <Dropdown.Item href="#">Spanish</Dropdown.Item>
              <Dropdown.Item href="#">Russian</Dropdown.Item>
            </DropdownButton>
            <hr />
            <p className="lead">Maturity Settings</p>
            <Button variant="dark" className="fw-bold mb-2" disabled>
              ALL MATURITY RATINGS
            </Button>
            <h6 className="lead text-white">
              Show titles of <span style={{ fontWeight: 600 }}>all maturity settings</span> for this profile.
            </h6>
            <Button variant="secondary" className="mb-2 btn-sm px-3">
              EDIT
            </Button>
            <hr className="mb-3" />
            <p className="fs-4 mb-1">Autoplay Controls</p>
            <Form.Check
              type="checkbox"
              label="Autoplay episode on a series on all devices"
              id="autoplay1"
              className="p-2 checkbox-bg"
            />
            <Form.Check
              type="checkbox"
              label="Autoplay previews while browsing on all devices"
              id="autoplay2"
              className="p-2 checkbox-bg"
            />
          </Col>
        </Row>
        <hr className="mt-3" />
        <div style={{ display: "flex", padding: 0, gap: "1rem" }}>
          <Button variant="light" className="fw-bold btn-lg px-4">
            SAVE
          </Button>
          <Button variant="dark" className="btn-lg px-3">
            CANCEL
          </Button>
          <Button variant="dark" className="btn-lg px-3">
            DELETE PROFILE
          </Button>
        </div>
      </Container>
    );
  }
}

export default ProfilePage;
