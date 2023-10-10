// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home



import React from "react";
import "./styles/style.css";

const Home = () => {
  return (
    <div className="main-landing-page">
      <div className="overlap-group">
        <img className="image" alt="Image" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg" />
        <div className="rectangle" />
        <p className="text-wrapper">REACH YOUR LIMITS AND GET TO THE NEXT LEVEL</p>
        <img className="img" alt="Rectangle" src="rectangle-2.svg" />
        <p className="div">
        Regular physical activity can improve your muscle strength and boost your endurance.
        Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.
        And when your heart and lung health improve, you have more energy to tackle daily chores.
        </p>
        <div className="rectangle-2" />
        <div className="text-wrapper-2">LEARN MORE</div>
        <div className="text-wrapper-3">JOIN NOW</div>
        <img className="group" alt="Group" src="group-4.png" />
        <div className="text-wrapper-4">SOCIAL</div>
        <img className="line" alt="Line" src="line-1.svg" />
        <div className="navbar">
          <div className="bx-bx-search-alt-wrapper">
            <img className="bx-bx-search-alt" alt="Bx bx search alt" src="bx-bx-search-alt-2.svg" />
          </div>
        </div>
        <p className="powerhouse">
          <span className="span">P</span>
          <span className="text-wrapper-10">owerhouse</span>
        </p>
      </div>
    </div>
  );
};
export default Home;