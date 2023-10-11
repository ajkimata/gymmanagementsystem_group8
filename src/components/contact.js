import React from "react";
import styled from "styled-components";

const ContactUsWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const OverlapWrapper = styled.div`
  background-color: #ffffff;
  height: 1024px;
  overflow: hidden;
  width: 1720px;
`;

const Overlap = styled.div`
  height: 1024px;
  left: -2px;
  position: relative;
  width: 1722px;
`;

const Image = styled.img`
  height: 707px;
  left: 2px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1719px;
`;

const Group = styled.div`
  height: 436px;
  left: 0;
  position: absolute;
  top: 588px;
  width: 1722px;
`;

const OverlapGroup = styled.div`
  background-image: url(https://images.pexels.com/photos/6390236/pexels-photo-6390236.jpeg?auto=compress&cs=tinysrgb&w=400);
  background-size: 100% 100%;
  height: 436px;
  left: 2px;
  position: relative;
  width: 1720px;
`;

const Vector = styled.img`
  height: 4px;
  left: 735px;
  position: absolute;
  top: 89px;
  width: 9px;
`;

const Div = styled.div`
  height: 441px;
  left: 109px;
  position: absolute;
  top: 549px;
  width: 1526px;
`;

const ElementDesignAllright = styled.div`
  color: #d6fd51;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 19.9px;
  font-weight: 600;
  left: 628px;
  letter-spacing: 0.5px;
  line-height: 29.9px;
  position: absolute;
  top: 411px;
  white-space: nowrap;
  width: 307px;
`;

const Group2 = styled.div`
  height: 242px;
  left: 0;
  position: absolute;
  top: 87px;
  width: 82px;
`;

const TextWrapper = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 55px;
  white-space: nowrap;
  width: 53px;
`;

const TextWrapper2 = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 158px;
  white-space: nowrap;
  width: 71px;
`;

const TextWrapper3 = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 106px;
  white-space: nowrap;
  width: 72px;
`;

const TextWrapper4 = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 210px;
  white-space: nowrap;
  width: 60px;
`;

const TextWrapper5 = styled.div`
  color: #d6fd51;
  font-family: "Open Sans-Bold", Helvetica;
  font-size: 19.9px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0.5px;
  line-height: 34px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 59px;
`;

const TextWrapper6 = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 136px;
  letter-spacing: 0.5px;
  line-height: 30.6px;
  position: absolute;
  top: 143px;
  white-space: nowrap;
  width: 105px;
`;

const TextWrapper7 = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 136px;
  letter-spacing: 0.5px;
  line-height: 30.6px;
  position: absolute;
  top: 201px;
  white-space: nowrap;
  width: 105px;
`;

const TextWrapper8 = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 136px;
  letter-spacing: 0.5px;
  line-height: 30.6px;
  position: absolute;
  top: 259px;
  white-space: nowrap;
  width: 86px;
`;

const TextWrapper9 = styled.div`
  color: #d6fd51;
  font-family: "Open Sans-Bold", Helvetica;
  font-size: 19.9px;
  font-weight: 700;
  left: 136px;
  letter-spacing: 0.5px;
  line-height: 34px;
  position: absolute;
  top: 87px;
  white-space: nowrap;
  width: 60px;
`;

const TextWrapper10 = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 297px;
  letter-spacing: 0.5px;
  line-height: 30.6px;
  position: absolute;
  top: 144px;
  white-space: nowrap;
  width: 55px;
`;

const TextWrapper11 = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 297px;
  letter-spacing: 0.5px;
  line-height: 30.6px;
  position: absolute;
  top: 201px;
  white-space: nowrap;
  width: 71px;
`;

const TextWrapper12 = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 297px;
  letter-spacing: 0.5px;
  line-height: 30.6px;
  position: absolute;
  top: 259px;
  white-space: nowrap;
  width: 39px;
`;

