import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/main.css"
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/src/collapse.js";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <img className="navbar-brand" src={process.env.PUBLIC_URL + this.props.icon} alt="icono"></img>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            {
              this.props.items.map((item, index) => {
                return ( 
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={item.src}>{item.desc}</a>
                </li>
                )
              })
            }
          </ul>

          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </nav>
    );
  }
};

export default Navbar;