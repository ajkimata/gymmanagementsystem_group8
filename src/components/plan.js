import React from "react";
import "./styles/plan.css";

function Plan() {
  return (
    <div className="plans-page">
      <div className="unlock-plans">
        <h1 className="gothic-word">
          Unlock the Full Potential of Your Fitness with Our Membership Plans
        </h1>
        <p>
          We offer a range of membership options designed to meet your needs and
          help you achieve your goals.
        </p>
      </div>

      <div className="payment-card-container">
        <div className="basic-card">
          <h2 className="gothic-word">Basic membership</h2>
          <p className="price gothic-word">Kshs.1000</p>
          <span>/Month</span>
          <hr />
          <p>Includes access to our gym facilities and group fitness classes</p>
          <button className="basic-button">Join Now</button>
        </div>

        <div className="premium-card">
          <h2 className="gothic-word">Premium membership</h2>
          <p className="price gothic-word">Kshs.5000</p>
          <span>/Month</span>
          <hr />
          <p>
            Includes all the benefits of our Basic Membership, plus unlimited
            access to our premium amenities, such as sauna and steam rooms,
            personal training sessions, and more.
          </p>
          <button className="premium-button">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
