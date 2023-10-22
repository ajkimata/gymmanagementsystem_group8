import React from "react";
import Team from "./team"
import Review from "./review"
// import Team from "./components/team";
// import Review from "./components/review";
import "./styles/mainPage.css"; // Create this CSS file

const MainPage = () => {
  return (
    <div className="main-page-container">
      <Team />
      <Review />
    </div>
  );
};

export default MainPage;
