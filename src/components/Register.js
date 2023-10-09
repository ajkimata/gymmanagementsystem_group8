import React from "react";
import styled from "styled-components";

const RegisterContainer = styled.div`
  background-color: #999999;
  border-radius: 60px;
  height: 1024px;
  overflow: hidden;
  position: relative;
  width: 1720px;
`;

const FormContainer = styled.div`
  height: 401px;
  left: 167px;
  position: absolute;
  top: 479px;
  width: 414px;
`;

const DivContainer = styled.div`
  height: 401px;
  position: relative;
`;

const RememberMeContainer = styled.div`
  height: 22px;
  left: 292px;
  position: absolute;
  top: 218px;
  width: 120px;
`;

const Frame = styled.div`
  border: 1px solid;
  border-color: #d6fd51;
  border-radius: 3px;
  height: 18px;
  left: 0;
  position: absolute;
  top: 0;
  width: 18px;
`;

const TextWrapper = styled.div`
  color: #1c1c1c;
  font-family: "Poppins-SemiBold", Helvetica;
  font-size: 12px;
  font-weight: 600;
  left: 30px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 1px;
`;

const TextFieldsContainer = styled.div`
  align-items: flex-start;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 196px;
  left: 2px;
  position: absolute;
  top: 0;
  width: 410px;
`;

const UsernameContainer = styled.div`
  align-self: stretch;
  background-color: #ffffff;
  flex: 1;
  flex-grow: 1;
  position: relative;
  width: 100%;
`;

const GroupContainer = styled.div`
  height: 18px;
  left: 55px;
  position: absolute;
  top: 18px;
  transform: rotate(-0.16deg);
  width: 74px;
`;

const TextWrapper2 = styled.div`
  color: #1c1c1c;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 72px;
`;

const BxUser = styled.img`
  height: 24px;
  left: 15px;
  position: absolute;
  top: 15px;
  width: 24px;
`;

const EmailContainer = styled.div`
  background-color: #ffffff;
  height: 52px;
  margin-right: -3.95px;
  position: relative;
  width: 414px;
`;

const Group2Container = styled.div`
  height: 19px;
  left: 51px;
  position: absolute;
  top: 17px;
  transform: rotate(-0.16deg);
  width: 40px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  color: #1c1c1c;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  position: absolute;
  top: 0;
  width: 38px;
`;

const MdiLightEmail = styled.img`
  height: 24px;
  left: 16px;
  position: absolute;
  top: 14px;
  width: 24px;
`;

const PasswordContainer = styled.div`
  background-color: #ffffff;
  height: 50px;
  margin-right: -3.95px;
  position: relative;
  width: 414px;
`;

const IconamoonEyeLight = styled.img`
  height: 24px;
  left: 374px;
  position: absolute;
  top: 13px;
  width: 24px;
`;

const CircumLock = styled.img`
  height: 24px;
  left: 8px;
  position: absolute;
  top: 13px;
  width: 24px;
`;

const TextWrapper3 = styled.div`
  color: #000000;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  left: 43px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 15px;
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  height: 50px;
  left: 0;
  position: absolute;
  top: 262px;
  width: 416px;
`;

const OverlapGroup = styled.div`
  background-color: #d6fd51b2;
  height: 50px;
  position: relative;
  width: 414px;
`;

const TextWrapper4 = styled.div`
  color: #000000;
  font-family: "Cabin-Medium", Helvetica;
  font-size: 16px;
  font-weight: 500;
  left: 171px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: right;
  top: 20px;
  width: 55px;
`;

const AlreadyHaveAn = styled.p`
  color: transparent;
  font-family: "Urbanist-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 94px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: right;
  top: 342px;
  white-space: nowrap;
`;

const Span = styled.span`
  color: #ffffff;
`;

const TextWrapper5 = styled.span`
  color: #d6fd51;
  font-family: "Urbanist-Bold", Helvetica;
  font-weight: 700;
`;

const SeperaterContainer = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 16px;
  left: 288px;
  position: absolute;
  top: 448px;
`;

const Line = styled.img`
  height: 1px;
  object-fit: cover;
  position: relative;
  width: 60px;
`;

const TextWrapper6 = styled.div`
  color: #d6fd51;
  font-family: "Cabin-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const GloginContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #d2d2d2;
  height: 52px;
  left: 164px;
  position: absolute;
  top: 376px;
  width: 418px;
