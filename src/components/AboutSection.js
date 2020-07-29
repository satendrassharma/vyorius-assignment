import React from "react";
import headerRight from "../assets/header-right.png";

export default function AboutSection() {
  return (
    <section>
      <div className="container">
        <div className="left">
          <h4 className="text-orange">CONNECTING THE DISCONNECTED</h4>
          <h1>
            <span className="text-orange">Vyorius</span> brings unmanned robots
            <span className="text-orange"> together</span>,<br />
            wherever they are
          </h1>
          <p>
            With all of the operations, commanding and maintenance tools in one
            place, unmanned vehicles will stay connected and productive no
            matter where you’re Delivering
          </p>
          <div className="buttons">
            <button className="btn btn-primary btn-large">Try Vyorius</button>
            <button className="btn btn-reverse btn-large">Learn More</button>
          </div>
          <p className="get-started">
            Need to order a delivery? <a href="/">Get Started</a>
          </p>
        </div>
        <div className="right">
          <img src={headerRight} alt="about vyorius" />
        </div>
      </div>
    </section>
  );
}
