import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import cv from "./images/cv.png";
import opens from "./images/source-code.png";
import freindly from "./images/happy.png";
import free from "./images/free.png";
import desing from "./images/web-design.png";
import code from "./images/programming.png";
import github from "./images/github2.png";

const Main1 = styled.div`
  background-color: #cff2ff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-top: 70px;
  padding-bottom: 0px;
`;
const Rap = styled.p`
  font-size: 16px;
  margin-top: 10px;
  `;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 50px;
  margin-top: 10px;
  font-family: Garamond, serif;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const MainSection = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Button = styled.button`
  padding: 15px 35px;
  font-size: 20px;
  font-weight: bold;
  /* background-color: #10c479; */
  background-color: #021547;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 40px;

  &:hover {
    /* background-color: #30856a; */
    // background-color: #7a9cfd;
    // color: black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const Button1 = styled.button`
  padding: 15px 35px;
  font-size: 20px;
  font-weight: bold;
  /* background-color: #10c479; */
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 40px;

  &:hover {
    /* background-color: #30856a; */
    background-color: #00000087;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

// font-family: Garamond, serif;

const Img = styled.img`
  width: 700px;
  height: 400px;
  object-fit: cover;
  object-position: 25% 25%;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ImageSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Main2 = styled.div`
  background-color: #eddbc5;
  color: black;
  display: flex;
  flex-direction: row;
  padding: 70px;
  @media (max-width: 768px) {
    padding: 30px;

    /* Hide the image when the screen size is less than or equal to 768px */
    ${ImageSection} {
      display: none;
    }
  }
`;

const Rancho = styled.h1`
  margin-top: 75px;
  font-weight: bold;
  font-size: 50px;
  font-family: Garamond, serif;
  text-align-last: center;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 0;
  }
`;

const Pilo = styled.p`
  margin-top: 20px;
  text-align: left;
  flex: 1;
  text-align-last: center;
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
  }
  `;

const Main3 = styled.div`
  background-color: #f1f1f1;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const Rancho1 = styled.h1`
  font-weight: bold;
  font-size: 50px;
  font-family: Garamond, serif;
  text-align: center;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Pilo1 = styled.p`
  text-align: center;
  max-width: 800px;
  line-height: 1.5;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImageSection1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
  `;

const Img1 = styled.img`
  /* width: 800px;
  height: 400px; */
  object-fit: cover;
  object-position: 25% 25%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Main4Container = styled.div`
  /* background-color: #f1f1f1; */
  background-color: #cff2ff;
  padding: 40px;
  text-align: center;
`;

const Main4Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 50px;
  font-family: Garamond, serif;
  text-align: center;
`;

const Main4IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const Main4IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main4Icon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

const Main4IconTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: Garamond, serif;
`;

const Main4IconDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  max-width: 250px;
  text-align: center;
`;




const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/resume");
  };

  return (
    <>
      <Main1>
        <Rap>ONLINE RESUME BUILDER</Rap>
        <Heading>
          You have the skills, now make your resume reflect them. Be one of the
          chosen 2%.
        </Heading>
        <MainSection className="main">
          <Button onClick={handleClick}>Create My Resume</Button>
        </MainSection>
        <Img
          src="https://uicookies.com/wp-content/uploads/edd/2017/01/onlinecv-thumb.jpg"
          alt="Resume"
        />
      </Main1>

      <Main2>
        <div>
          <Rancho>Use the best resume maker as your guide.</Rancho>
          <Pilo>
            Getting that dream job can seem like an impossible task. We’re here
            to change that. Give yourself a real advantage with the best online
            resume maker: created by experts, improved by data, trusted by
            millions of professionals
          </Pilo>
        </div>
        <ImageSection>
          <Img
            src="https://www.springboard.com/blog/wp-content/uploads/2018/09/Cyber-Security-Resume-Examples-and-Tips-to-Get-You-Hired-scaled.jpg"
            alt="Resume1"
          />
        </ImageSection>
      </Main2>
      <Main3>
        <Rancho1>
          Take your job search to the next level with our top-rated resume
          builder.
        </Rancho1>
        <Pilo1>
          Say goodbye to writer's block and endless formatting woes with our
          3-step resume builder. Create a perfect resume in minutes that will
          catch employers' attention!
        </Pilo1>
        <Button1 onClick={handleClick}>Create Resume Now</Button1>
        <ImageSection1>
          <Img
            src="/resumes-templates.png"
            alt="Resume2"
          />
        </ImageSection1>
      </Main3>


      <Main4Container>
      <Main4Title>Why Use Our Resume Builder?</Main4Title>
      <Main4IconsContainer>
        <Main4IconContainer>
          <Main4Icon src={freindly} alt="user-friendly interface" />
          <Main4IconTitle>User-friendly interface</Main4IconTitle>
          <Main4IconDescription>
            Our resume builder is designed to be easy and intuitive to use, so you can create a great resume quickly and easily.
          </Main4IconDescription>
        </Main4IconContainer>
        <Main4IconContainer>
          <Main4Icon src={cv} alt="professional resume templates" />
          <Main4IconTitle>Professional resume templates</Main4IconTitle>
          <Main4IconDescription>
            Our builder includes a wide range of professionally designed resume templates to help you create a polished and impressive resume.
          </Main4IconDescription>
        </Main4IconContainer>
        <Main4IconContainer>
          <Main4Icon src={opens} alt="open source code" />
          <Main4IconTitle>Open-source code</Main4IconTitle>
          <Main4IconDescription>
            Our resume builder is built with open-source code, meaning that it is transparent and can be audited by anyone.
          </Main4IconDescription>
        </Main4IconContainer>
        <Main4IconContainer>
          <Main4Icon src={free} alt="completely free to use" />
          <Main4IconTitle>Completely free to use</Main4IconTitle>
          <Main4IconDescription>
            Our resume builder is completely free to use. You can create and download as many resumes as you want.
          </Main4IconDescription>
        </Main4IconContainer>
      </Main4IconsContainer>
    </Main4Container>

    <MainSection5>
        <Icon src={desing} alt="Design Icon" />
        <Text>Do you want to make your own templates?</Text>
        <Plus>+</Plus>
        <Icon src={code} alt="Code Icon" />
        <Text>Do you write React code?</Text>
        <Equal>=</Equal>
        <Icon src={github} alt="Code Icon" />
        <Button5> <a href="https://github.com/y4sssh/Resume-Generator">Contribute</a></Button5>
    </MainSection5>
    </>
  );
};

export default Main;


const MainSection5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px;
  background-color: #f1f1f1;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }
`;

const Icon = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

const Text = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0;
  font-family: Garamond, serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Plus = styled.span`
  font-size: 2.5rem;
  margin: 0 1.5rem;
  padding-right: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Equal = styled.span`
  font-size: 2.5rem;
  margin: 0 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button5 = styled.button`
  padding: 15px 35px;
  font-size: 20px;
  font-weight: bold;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

// const IconContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 1.5rem;

//   @media (max-width: 768px) {
//     margin-bottom: 0.5rem;
//   }
// `;