const TextWrapper13 = styled.div`
  color: #d6fd51;
  font-family: "Open Sans-Bold", Helvetica;
  font-size: 19.9px;
  font-weight: 700;
  left: 297px;
  letter-spacing: 0.5px;
  line-height: 34px;
  position: absolute;
  top: 88px;
  white-space: nowrap;
  width: 93px;
`;

const Img = styled.img`
  height: 6px;
  left: 495px;
  position: absolute;
  top: 0;
  width: 7px;
`;

const Rectangle = styled.div`
  background-color: #ffffff;
  height: 4px;
  left: 0;
  opacity: 0.16;
  position: absolute;
  top: 386px;
  width: 1508px;
`;

const Overlap2 = styled.div`
  height: 52px;
  left: 1253px;
  position: absolute;
  top: 299px;
  width: 255px;
`;

const Social = styled.img`
  height: 52px;
  left: 202px;
  position: absolute;
  top: 0;
  width: 53px;
`;

const Social2 = styled.div`
  height: 52px;
  left: 0;
  position: absolute;
  top: 0;
  width: 243px;
`;

const InstagramWrapper = styled.div`
  background-image: url(./oval.svg);
  background-size: 100% 100%;
  height: 52px;
  left: 107px;
  position: absolute;
  top: 0;
  width: 53px;
`;

const Instagram = styled.img`
  height: 17px;
  left: 17px;
  position: absolute;
  top: 17px;
  width: 18px;
`;

const FacebookWrapper = styled.div`
  background-image: url(./oval-2.svg);
  background-size: 100% 100%;
  height: 52px;
  left: 0;
  position: absolute;
  top: 0;
  width: 53px;
`;

const Facebook = styled.img`
  height: 17px;
  left: 21px;
  position: absolute;
  top: 18px;
  width: 10px;
`;

const Vector2 = styled.img`
  height: 18px;
  left: 214px;
  position: absolute;
  top: 17px;
  width: 29px;
`;

const OverlapGroupWrapper = styled.div`
  height: 74px;
  left: 575px;
  position: absolute;
  top: 409px;
  width: 488px;
`;

const Overlap3 = styled.div`
  border-radius: 9.97px;
  height: 74px;
  position: relative;
  width: 486px;
`;

const TextWrapper14 = styled.div`
  color: #ffffff;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 19px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 21px;
  white-space: nowrap;
  width: 217px;
`;

const Group3 = styled.div`
  border: 1px solid;
  border-color: #d6fd51;
  border-radius: 9.97px;
  height: 74px;
  left: 0;
  position: absolute;
  top: 0;
  width: 486px;
`;

const DivWrapper = styled.div`
  height: 54px;
  left: 327px;
  position: absolute;
  top: 10px;
  width: 148px;
`;

const OverlapGroup2 = styled.div`
  background-color: #d6fd51;
  border-radius: 9.97px;
  height: 54px;
  position: relative;
  width: 146px;
`;

const TextWrapper15 = styled.div`
  color: #000000;
  font-family: "Open Sans-SemiBold", Helvetica;
  font-size: 17.9px;
  font-weight: 600;
  left: 36px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 11px;
  white-space: nowrap;
  width: 75px;
`;

const P = styled.p`
  color: #ffffff;
  font-family: "Open Sans-Bold", Helvetica;
  font-size: 35.9px;
  font-weight: 700;
  left: 670px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 216px;
  width: 384px;
`;

const Navbar = styled.div`
  height: 70px;
  left: 350px;
  position: absolute;
  top: 53px;
  width: 1147px;
`;

const BxBxSearchAltWrapper = styled.div`
  height: 35px;
  left: 920px;
  position: absolute;
  top: 14px;
  width: 100px;
`;

const BxBxSearchAlt = styled.img`
  height: 35px;
  left: 65px;
  position: absolute;
  top: 0;
  width: 35px;
`;

const Powerhouse = styled.p`
  color: transparent;
  font-family: "Calligraphy Brillian-Regular", Helvetica;
  font-size: 36px;
  font-weight: 400;
  left: 68px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 52px;
`;

