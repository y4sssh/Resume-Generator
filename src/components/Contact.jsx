import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";
// import ContactUs from './images/ContactUs.png'

const StyledForm = styled(Form)`
  /* background-color: rgba(0,0,1, 0.2); */
  background: white;
  /* box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff; */
  /* backdrop-filter: blur(20px); */
  color: #1a202c;
  border-radius: 10px;
  /* font-family: Garamond, serif; */
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;
  margin-top: 40px;
  /* margin-left: 35px; */
  margin-bottom: 35px;
  /* box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.22), 1px 0px 0px 0px rgba(0,0,0,0.22), 1px 2px 0px 0px rgba(0,0,0,0.22), 2px 1px 0px 0px rgba(0,0,0,0.22), 2px 3px 0px 0px rgba(0,0,0,0.22), 3px 2px 0px 0px rgba(0,0,0,0.22), 3px 4px 0px 0px rgba(0,0,0,0.22), 4px 3px 0px 0px rgba(0,0,0,0.22), 4px 5px 0px 0px rgba(0,0,0,0.22), 5px 4px 0px 0px rgba(0,0,0,0.22), 5px 6px 0px 0px rgba(0,0,0,0.22), 6px 5px 0px 0px rgba(0,0,0,0.22), 6px 7px 0px 0px rgba(0,0,0,0.22), 7px 6px 0px 0px rgba(0,0,0,0.22), 7px 8px 0px 0px rgba(0,0,0,0.22), 8px 7px 0px 0px rgba(0,0,0,0.22); */

  input[type="text"],
  input[type="email"],
  textarea {
    border: 2px solid grey;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  input[type="text"]:first-of-type {
    margin-top: 1rem;
  }

  @media (max-width: 767px) {
    /* styles for screens with a maximum width of 767 pixels */
    height: auto;
    width: 100%;
    margin: 0;
    margin-top: 40px;
    margin-bottom: 40px;

    input[type="text"],
    input[type="email"],
    textarea {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }

    input[type="text"]:first-of-type {
      margin-top: 0.5rem;
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: grey;
  // box-shadow: 1px 2px 14px 0px black;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 1rem 0;
  border: none;

  &:hover {
    background-color: black;
    /* border-color: #023e8a; */
  }

  @media (max-width: 767px) {
    /* adjust button styling for mobile screens */
    margin: 1rem auto;
    width: 100%;
  }
`;

const StyledSection = styled.section`
  /* background-image: url(); */
  background: #d2ebf7;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  height: 100%;
  /* background-color: #00203FFF; */
`;

const Contact = () => {
  return (
    <StyledSection id="contact">
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={{ span: 8 }}>
            <StyledForm>
              <h2
                className="text-center mt-4 mb-3"
                style={{ fontSize: "45px", fontWeight: "700" }}
              >
                Get in Touch
              </h2>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <StyledButton type="submit" block="true" className="form_button">
                Send Message
              </StyledButton>
            </StyledForm>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Contact;
