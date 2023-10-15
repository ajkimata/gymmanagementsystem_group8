// import React from "react";
// import "./styles/style.css";
// import { Link } from "react-router-dom";


// export const Register = () => {
//   return (
//   <div className="register">
//       <div className="form">
//         <div className="div">
//           <div className="remember-me">
//             <div className="frame" />
//             <div className="text-wrapper">Remember me</div>
//           </div>
//           <div className="textfields">
//             <div className="username">
//               <div className="group">
//                 <div className="text-wrapper-2">Username</div>
//               </div>
//               <img className="bx-user" alt="Bx user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpAnV7Eqy1ajdV__BGRrAU9KkCa3aJGDly4funAkQzosa99R5KIOe4oFG4e_H3cNfgFw&usqp=CAU" />
//             </div>
//             <div className="email">
//               <div className="group-2">
//               </div>
//               <img className="mdi-light-email" alt="Mdi light email" src="https://e7.pngegg.com/pngimages/300/204/png-clipart-computer-icons-email-email-miscellaneous-angle.png" />
//               <div className="text-wrapper-3">  Email</div>
//             </div>
//             <div className="password">
//               <img className="circum-lock" alt="Circum lock" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHZ-yIurzqBWnkQMLgjbFUZpO2pLfE42hC_poX74&s" />
//               <div className="text-wrapper-3">Password</div>
//             </div>
//           </div>
//           <button className="button">
//             <div className="overlap-group">
//               <div className="text-wrapper-4">Register</div>
//             </div>
//           </button>
//           <Link to="/login">
//           <p className="already-have-an">
//             <span className="span">Already have an account? </span>
//             <span className="text-wrapper-5">Login</span>
//           </p>
//           </Link>
//         </div>
//       </div>
//       <img
//           className="rectangle"
//           alt="Rectangle"
//           src="https://images.pexels.com/photos/16358993/pexels-photo-16358993.jpeg?cs=srgb&dl=pexels-darkmode-cinema-16358993.jpg&fm=jpg"
//         />
//       <div className="seperater">
//         <img className="line" alt="Line" src="line-2.svg" />
//         <div className="text-wrapper-6">Or</div>
//         <img className="line" alt="Line" src="line-1.svg" />
//       </div>
//       <div className="glogin">
//         <div className="frame-2">
//           <img className="google" alt="Google" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
//           <div className="text-wrapper-7">Continue With Google</div>
//         </div>
//       </div>
//       <div className="heading">
//         <p className="p">Please Sign Up for an awesome experience</p>
//       </div>
//       <div className="text-wrapper-8">WELCOME TO POWERHOUSE GYM</div>
//       <p className="powerhouse">
//         <span className="text-wrapper-9">P</span>
//         <span className="text-wrapper-10">owerhouse</span>
//       </p>
//     </div>
//   );
// };




import React from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="register">
      <div className="form">
        <div className="div">
          <div className="remember-me">
            <div className="frame" />
            <div className="text-wrapper">Remember me</div>
          </div>
          <div className="textfields">
            <div className="username">
              <div className="group">
                <div className="text-wrapper-2">Username</div>
              </div>
              <img
                className="bx-user"
                alt="Bx user"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpAnV7Eqy1ajdV__BGRrAU9KkCa3aJGDly4funAkQzosa99R5KIOe4oFG4e_H3cNfgFw&usqp=CAU"
              />
            </div>
            <div className="email">
              <div className="group-2"></div>
              <img
                className="mdi-light-email"
                alt="Mdi light email"
                src="https://e7.pngegg.com/pngimages/300/204/png-clipart-computer-icons-email-email-miscellaneous-angle.png"
              />
              <div className="text-wrapper-3">  Email</div>
            </div>
            <div className="password">
              <img
                className="circum-lock"
                alt="Circum lock"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHZ-yIurzqBWnkQMLgjbFUZpO2pLfE42hC_poX74&s"
              />
              <div className="text-wrapper-3">Password</div>
            </div>
          </div>
          <button className="button">
            <div className="overlap-group">
              <div className="text-wrapper-4">Register</div>
            </div>
          </button>
          <Link to="/login">
            <p className="already-have-an">
              <span className="span">Already have an account? </span>
              <span className="text-wrapper-5">Login</span>
            </p>
          </Link>
        </div>
      </div>
      <img
        className="rectangle"
        alt="Rectangle"
        src="https://images.pexels.com/photos/16358993/pexels-photo-16358993.jpeg?cs=srgb&dl=pexels-darkmode-cinema-16358993.jpg&fm=jpg"
      />
      <div className="seperater">
        <img className="line" alt="Line" src="line-2.svg" />
        <div className="text-wrapper-6">Or</div>
        <img className="line" alt="Line" src="line-1.svg" />
      </div>
      <div className="glogin">
        <div className="frame-2">
          <img
            className="google"
            alt="Google"
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          />
          <div className="text-wrapper-7">Continue With Google</div>
        </div>
      </div>
      <div className="heading">
        <p className="p">Please Sign Up for an awesome experience</p>
      </div>
      <div className="text-wrapper-8">WELCOME TO POWERHOUSE GYM</div>
      <p className="powerhouse">
        <span className="text-wrapper-9">P</span>
        <span className="text-wrapper-10">owerhouse</span>
      </p>
    </div>
  );
};



