import React from 'react'
import "./about.css"

const Team = () => {
  return (
    <div className="background-div">

        <div className="frame-13"
         style={{ 
            width: '100%', 
            height: '80vh', 
            position: 'absolute', 
            top: '10vh'
        }}>

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
                <img className="image-5" src="image 16.png" alt="trainer-1" />
                <div className="button">
                    <div className="trainer-1">CYNTHIA</div>
                </div>
            </div>
                
            <div className="rectangle-container">
                <img className="image-16" src="image 15.png" alt="trainer-2" />
                <div className="button2">
                    <div className="trainer-2">ALEX</div>
                </div>  
            </div>

            <div className="rectangle-container">
                <img className="image-15" src="image 12.png" alt="trainer-3" />
                <div className="button3">
                    <div className="trainer-3">ALFRED</div>
                </div>    
            </div>

            <div className="rectangle-container">
                <img className="image-15" src="image 11.png" alt="trainer-4" />
                <div className="button4">
                    <div className="trainer-4">MOFFAT</div>
                </div>     
            </div>
            </div>
        </div>

    </div>
    );
};

export default Team;
