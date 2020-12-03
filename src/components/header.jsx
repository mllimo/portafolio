import * as React from "react";
import "animate.css/animate.min.css";
import "../css/main.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="d-flex justify-content-around">
          <div className="p-2 align-self-center">
            <a className="portfolio_link animate__animated animate__slideInLeft" href="#portfolio">Antonio Raúl Guijarro Contreras</a>
          </div>
          <div className="p-2 align-self-center">
            <figure>
              <img className="logo-size" src={this.props.img} alt="icono representativo"></img>
            </figure>
          </div>
          <div className="p-2 align-self-center">
            <a className="resume_link animate__animated animate__slideInRight" href={this.props.cv} download="">Resume</a>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;