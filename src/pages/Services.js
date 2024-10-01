import React from "react";
import "../styles/services.css";
import foreground from "../img/opening2.jpg";
import background from "../img/openingPage1.jpg";
import poster from "../img/poster.png";

class Services extends React.Component {
  render() {
    return (
      <div>
        <h1 className="banner">Services For Your Inner Being</h1>
        <div className="wrapper">
          <header>
            <img
              className="background"
              id="pic"
              src={background}
              alt="pic"
            />
            <img className="foreground" id="pic" src={foreground} alt="pic" />
            <h1 className="title">Services</h1>
          </header>

          <img className="pic1" src={poster} alt="pic" />
          <li className="nav__item booking">
            <a className="nav__link" href="./appointments.html">
              Book Appointment
            </a>
          </li>
          <section className="section1">
            <h3>One on One Tarot Card Reading.</h3>
            Ask your question and I will Interpret the meaning of the cards. Let
            them guide you to the knowledge you seek.
          </section>
          <img className="pic1" src={poster} alt="pic" />
          <li className="nav__item booking">
            <a className="nav__link" href="./appointments.html">
              Book Appointment
            </a>
          </li>
          <section className="section1">
            <h4>Spiritual Counselling.</h4>
            One on One for an hour to investigate what is happening to your Inner
            Being.
          </section>
        </div>
      </div>
    );
  }
}

export default Services;
