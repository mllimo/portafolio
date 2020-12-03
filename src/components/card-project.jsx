import * as React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/main.css";
import "../css/languages.css";
import "../css/card.css";

import MAP_LANGUAGES from "../config/language.json";

//TODO: Meter links
class CardProject extends React.Component {

  goUrl() {
    window.open(this.props.url, '_blank');
  }

  render() {
    return (
      <div className="card mb-3 bg-darkness cursor-pointer" onClick={this.goUrl.bind(this)}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={this.props.img}
              className="card-img card-image-size"
              alt={this.props.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">
                {this.props.text}
              </p>
            </div>
            <div className="d-flex flex-row-reverse flex-wrap full-size-absolute align-content-end">
              {
                this.props.languages.map((lenguage, index) => {
                  return (
                    <div key={index} className="p-2">
                      <span className={"dot-" + MAP_LANGUAGES[lenguage]}>●</span><span className="strong-font">{lenguage}</span>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CardProject;