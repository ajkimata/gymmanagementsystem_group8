import React from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";


export const Register = () => {
  return (
  <div className="register">
    <div className="form-container"></div>
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
              <img className="bx-user" alt="Bx user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpAnV7Eqy1ajdV__BGRrAU9KkCa3aJGDly4funAkQzosa99R5KIOe4oFG4e_H3cNfgFw&usqp=CAU" />
            </div>
            <div className="email">
              <div className="group-2">
              </div>
              <img className="mdi-light-email" alt="Mdi light email" src="https://e7.pngegg.com/pngimages/300/204/png-clipart-computer-icons-email-email-miscellaneous-angle.png" />
              <div className="text-wrapper-3">  Email</div>
            </div>
            <div className="password">
              <img className="circum-lock" alt="Circum lock" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHZ-yIurzqBWnkQMLgjbFUZpO2pLfE42hC_poX74&s" />
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
      {/* <img
          className="rectangle"
          alt="Rectangle"
          src="https://st5.depositphotos.com/62628780/62384/i/450/depositphotos_623846442-stock-photo-fitness-body-builder-woman-barbell.jpg"
        /> */}
      <div className="seperater">
        <img className="line" alt="Line" src="line-2.svg" />
        <div className="text-wrapper-6">Or</div>
        <img className="line" alt="Line" src="line-1.svg" />
      </div>
      <div className="glogin">
        <div className="frame-2">
          <img className="google" alt="Google" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" />
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



// import React from "react";
// import "./styles/style.css";
// import { Link } from "react-router-dom";

// export const Register = () => {
//   return (
//     <div className="register">
//       <div className="overlap">
//         <div className="form">
//           <div className="div">
//             <div className="remember-me">
//               <div className="frame" />
//               <div className="text-wrapper">Remember me</div>
//             </div>
//             <div className="textfields">
//               <div className="username">
//                 <div className="group">
//                   <div className="text-wrapper-2">Username</div>
//                 </div>
//                 <img className="bx-user" alt="Bx user" src="bx-user.svg" />
//               </div>
//               <div className="email">
//                 <div className="group-2">
//                   <input className="input" placeholder="Email" type="email" />
//                 </div>
//                 <img className="mdi-light-email" alt="Mdi light email" src="mdi-light-email.svg" />
//               </div>
//               <div className="password">
//                 <img className="iconamoon-eye-light" alt="Iconamoon eye light" src="iconamoon-eye-light.svg" />
//                 <img className="circum-lock" alt="Circum lock" src="circum-lock.svg" />
//                 <div className="text-wrapper-3">Password</div>
//               </div>
//             </div>
//             <button className="button">
//               <div className="overlap-group">
//                 <div className="text-wrapper-4">Register</div>
//               </div>
//             </button>
//             <Link to="/login">
//             <p className="already-have-an">
//               <span className="span">Already have an account? </span>
//               <span className="text-wrapper-5">Login</span>
//             </p>
//             </Link>
//           </div>
//           <img className="rectangle" alt="Rectangle" src="https://media1.popsugar-assets.com/files/thumbor/4yKuWXzNfa5TJbf1x1vaqFjNIek=/0x1512:3486x5229/fit-in/828x1500/filters:format_auto():extract_cover():upscale()/2022/09/14/687/n/1922729/08e47f616321f37811f542.97627203_.jpg" />
//         </div>
//         <div className="seperater">
//           <img className="line" alt="Line" src="line-2.svg" />
//           <div className="text-wrapper-6">Or</div>
//           <img className="line" alt="Line" src="line-1.svg" />
//         </div>
//         <div className="glogin">
//           <div className="frame-2">
//             <img className="google" alt="Google" src="google-1.png" />
//             <div className="text-wrapper-7">Continue With Google</div>
//           </div>
//         </div>
//         <div className="heading">
//           <p className="p">Please Sign Up for an awesome experience</p>
//         </div>
//         <div className="text-wrapper-8">WELCOME TO POWERHOUSE GYM</div>
//         <p className="powerhouse">
//           <span className="text-wrapper-9">P</span>
//           <span className="text-wrapper-10">owerhouse</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import "./styles/style.css";
// import { Link } from "react-router-dom";

// export const Register = () => {
//   return (
//     <div className="register">
//       <div className="form-container">
//         <div className="form">
//           <div className="div">
//             <div className="remember-me">
//               <div className="frame" />
//               <div className="text-wrapper">Remember me</div>
//             </div>
//             <div className="textfields">
//               <div className="username">
//                 <div className="group">
//                   <div className="text-wrapper-2">Username</div>
//                 </div>
//                 <img className="bx-user" alt="Bx user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpAnV7Eqy1ajdV__BGRrAU9KkCa3aJGDly4funAkQzosa99R5KIOe4oFG4e_H3cNfgFw&usqp=CAU" />
//               </div>
//               <div className="email">
//                 <div className="group-2">
//                 </div>
//                 <img className="mdi-light-email" alt="Mdi light email" src="https://e7.pngegg.com/pngimages/300/204/png-clipart-computer-icons-email-email-miscellaneous-angle.png" />
//                 <div className="text-wrapper-3">  Email</div>
//               </div>
//               <div className="password">
//                 <img className="circum-lock" alt="Circum lock" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHZ-yIurzqBWnkQMLgjbFUZpO2pLfE42hC_poX74&s" />
//                 <div className="text-wrapper-3">Password</div>
//               </div>
//             </div>
//             <button className="button">
//               <div className="overlap-group">
//                 <div className="text-wrapper-4">Register</div>
//               </div>
//             </button>
//             <Link to="/login">
//               <p className="already-have-an">
//                 <span className="span">Already have an account? </span>
//                 <span className="text-wrapper-5">Login</span>
//               </p>
//             </Link>
//           </div>
//         </div>
//         <img
//           className="rectangle"
//           alt="Rectangle"
//           src="https://st5.depositphotos.com/62628780/62384/i/450/depositphotos_623846442-stock-photo-fitness-body-builder-woman-barbell.jpg"
//         />
//       </div>

//       <div className="separater">
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




