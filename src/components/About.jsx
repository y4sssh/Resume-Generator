import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";

const Demo = styled.div`
  font-family: Garamond, serif;
`;

const StyledCard = styled(Card)`
  background-color: #90c2ff;
  border-radius: 10px;
  margin: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  border: none;
  font-weight: bold;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: #7bb6ff;
    border: none;
  }
`;

const Background = styled.div`
  background-color: #d2ebf7;
`;

const About = () => {
  const [contributors, setContributors] = useState([]);

  const coreDevelopers = useMemo(
    () => [
      {
        login: "MrCracker-OP",
        html_url: "https://github.com/MrCracker-OP",
        image: "https://avatars.githubusercontent.com/u/77793128?v=4",
      },
      {
        login: "Khizarshah01",
        html_url: "https://github.com/khizarshah01",
        image: "https://avatars.githubusercontent.com/u/109973520?v=4",
      },
      {
        login: "omingle-og",
        html_url: "https://github.com/omingle-og",
        image: "https://avatars.githubusercontent.com/u/161492096?v=4",
      },
      {
        login: "ShashwatAgrawal20",
        html_url: "https://github.com/shashwatagrawal20",
        image: "https://avatars.githubusercontent.com/u/72117025?v=4",
      },
      {
        login: "y4sssh",
        html_url: "https://github.com/y4sssh",
        image: "https://avatars.githubusercontent.com/u/104668751?v=4",
      },

    ],
    []
  );

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/y4sssh/Resume-Generator/contributors"
    )
      .then((response) => response.json())
      .then((data) => {
        // Filter out the contributors whose GitHub username matches with any of the core developers' GitHub username
        const filteredData = data.filter(
          (contributor) =>
            !coreDevelopers.find(
              (developer) => developer.login === contributor.login
            )
        );
        setContributors(filteredData);
      })
      .catch((error) => console.log(error));
  }, [coreDevelopers]);

  const teamHeader = "Our Team";
  const teamDescription = "Meet the amazing people who make it all possible!";

  return (
    <Demo>
      <Background>
        <Container style={{ padding: "3px" }}>
          <h2 className="text-center mt-4 fs-2 fw-bold">{teamHeader}</h2>
          <p className="text-center">{teamDescription}</p>
          <h2 className="text-center mt-4 fs-2 fw-bold">Core Contributors</h2>
          <p className="text-center">
            Thanks to the following core contributors:
          </p>
          <Row className="d-flex align-items-center justify-content-center">
            {coreDevelopers.map((developer) => (
              <Col md={4} key={developer.login}>
                <StyledCard>
                  <Card.Img
                    variant="top"
                    src={developer.image}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <a
                        href={developer.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <strong>{developer.login}</strong>
                      </a>
                    </Card.Title>
                    <Card.Subtitle className="mb-2">
                      <strong>Contributor</strong>
                    </Card.Subtitle>
                  </Card.Body>
                </StyledCard>
              </Col>
            ))}
          </Row>
          <h2 className="text-center mt-4 fs-2 fw-bold">GitHub Contributors</h2>
          <p className="text-center">
            Thanks to the following GitHub contributors:
          </p>
          <Row className="d-flex align-items-center justify-content-center">
            {contributors.map((contributor) => (
              <Col md={4} key={contributor.id}>
                <StyledCard>
                  <Card.Img
                    variant="top"
                    src={contributor.avatar_url}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <a
                        href={contributor.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <strong>
                          {contributor.name
                            ? contributor.name
                            : contributor.login}
                        </strong>
                      </a>
                    </Card.Title>
                    <Card.Subtitle className="mb-2">
                      <strong>Contributor</strong>
                    </Card.Subtitle>
                  </Card.Body>
                </StyledCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Background>
    </Demo>
  );
};
export default About;
