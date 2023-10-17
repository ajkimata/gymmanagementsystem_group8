// import React from "react";
// import "./styles/style.css";
// import styled from "styled-components";
// import { Link } from "react-router-dom"; 

// const LinkContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// `;

// const NextLink = styled(Link)`
//   color: black; 
//   text-decoration: none; 
//   font-weight: 700;
//   font-family: "Smooch Sans-Bold", Helvetica;
//   display: inline-block; 
//   text-align: center; 
//   width: 100%;
// `;

// const RegisterLink = styled.a`
//   color: black; 
//   text-decoration: none; 
// `;

// const Login = () => {
//   return (
//     <div className="user-login-page">
//       <img
//         className="rectangle"
//         alt="Rectangle"
//         src="https://d2dzi65yjecjnt.cloudfront.net/984641-5.jpg"
//       />
//       <div className="overlap">
//         <div className="frame">
//           <div className="group">
//             <div className="text-wrapper">Welcome</div>
//             <p className="div">We are glad you are working out with us</p>
//           </div>

//           <div className="overlap-wrapper">
//             <div className="overlap-2">
//               <div className="text-wrapper-3">Password</div>
//               <img className="img" alt="Frame" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHZ-yIurzqBWnkQMLgjbFUZpO2pLfE42hC_poX74&s" />
//             </div>
//           </div>
//           <div className="div-wrapper">
//             <div className="overlap-2">
//               <div className="text-wrapper-3">Username</div>
//               <img className="img" alt="Frame" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpAnV7Eqy1ajdV__BGRrAU9KkCa3aJGDly4funAkQzosa99R5KIOe4oFG4e_H3cNfgFw&usqp=CAU" />
//             </div>
//           </div>
//           <div className="group-2">
//           <div className="overlap-3">
//             <LinkContainer>
//               <NextLink to="/classes">NEXT</NextLink>
//             </LinkContainer>
//           </div>
//           </div>
//           <p className="don-t-have-account">
//             <span className="text-wrapper-5">Don’t have an account? </span>
//             <span className="text-wrapper-6">
//               <RegisterLink href="/register">Register Now</RegisterLink>
//             </span>
//           </p>
//         </div>
//         <p className="powerhouse">
//           <span className="text-wrapper-7">P</span>
//           <span className="text-wrapper-8">owerhouse</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React from "react";
import "./styles/style.css";
import styled from "styled-components";
import { Link } from "react-router-dom"; 

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NextLink = styled(Link)`
  color: black; 
  text-decoration: none; 
  font-weight: 700;
  font-family: "Smooch Sans-Bold", Helvetica;
  display: inline-block; 
  text-align: center; 
  width: 100%;
`;

const RegisterLink = styled.a`
  color: black; 
  text-decoration: none; 
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px; 
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 11px;
  text-align: center; 
  line-height: 1.6; 
 
`;

const Login = () => {
  return (
    <div className="user-login-page">
      <img
        className="rectangle"
        alt="Rectangle"
        src="https://d2dzi65yjecjnt.cloudfront.net/984641-5.jpg"
      />
      <div className="overlap">
        <div className="frame">
          <div className="group">
            <div className="text-wrapper">Welcome</div>
            <p className="div">We are glad you are working out with us</p>
          </div>

          <div className="overlap-wrapper">
            <div className="overlap-2">
              <img className="img" alt="Frame" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHZ-yIurzqBWnkQMLgjbFUZpO2pLfE42hC_poX74&s" />
              <InputContainer>
                <StyledInput type="password" placeholder="Password" />
              </InputContainer>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-2">
              <img className="img" alt="Frame" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpAnV7Eqy1ajdV__BGRrAU9KkCa3aJGDly4funAkQzosa99R5KIOe4oFG4e_H3cNfgFw&usqp=CAU" />
              <InputContainer>
                <StyledInput type="text" placeholder="Username" />
              </InputContainer>
            </div>
          </div>
          <div className="group-2">
            <div className="overlap-3">
              <LinkContainer>
                <NextLink to="/classes">NEXT</NextLink>
              </LinkContainer>
            </div>
          </div>
          <p className="don-t-have-account">
            <span className="text-wrapper-5">Don’t have an account? </span>
            <span className="text-wrapper-6">
              <RegisterLink href="/register">Register Now</RegisterLink>
            </span>
          </p>
        </div>
        <p className="powerhouse">
          <span className="text-wrapper-7">P</span>
          <span className="text-wrapper-8">owerhouse</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
