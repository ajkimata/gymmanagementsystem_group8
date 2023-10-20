import React from 'react'
import "./about.css"

const AboutUs = () => {
  return (
    <div className="about-container">
      <div>
        {/* <p>
          <span className="P">P</span>OWERHOUSE
        </p> */}
      </div>
      <div className="images-and-shapes">
        <div className="image-container">
          <img className="image" src="about1.png" alt="image-1" />
          <svg
            className="custom-shape"
            
            viewBox="0 0 409 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 1 }}
          >
            <path d="M61.7359 0H409L347.264 342H0L61.7359 0Z" fill="black" />
            <text 
              x="50%"
              y="10%"
              textAnchor="middle"
              fill="#D6FD51"
              fontSize="28"
              dominantBaseline="middle"
              fontStyle="italic"
              fontWeight= "bold"
            >
              BUILD MUSCLES
            </text>
            <text
              x="50%"
              y="20%"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              dominantBaseline="middle"
            >
              Discover a variety of weightlifting
            </text>
            <text
              x="50%"
              y="30%"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              dominantBaseline="middle"
            >
              routines and routine training techniques
            </text>
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              dominantBaseline="middle"
            >
              to achieve your bodybuilding goals.
            </text>
          </svg>
        </div>
        
        <div className="image-container">
          <img className="image" src="about2.png" alt="image-2" />
          <svg
            className="custom-shape"
            width="450"
            height="390"
            viewBox="0 0 409 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 1 }}
          >
            <path d="M61.7359 0H409L347.264 342H0L61.7359 0Z" fill="black" />
            <text 
              x="50%"
              y="10%"
              textAnchor="middle"
              fill="#D6FD51"
              fontSize="28"
              dominantBaseline="middle"
              fontStyle= "italic"
              fontWeight= "bold"
            >
              SHED POUNDS
            </text>
            <text
              x="50%"
              y="20%"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              dominantBaseline="middle"
            >
              We offer specialized training to help burn
            </text>
            <text
              x="50%"
              y="30%"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              dominantBaseline="middle"
            >
              calories, improve endurance, and reach your
            </text>
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              dominantBaseline="middle"
            >
              weight loss targets through cardio workouts.
            </text>
          </svg>
        </div>
     
        <div className="image-container">
          <img className="image" src="about3.png" alt="image-3" />
          <svg
            className="custom-shape"
            width="450"
            height="390"
            viewBox="0 0 409 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: 1 }}
          >
            <path d="M61.7359 0H409L347.264 342H0L61.7359 0Z" fill="black" />
            <text className='header'
              x="50%"
              y="10%"
              textAnchor="middle"
              fill="#D6FD51"
              fontSize="28"
              dominantBaseline="middle"
              fontStyle="italic"
              fontWeight= "bold"
            >
              STAY FIT
            </text>
            <text
              x="50%"
              y="20%"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              dominantBaseline="middle"
            >
              Join our fitness classes tailored for
            </text>
            <text
              x="50%"
              y="30%"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              dominantBaseline="middle"
            >
              overall wellness that helps
            </text>
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              dominantBaseline="middle"
            >
              maintain a healthy lifestyle.
            </text>
          </svg>
        </div>
      </div>
      <div style={{ width: '100%', height: '282px', position: "relative"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1720 262"
          fill="none"
          style={{  position:'absolute', top: -260, left: 0, zIndex: '0', width: '100%' }}
        >
          <path
            d="M0 48.7791C0 48.7791 59.6808 -38.2949 732.88 20.2301C1406.08 78.7551 1720 20.2303 1720 20.2303V262H0V48.7791Z"
            fill="url(#paint0_linear_270_118)"
          />
          <defs>
            <linearGradient id="paint0_linear_270_118" x1="860" y1="-32.0953" x2="860" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0.578125" stopColor="#D6FD51" />
              <stop offset="1" stopColor="#FFF4DA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AboutUs;