`;

const Frame2 = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: inline-flex;
  gap: 12px;
  left: 117px;
  position: relative;
  top: 15px;
`;

const Google = styled.img`
  height: 20px;
  object-fit: cover;
  position: relative;
  width: 20px;
`;

const TextWrapper7 = styled.div`
  color: #2e2e2e;
  font-family: "Cabin-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const HeadingContainer = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
  left: 183px;
  position: absolute;
  top: 273px;
`;

const P = styled.p`
  color: #000000;
  font-family: "Urbanist-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const TextWrapper8 = styled.div`
  color: #000000;
  font-family: "Bebas Neue-Regular", Helvetica;
  font-size: 68px;
  font-weight: 400;
  left: 67px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 178px;
  width: 656px;
`;

const Image = styled.img`
  height: 1024px;
  left: 757px;
  position: absolute;
  top: 0;
  width: 956px;
`;

const Powerhouse = styled.p`
  color: transparent;
  font-family: "Calligraphy Brillian-Regular", Helvetica;
  font-size: 36px;
  font-weight: 400;
  left: 59px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 62px;
`;

const TextWrapper9 = styled.span`
  color: #d61c4e;
`;

const TextWrapper10 = styled.span`
  color: #d6fd51;
  font-family: "Inter-BoldItalic", Helvetica;
  font-style: italic;
  font-weight: 700;
`;

export const Register = () => {
  return (
    <RegisterContainer className="register">
      <FormContainer className="form">
        <DivContainer className="div">
          <RememberMeContainer className="remember-me">
            <Frame className="frame" />
            <TextWrapper className="text-wrapper">Remember me</TextWrapper>
          </RememberMeContainer>
          <TextFieldsContainer className="textfields">
            <UsernameContainer className="username">
              <GroupContainer className="group">
                <TextWrapper2 className="text-wrapper-2">Username</TextWrapper2>
              </GroupContainer>
              <BxUser className="bx-user" alt="Bx user" src="bx-user.svg" />
            </UsernameContainer>
            <EmailContainer className="email">
              <Group2Container className="group-2">
                <Input className="input" placeholder="Email" type="email" />
              </Group2Container>
              <MdiLightEmail
                className="mdi-light-email"
                alt="Mdi light email"
                src="mdi-light-email.svg"
              />
            </EmailContainer>
            <PasswordContainer className="password">
              <IconamoonEyeLight
                className="iconamoon-eye-light"
                alt="Iconamoon eye light"
                src="iconamoon-eye-light.svg"
              />
              <CircumLock
                className="circum-lock"
                alt="Circum lock"
                src="circum-lock.svg"
              />
              <TextWrapper3 className="text-wrapper-3">Password</TextWrapper3>
            </PasswordContainer>
          </TextFieldsContainer>
          <Button className="button">
            <OverlapGroup className="overlap-group">
              <TextWrapper4 className="text-wrapper-4">Register</TextWrapper4>
            </OverlapGroup>
          </Button>
          <AlreadyHaveAn className="already-have-an">
            <Span className="span">Already have an account? </Span>
            <TextWrapper5 className="text-wrapper-5">Login</TextWrapper5>
          </AlreadyHaveAn>
        </DivContainer>
      </FormContainer>
      <SeperaterContainer className="seperater">
        <Line className="line" alt="Line" src="line-2.svg" />
        <TextWrapper6 className="text-wrapper-6">Or</TextWrapper6>
        <Line className="line" alt="Line" src="line-1.svg" />
      </SeperaterContainer>
      <GloginContainer className="glogin">
        <Frame2 className="frame-2">
          <Google className="google" alt="Google" src="google-1.png" />
          <TextWrapper7 className="text-wrapper-7">
            Continue With Google
          </TextWrapper7>
        </Frame2>
      </GloginContainer>
      <HeadingContainer className="heading">
        <P className="p">Please Sign Up for an awesome experience</P>
      </HeadingContainer>
      <TextWrapper8 className="text-wrapper-8">
        WELCOME TO POWERHOUSE GYM
      </TextWrapper8>
      <Image className="image" alt="Image" src="https://images.pexels.com/photos/6740309/pexels-photo-6740309.jpeg?auto=compress&cs=tinysrgb&w=400.png" />
      <Powerhouse className="powerhouse">
        <TextWrapper10 className="text-wrapper-10">Powerhouse</TextWrapper10>
      </Powerhouse>
    </RegisterContainer>
  );
};
