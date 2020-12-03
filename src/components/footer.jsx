import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/main.css"
import "../css/social-media.css";
import "bootstrap/dist/js/bootstrap.min.js";

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small bg-alpha mt-auto">
        <div className="container-fluid">
          <div className="row justify-content-center">
            {
              this.props.items.map((item, index) => {
                return (
                  <a className={item.social} href={item.src} key={index}></a>
                );
              })
            }
          </div>

          <div className="footer-copyright text-center py-1 white-font">© 2020 Copyright:
          <a className="yellow-font" href="https://mdbootstrap.com/"> Antonio Raúl Guijarro Contreras</a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;