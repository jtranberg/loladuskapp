import React from "react";
import "../styles/services.css";
import foreground from "../img/opening2.jpg";
import background from "../img/openingPage1.jpg";
import poster from "../img/poster.png";

class Services extends React.Component {
  render() {
    return (
      <div>
        <h1 className="banner">Let's Talk About Your Inner Being!</h1>

        <div className="wrapper">
          <header>
            <img
              className="background"
              id="pic"
              src={background}
              alt="pic"
            />

            <img className="foreground" id="pic" src={foreground} alt="pic" />
            <h1 className="title">Blog</h1>
          </header>

          <img className="pic1" src={poster} alt="pic" />
          <li className="nav__item booking">
            <a className="nav__link" href="./appointments.html">
              Book Appointment
            </a>
          </li>
          <section className="section1">
            <h1>Let's Talk.</h1>
            Kerri Dawn brings to her readings more than 20 years' experience with Tarot...
          </section>
          <section className="section1">
            <h1>Now we are Talking.</h1>
            blog, blog, blog, blog...
          </section>
          <section>
            <img className="pic1" src="./img/celestial.png" alt="pic" />
            <section className="section1">
              <h1>Keep on Talking.</h1>
              blog, blog, blog, blog...
            </section>
            <section className="section1">
              <h1>Walkin' and Talking.</h1>
              blog, blog, blog, blog...
            </section>
            <img className="pic1" src="./img/moon.png" alt="pic" />
            <section className="section1">
              <h1>Talking Up A Storm.</h1>
              blog, blog, blog, blog...
            </section>
          </section>
          <section className="section1">
            <h1>It's All In How You Talk.</h1>
            blog, blog, blog, blog...
          </section>
        </div>
      </div>
    );
  }
}

export default Services;
