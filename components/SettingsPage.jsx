import { Col, Container, Row } from "react-bootstrap";
import { BadgeHd, CreditCard, Paypal } from "react-bootstrap-icons";
import "./SettingsPage.css";
import { Component } from "react";
class SettingsPage extends Component {
  render() {
    return (
      <Container className="mt-3">
        <h1>Account</h1>
        <hr className="mb-2" />

        <Row>
          <Col md={4}>
            <p>MEMBERSHIP AND BILLING</p>
            <button style={{ backgroundColor: "#E1E1E1" }} type="button" className="btn rounded-0 text-black">
              Cancel subscription
            </button>
          </Col>
          <Col md={8}>
            <div className="d-flex justify-content-between">
              <p className="fw-bold">{this.props.email}</p>
              <a href="#">Change account email</a>
            </div>
            <div className="d-flex justify-content-between">
              <p>Password: *********</p>
              <a href="#">Change password</a>
            </div>
            <div className="d-flex justify-content-between">
              <p>{this.props.phone}</p>
              <a href="#">Change phone number</a>
            </div>
            <hr className="mb-2" />
            <div className="d-flex justify-content-between">
              <div>
                <CreditCard className="mx-2"></CreditCard>
                <Paypal className="me-2"></Paypal>
                <span className="fw-bold">{this.props.paypal}</span>
              </div>
              <a href="#">
                Update Billing info <br />
                Billing Details
              </a>
            </div>
            <hr className="mb-2" />
            <div className="row text-end">
              <div className="col">
                <div className="d-flex"></div>
                <div>
                  <a href="#">Redeem gift card or promo code</a>
                </div>
                <div>
                  <a href="#">Where to buy gift cards</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="mt-2 mb-1" />

        <div className="row">
          <div className="col">PLAN DETAILS</div>
          <div className="col">
            <span className="fw-bold">
              {this.props.accountVersion}{" "}
              <span>
                <BadgeHd></BadgeHd>
              </span>
            </span>
          </div>
          <div className="col text-end">
            <a href="#">Change plan</a>
          </div>
          <hr className="mt-1" />
        </div>

        <div className="row">
          <div className="col-4">SETTINGS</div>
          <div className="col">
            <a href="#">Parental Control</a>
            <br />
            <a href="#">Test Participation</a>
            <br />
            <a href="#">Manage download devices</a>
            <br />
            <a href="#">Activate a device</a>
            <br />
            <a href="#">Recent device streaming activity</a>
            <br />
            <a href="#">Sign out of all devices</a>
          </div>
          <hr className="mt-1" />
        </div>

        <div className="row">
          <div className="col-4">MY PROFILE</div>
          <div className="col-8">
            <div className="d-flex justify-content-between">
              <div>
                <img className="inline-block" style={{ maxHeight: "50px" }} src={this.props.profilePic} alt="Avatar" />
                <span> Strive Student</span>
              </div>
              <div>
                <div>
                  <a href="#">Redeem gift card or promo code</a>
                </div>
                <div>
                  <a href="#">Where to buy gift cards</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col offset-4 mt-4">
            <div className="row">
              <div className="col-6">
                <div>
                  <a href="#">Language</a>
                </div>
                <div>
                  <a href="#">Playback Settings</a>
                </div>
                <div>
                  <a href="#">Subtitle appearance</a>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <a href="#">Viewing Activity</a>
                </div>
                <div>
                  <a href="#">Ratings</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default SettingsPage;
