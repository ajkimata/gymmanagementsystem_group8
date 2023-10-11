// import React from "react";
// import "./styles/style.css";

// const Classes = () => {
//   return (
//     <div className="frame">
//     <div className="classes-book-now">
//       <p className="text-wrapper">REGISTER FOR A CLASS TODAY</p>
//       <div className="overlap">
//         <img className="image" alt="Image2" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400-1.png" />
//         <div className="div">ADVANCED</div>
//       </div>
//       <div className="overlap-group">
//         <img className="img" alt="Image1" src="https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=400" />
//         <div className="text-wrapper-2">INTERMEDIATE</div>
//       </div>
//       <div className="overlap-2">
//         <img className="image-2" alt="Image3" src="https://images.pexels.com/photos/1886487/pexels-photo-1886487.jpeg?auto=compress&cs=tinysrgb&w=400" />
//         <div className="div">BEGINNER</div>
//       </div>
//       <p className="join-our-advanced">
//         <span className="span">Join</span>
//         <span className="text-wrapper-3">
//           {" "}
//           our advanced gym class designed for seasoned fitness ethusiats
//         </span>
//       </p>
//       <p className="achieve-your-fitness">
//         <span className="span">Achieve</span>
//         <span className="text-wrapper-3">
//           {" "}
//           your fitness goals by establishing a tailored fitness routine
//         </span>
//       </p>
//       <p className="explore-our-beginner">
//         <span className="span">Explore</span>
//         <span className="text-wrapper-3">
//           {" "}
//           our beginner-friendly classes perfect for those new to fitness.
//         </span>
//       </p>
//       <div className="frame">
//         <div className="text-wrapper-4">Enroll now</div>
//       </div>
//       <div className="div-wrapper">
//         <div className="text-wrapper-4">Enroll now</div>
//       </div>
//       <div className="frame-2">
//         <div className="text-wrapper-4">Enroll now</div>
//       </div>
//       <div className="navbar">
//         <div className="group">
//           <img
//             className="bx-bx-search-alt"
//             alt="Bx bx search alt"
//             src="bx-bx-search-alt-2.svg"
//           />
//         </div>
//        </div>
//       <p className="powerhouse">
//         <span className="span">P</span>
//         <span className="text-wrapper-10">Powerhouse</span>
//       </p>
//     </div>
//     </div>
//   );
// };
// export default Classes;


import React from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";

export const Classes = () => {
  return (
    <div className="classes-book-now">
      <p className="text-wrapper">REGISTER FOR A CLASS TODAY</p>
      <div className="overlap">
        <img className="image" alt="Image2" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400-1.png" />
        <div className="div">ADVANCED</div>
      </div>
      <div className="overlap-group">
        <img className="img" alt="Image1" src="https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <div className="text-wrapper-2">INTERMEDIATE</div>
      </div>
      <div className="overlap-2">
        <img className="image-2" alt="Image3" src="https://images.pexels.com/photos/1886487/pexels-photo-1886487.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <div className="div">BEGINNER</div>
      </div>
      <p className="join-our-advanced">
        <span className="span"><Link to={"/register"}>Join</Link></span>
        <span className="text-wrapper-3">
          {" "}
          our advanced gym class designed for seasoned fitness ethusiats
        </span>
      </p>
      <p className="achieve-your-fitness">
        <span className="span"><Link to={"/register"}>Achieve</Link></span>
        <span className="text-wrapper-3">
          {" "}
          your fitness goals by establishing a tailored fitness routine
        </span>
      </p>
      <p className="explore-our-beginner">
        <span className="span"><Link to={"/register"}>Explore</Link></span>
        <span className="text-wrapper-3">
          {" "}
          our beginner-friendly classes perfect for those new to fitness.
        </span>
      </p>
      <div className="frame">
        <div className="text-wrapper-4">Enroll now</div>
      </div>
      <div className="div-wrapper">
        <div className="text-wrapper-4">Enroll now</div>
      </div>
      <div className="frame-2">
        <div className="text-wrapper-4">Enroll now</div>
      </div>
      <div className="navbar">
        <div className="group">
          <img
            className="bx-bx-search-alt"
            alt="Bx bx search alt"
            src="bx-bx-search-alt-2.svg"
          />
        </div>
       </div>
      <p className="powerhouse">
        <span className="span">P</span>
        <span className="text-wrapper-10">owerhouse</span>
      </p>
    </div>
  );
};
