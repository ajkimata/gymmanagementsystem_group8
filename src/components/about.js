import React from "react";
import "./styles/style.css";

const AboutUs = () => {
  return (
    <div className="meet-the-team">
      <div className="overlap-group">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="rectangle-89.svg" />
          <img className="image" alt="Image" src="image-16.png" />
        </div>
        <div className="div">
          <img className="rectangle" alt="Rectangle" src="rectangle-90.svg" />
          <img className="img" alt="Image" src="image-15.png" />
        </div>
        <div className="overlap-2">
          <img className="rectangle" alt="Rectangle" src="rectangle-91.svg" />
          <img className="image-2" alt="Image" src="image-12.png" />
        </div>
        <div className="overlap-3">
          <img className="rectangle-2" alt="Rectangle" src="rectangle-92.svg" />
          <img className="image-3" alt="Image" src="image-11.png" />
        </div>
        <div className="overlap-4">
          <div className="text-wrapper">MEET THE TEAM</div>
          <div className="frame">
            <img className="vector" alt="Vector" src="vector.svg" />
            <img className="vector-2" alt="Vector" src="vector-2.svg" />
            <img className="vector-3" alt="Vector" src="vector-3.svg" />
          </div>
          <p className="powerhouse">
            <span className="span">P</span>
            <span className="text-wrapper-2">owerhouse</span>
          </p>
          <div className="navbar">
            <div className="group">
              <img className="bx-bx-search-alt" alt="Bx bx search alt" src="bx-bx-search-alt-2.svg" />
            </div>
            <div className="text-wrapper-3">HOME</div>
            <div className="text-wrapper-4">CLASSES</div>
            <div className="text-wrapper-5">LOG IN</div>
            <div className="text-wrapper-6">ABOUT US</div>
            <div className="text-wrapper-7">CONTACT US</div>
          </div>
        </div>
        <div className="button-wrapper">
          <button className="button">
            <div className="text-wrapper-8">CYNTHIA</div>
          </button>
        </div>
        <div className="div-wrapper">
          <button className="button-2">
            <div className="text-wrapper-8">ALEX</div>
          </button>
        </div>
        <div className="group-2">
          <button className="button-3">
            <div className="text-wrapper-9">ALFRED</div>
          </button>
        </div>
        <div className="group-3">
          <button className="button-4">
            <div className="text-wrapper-8">MOFFAT</div>
          </button>
        </div>
        <div className="browse-all-trainers">
          <div className="text-wrapper-10">Browse All Trainers</div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;