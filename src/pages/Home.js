import React from "react";
import "../styles/style.css";
import foreground from "../img/opening2.jpg";
import background from "../img/openingPage1.jpg";
import pic1 from "../img/poster.png";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="banner">The Portal To Your Inner Being</h1>

        <div className="wrapper">
          <header>
            <img className="background" id="pic" src={background} alt="background" />
            <img className="foreground" id="picfore" src={foreground} alt="foreground" />
          </header>

          <img className="pic1" src={pic1} alt="pic" />
          <h1 className="title">Welcome to Lola's Dusk</h1>

          <section className="section1">
            Kerri Dawn brings to her readings more than 20 years' experience with Tarot.
            With her extensive studies over the years in the Esoteric Arts, including
            occult, religion, astrology, numerology, symbolism, energy healing, and more,
            she considers herself an intuitive spiritual therapist...
          </section>

          <section className="section1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </section>

          <img className="pic1" src="/randomImages/13.jpg" alt="pic" />
          <section className="section1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </section>

          <img className="pic1" src="/randomImages/24.jpg" alt="pic" />
          <section className="section1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </section>

          <img className="pic1" src="/randomImages/default2.jpg" alt="pic" />
          <section className="section1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </section>

          <div>
            <footer>Copyright@ 2023 Lola Dusk</footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
