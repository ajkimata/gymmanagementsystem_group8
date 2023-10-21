import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const StyledLandingPage = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(/Assets/LandingPage.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  color: #fff;
  font-family: Montserrat;
  padding: 4rem 2rem 2rem 2rem; // Added horizontal padding and adjusted top padding
`;

const Title = styled.h1`
  font-size: 4vw;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem; // Increased space below the title
  letter-spacing: 1px; // Small letter spacing to match the design

  @media (max-width: 600px) {
    font-size: 5vw;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2vw;
  font-weight: 500;
  text-align: center;
  max-width: 900px;
  margin-bottom: 3rem; // Increased space below the subtitle
  color: #b7b7b7;

  @media (max-width: 600px) {
    font-size: 2vw;
  }
`;

const StyledButton = styled(Link)`
  display: inline-block;
  background-color: #d6fd51;
  color: #000;
  padding: 10px 25px; // Fixed padding for better control
  font-weight: 700;
  text-decoration: none;
  margin: 0.5rem;
  transition: background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adding a shadow to the buttons

  &:hover {
    background-color: #c5e542;
  }

  @media (max-width: 600px) {
    padding: 12px 24px; // Adjusted padding for mobile
  }
`;

const SocialBar = styled.div`
  position: absolute;
  bottom: 1rem; // Bring it closer to the bottom edge
  left: 80%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  color: #b7b7b7;
`;

const SocialLabel = styled.span`
  font-weight: 600;
  margin-right: 1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  & > * {
    margin: 0 0.5rem;
  }
`;

const Home = () => {
  return (
    <StyledLandingPage>
      <Title>
        REACH YOUR LIMITS
        <br />
        AND GET TO THE
        <br />
        NEXT LEVEL
      </Title>
      <Subtitle>
        Unlock Your Full Potential At Powerhouse, we believe that fitness is
        more than just a routine – it's a lifestyle. Our state-of-the-art
        facilities and dedicated trainers ensure that every member gets the
        personalized attention they deserve. Whether you're a seasoned athlete
        or just starting out, our community is here to support and empower you
        every step of the way. Take the leap and transform your body, mind, and
        spirit. Dive into a diverse range of classes, from high-octane cardio
        workouts to calming yoga sessions. At Powerhouse, every day is a chance
        to challenge yourself, exceed your limits, and become the best version
        of you. Join our family and experience the difference.
      </Subtitle>
      <div>
        <StyledButton to="/about">LEARN MORE</StyledButton>
        <StyledButton to="/register">JOIN NOW</StyledButton>
      </div>
      <SocialBar>
        <SocialLabel>SOCIAL</SocialLabel>
        <SocialIcons>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcons>
      </SocialBar>
    </StyledLandingPage>
  );
};

export default Home;
