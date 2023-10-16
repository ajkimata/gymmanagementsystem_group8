import React from 'react'
import "./about.css"

const AboutUs = () => {
  return (
    <div className="about-container">
      <div>
        <p>
          <span className="P">P</span>OWERHOUSE
        </p>
      </div>
      <div className="images-and-shapes">
        {/* Image 1 */}
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
              fontSize="14"
              dominantBaseline="middle"
            >
              Discover a variety of weightlifting
            </text>
            <text
              x="50%"
              y="30%"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              dominantBaseline="middle"
            >
              routines and routine training techniques
            </text>
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              dominantBaseline="middle"
            >
              to achieve your bodybuilding goals.
            </text>
          </svg>
        </div>
        {/* Image 2 */}
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
              fontSize="14"
              dominantBaseline="middle"
            >
              We offer specialized training to help burn
            </text>
            <text
              x="50%"
              y="30%"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              dominantBaseline="middle"
            >
              calories, improve endurance, and reach
            </text>
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              dominantBaseline="middle"
            >
              your weight loss targets through cardio workouts.
            </text>
          </svg>
        </div>
        {/* Image 3 */}
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
              fontSize="14"
              dominantBaseline="middle"
            >
              Join our fitness classes tailored for
            </text>
            <text
              x="50%"
              y="30%"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              dominantBaseline="middle"
            >
              overall wellness that helps
            </text>
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              fill="white"
              fontSize="14"
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
      <div className="background-div">
        <img
          src="image5.png"
          alt="background-image"
          style={{
            width: '100%',
            height: '160vh',
            objectFit: 'cover',
            position: 'absolute',
            top: '95vh', 
          }}
        />

        <div className="frame-13" style={{ width: '100%', height: '50vh', position: 'relative' , top: 660 }}>

              <div className="header-container">
                <span className="meet-the-team-text">MEET THE TEAM</span>
                <div className="arrow-container">
                  <img src="Vector.png" alt="Arrow 1" className="arrow-image" />
                  <img src="Vector.png" alt="Arrow 2" className="arrow-image" />
                  <img src="Vector.png" alt="Arrow 3" className="arrow-image" />
                </div>
              </div>


          
              <div className="meet-the-team">
                <div className="rectangle-container">
                  <img className="image-5" src="image 16.png" alt="Image 5" />
                  <div className="button">
                    <div className="cynthia">CYNTHIA</div>
                  </div>
                  
                </div>
                
                <div className="rectangle-container">
                  <img className="image-16" src="image 15.png" alt="Image 16" />
                  <div className="button2">
                    <div className="alex">ALEX</div>
                  </div>
                  
                </div>
                <div className="rectangle-container">
                  <img className="image-15" src="image 12.png" alt="Image 15" />
                  <div className="button3">
                    <div className="alfred">ALFRED</div>
                  </div>
                  
                </div>
                    <div className="rectangle-container">
                    <img className="image-15" src="image 11.png" alt="Image 15" />
                      <div className="button4">
                        <div className="alfred">MOFFAT</div>
                      </div>
                      
                </div>
              </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
