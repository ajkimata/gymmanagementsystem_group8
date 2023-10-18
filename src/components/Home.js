import styled from "styled-components";
import { Link } from "react-router-dom";

const MainLandingPageChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReachYourLimits = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;

  font-family: Poppins;
`;

const LoremIpsumDolor = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-family: Poppins;
  display: inline-block;
  width: 887px;
`;

const ButtonDiv = styled.div`
  top: 720px;
  left: 522px;
  background-color: #d6fd51;
  width: 306px;
  height: 90px;
`;
const LearnMore = styled.b`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const JoinNow = styled.b`
  top: 751px;
  left: 983px;
  color: #000;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 994px;
  left: 1300px;
  width: 195px;
  height: 30px;
`;
const Social = styled.div`
  position: absolute;
  top: 994px;
  left: 1122px;
  font-size: 18px;
  font-weight: 600;
`;
const LineDiv = styled.div`
  position: absolute;
  top: 1003px;
  left: 1214px;
  border-top: 6px solid #d6fd51;
  box-sizing: border-box;
  width: 66px;
  height: 6px;
`;


const P = styled.span``;
const Owerhouse = styled.i`
  font-weight: 700;
  font-family: Inter;
  color: #d6fd51;
`;
const Powerhouse = styled.h3`
  margin: 0;
  position: absolute;
  top: 44px;
  left: 68px;
  font-size: 36px;
  color: #d61c4e;
  font-family: "Calligraphy Brillian";
`;
const MainLandingPageRoot = styled.section`
  position: relative;
  background-color: #fff;
  background-image: url(/Assets/LandingPage.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-align: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  font-family: Montserrat;
`;

const Home = () => {
  return (
    <MainLandingPageRoot>

      <MainLandingPageChild>
        <ReachYourLimits>
          REACH YOUR LIMITS
          <br />
          AND GET TO THE
          <br /> NEXT LEVEL
        </ReachYourLimits>
        <LoremIpsumDolor>
        Regular physical activity can improve your muscle strength and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve you have more energy to tackle daily activities. 
        </LoremIpsumDolor>
      
        <Link to={"/register"}>
          <JoinNow>JOIN NOW</JoinNow>
        </Link>
      
        <ButtonDiv />
        <Link to={"/about"}>
          <LearnMore>LEARN MORE</LearnMore>
        </Link>
        {/* Link to About Us page */}
        <GroupIcon alt="" src="/group-4.svg" />
        <Social>SOCIAL</Social>
        <LineDiv />
        <Powerhouse>
          <P>P</P>
          <Owerhouse>owerhouse</Owerhouse>
        </Powerhouse>{" "}
      </MainLandingPageChild>
    </MainLandingPageRoot>
  );
};

export default Home;
