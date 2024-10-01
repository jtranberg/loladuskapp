import React from "react";
import "../styles/socials.css";

class Socials extends React.Component {
  render() {
    return (
      <div>
        <h1 className="banner">Socials to connect to your Inner Being</h1>
        <div className="icons">
          <div className="socials">
            <a
              title="Youtube"
              className="youtube"
              href="https://www.youtube.com/@kerritranberg6254"
              rel="noreferrer"
              target="_blank"
            ></a>
            <a
              title="Facebook Link"
              className="facebook"
              href="http://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            ></a>
            <a
              title="Instagram Link"
              className="instagram"
              href="http://www.Instagram.com"
              rel="noreferrer"
              target="_blank"
            ></a>
            {/* <a title="Rumble" className="rumble" href="http://www.rumble.com" rel="noreferrer" target="_blank"></a>
            <a title="Discord" className="discord" href="http://www.discord.com" rel="noreferrer" target="_blank"></a> */}
            <a
              title="Twitter link"
              className="twitter"
              href="http://www.twitter.com"
              rel="noreferrer"
              target="_blank"
            ></a>
          </div>
        </div>
        <section className="paragraph">
          Please enjoy the further content and connections on the "Socials."
        </section>
      </div>
    );
  }
}

export default Socials;
