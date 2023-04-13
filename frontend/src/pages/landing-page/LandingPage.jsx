import React from "react";
import "./LandingPage.css";
import { Button, Container, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <div className="hero-container">
          <Row>
            <div className="hero-text">
              <div>
                <h1 className="title">
                  Welcome to <span>Notz</span>
                </h1>
                <p className="subtitle">Write you Heart out...</p>
              </div>
            </div>

            <div className="buttonsContainer">
            <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </a>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
