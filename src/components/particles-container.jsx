import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Config from "../config/particlesjs-config.json";
import "../css/main.css";

class ParticlesContainer extends Component {
  render() {
    return (
      <div className="particle-background">
        <Particles
          height={window.outerHeight}
          params={Config}/>
      </div>
    )
  }
};

export default ParticlesContainer;