const Span = styled.span`
  color: #d61c4e;
`;

const TextWrapper21 = styled.div`
  color: #d6fd51;
  font-family: "Inter-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;

export const Contact = () => {
  return (
    <ContactUsWrapper>
      <OverlapWrapper>
        <Overlap>
          <Image
            className="image"
            alt="Image"
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400-1.png"
          />
          <Group>
            <OverlapGroup>
              <Vector className="vector" alt="Vector" src="vector.svg" />
            </OverlapGroup>
          </Group>
          <Div>
            <ElementDesignAllright className="element-design-allright">
              2023&nbsp;&nbsp;Design. Allright reserved
            </ElementDesignAllright>
            <Group2>
              <TextWrapper className="text-wrapper">Home</TextWrapper>
              <TextWrapper2 className="text-wrapper-2">Services</TextWrapper2>
              <TextWrapper3 className="text-wrapper-3">Trainers</TextWrapper3>
              <TextWrapper4 className="text-wrapper-4">Pricing</TextWrapper4>
              <TextWrapper5 className="text-wrapper-5">Menu</TextWrapper5>
            </Group2>
            <TextWrapper6 className="text-wrapper-6">Individual</TextWrapper6>
            <TextWrapper7 className="text-wrapper-7">Corporate</TextWrapper7>
            <TextWrapper8 className="text-wrapper-8">Monthly</TextWrapper8>
            <TextWrapper9 className="text-wrapper-9">Class</TextWrapper9>
            <TextWrapper10 className="text-wrapper-10">About</TextWrapper10>
            <TextWrapper11 className="text-wrapper-11">Contact</TextWrapper11>
            <TextWrapper12 className="text-wrapper-12">QnA</TextWrapper12>
            <TextWrapper13 className="text-wrapper-13">About us</TextWrapper13>
            <Img
              className="img"
              alt="Vector"
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400-1.png"
            />
            <Rectangle className="rectangle" />
            <Overlap2 className="overlap-2">
              <Social
                className="social"
                alt="Social"
                src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-128.png"
              />
              <Social2 className="social-2">
                <InstagramWrapper className="instagram-wrapper">
                  <Instagram
                    className="instagram"
                    alt="Instagram"
                    src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-128.png"
                  />
                </InstagramWrapper>
                <FacebookWrapper className="facebook-wrapper">
                  <Facebook
                    className="facebook"
                    alt="Facebook"
                    src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-128.png"
                  />
                </FacebookWrapper>
                <Vector2 className="vector-2" alt="Vector" src="" />
              </Social2>
            </Overlap2>
          </Div>
          <OverlapGroupWrapper className="overlap-group-wrapper">
            <Overlap3 className="overlap-3">
              <TextWrapper14 className="text-wrapper-14">
                Enter your email address
              </TextWrapper14>
              <Group3 className="group-3" />
              <DivWrapper className="div-wrapper">
                <OverlapGroup2 className="overlap-group-2">
                  <TextWrapper15 className="text-wrapper-15">
                    Join now
                  </TextWrapper15>
                </OverlapGroup2>
              </DivWrapper>
            </Overlap3>
          </OverlapGroupWrapper>
          <P className="p">Stay up to date with our story</P>
          <Navbar className="navbar">
            <BxBxSearchAltWrapper className="bx-bx-search-alt-wrapper">
              <BxBxSearchAlt
                className="bx-bx-search-alt"
                alt="Bx bx search alt"
                src="bx-bx-search-alt-2.svg"
              />
            </BxBxSearchAltWrapper>
          </Navbar>
          <Powerhouse className="powerhouse">
            <Span className="span">P</Span>
            <TextWrapper21 className="text-wrapper-21">owerhouse</TextWrapper21>
          </Powerhouse>
        </Overlap>
      </OverlapWrapper>
    </ContactUsWrapper>
  );
};
