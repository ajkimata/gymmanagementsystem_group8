import React from "react";
import "./styles/plan.css";

function Plan() {
  return (
    <div className="plans-page">
      <div className="unlock-plans">
        <p className="gothic-word">
          Unlock the Full Potential of Your
          <br />
          Fitness with Our Membership Plans
        </p>
        <span>
          We offer a range of membership options designed to meet your needs and
          help you achieve your goals.
        </span>
      </div>

      <div className="payment-card-container">
        <div className="basic-card">
          <p className="gothic-word"> Basic membership</p>
          <p className="gothic-word">Kshs.1000</p>
          <span>/Month</span>
          <hr />
          <p>
            Includes access to our gym facilities
            <br />
            and group fitness classes
          </p>
          <button>Join Now</button>
        </div>
        <div className="premium-card">
          <p className="gothic-word"> Premium membership</p>
          <p className="gothic-word">Kshs.5000</p>
          <span>/Month</span>
          <hr />
          <p>
            Includes all the benefits of our Basic Membership, plus unlimited
            access to our premium
            <br />
            amenities, such as sauna and steam rooms, personal training
            sessions, and more.
          </p>
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
