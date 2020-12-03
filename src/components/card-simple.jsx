import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/card.css";

/**
 * props:
 *  - title
 *  - text
 *  - link: Optional; {text:#, src:#}
 */
class CardSimple extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this,this.props.text}</p>
          {
            this.props.links.map((item, index) => {
              return ( 
              <a className="card-link" href={item.src} key={index}>{item.text}</a>
              );  
            })
          }
        </div>
      </div>
    );
  }
};

export default CardSimple;