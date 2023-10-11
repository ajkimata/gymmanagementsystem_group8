// import { Button } from "bootstrap";
import styled from "styled-components";

const MainLandingPageChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #c4c4c4;
  width: 1920px;
  height: 1080px;
`;
const Image1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1720px;
  height: 1080px;
  object-fit: cover;
`;
const MainLandingPageItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.35);
  width: 1920px;
  height: 1080px;
`;
const ReachYourLimits = styled.b`
  position: absolute;
  top: 291px;
  left: 534px;
  font-size: 64px;
  line-height: 85px;
  display: inline-block;
  font-family: Poppins;
  width: 658px;
`;
const MainLandingPageInner = styled.img`
  position: absolute;
  top: 720px;
  left: 522px;
  width: 306px;
  height: 90px;
`;
const LoremIpsumDolor = styled.div`
  position: absolute;
  top: 573px;
  left: 416px;
  font-size: 18px;
  font-weight: 500;
  font-family: Poppins;
  display: inline-block;
  width: 887px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 720px;
  left: 904px;
  background-color: #d6fd51;
  width: 306px;
  height: 90px;
`;
const LearnMore = styled.b`
  position: absolute;
  top: 751px;
  left: 590px;
  color: #ffff;
`;
const JoinNow = styled.b`
  position: absolute;
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
// const FrameChild = styled.img`
//   position: absolute;
//   top: 14px;
//   left: 920px;
//   width: 100px;
//   height: 35px;
// `;

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
  border-radius: 30px;
  background-color: #fff;
  width: 100%;
  height: 1080px;
  overflow: hidden;
  text-align: center;
  font-size: 24px;
  color: #fff;
  font-family: Montserrat;
`;

const Home = () => {
  return (
    <MainLandingPageRoot>
      <MainLandingPageChild />
      <Image1Icon
        alt=""
        src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400-1.png"
      />
      <MainLandingPageItem />
      <ReachYourLimits>
        REACH YOUR LIMITS AND GET TO THE NEXT LEVEL
      </ReachYourLimits>
      <MainLandingPageInner alt="" src="/rectangle-2.svg" />
      <LoremIpsumDolor>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </LoremIpsumDolor>
      <RectangleDiv />
      <a href="/register">
        <JoinNow>JOIN NOW</JoinNow>
      </a>{" "}
      {/* Link to Register page */}
      <a href="/about">
        <LearnMore>LEARN MORE</LearnMore>
      </a>{" "}
      {/* Link to About Us page */}
      <GroupIcon alt="" src="/group-4.svg" />
      <Social>SOCIAL</Social>
      <LineDiv />
      <Powerhouse>
        <P>P</P>
        <Owerhouse>owerhouse</Owerhouse>
      </Powerhouse>
    </MainLandingPageRoot>
  );
};

export default Home;
