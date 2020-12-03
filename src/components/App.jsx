import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import CardSimple from "./card-simple.jsx";
import Carousel from "./carousel.jsx";
import CardProject from "./card-project.jsx";
import ParticlesContainer from "./particles-container.jsx";
import Header from "./header.jsx";

// CSS
import "../css/main.css";
import "../css/languages.css";
import "../css/social-media.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// Imagenes
import GameOfLifeImg from "../assets/game-of-life.png";
import HandTrackingImg from "../assets/hand-tracking.png";
import NqueensImg from "../assets/n-queens.png";
import Logo from "../assets/logo.png";
import CppLogo from "../assets/c++.png";
import JavascriptLogo from "../assets/javascript.png";
import CssLogo from "../assets/css.png";
import Html5Logo from "../assets/html5.png";
import NodejsLogo from "../assets/nodejs.png";
import ReactjsLogo from "../assets/react.png";
import SqlLogo from "../assets/sql.png";
import PythonLogo from "../assets/python.png";
import GitLogo from "../assets/git.png";

function App() {
  return (
    <div className="App">

      <ParticlesContainer></ParticlesContainer>

      <Header
        img={Logo}
        cv=""
      ></Header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-1"></div>
          <div className="col-xl-10 bg-black">
            <br></br>
            <div className="row">
              <div className="col-xl-6">
                <h1>About me</h1>
                <hr className="yellow-continous"></hr>
                <p className="justify-text font-medium-size">
                  Hello! I am a Spaniard from Tenerife who is
                  currently studying Computer Engineering at the University of La
                  Laguna. Throughout my life I have liked the world of computing that
                  has been influenced by videogames, this make me at the age of
                  thirteen begin to learn things by myself such as understanding an
                  operating system and basic programming in C++. Out of this, I have developed
                  in recent years a passion for sports such as: Running, hiking, going
                  to the gym, swimming, etc... and living more the life searching
                  adventure.
                </p>
              </div>

              <div className="col-xl-6">
                <h1>Experienced with</h1>
                <hr className="yellow-continous"></hr>
                <div className="row">
                  <div className="col-sm-4"><img src={JavascriptLogo} alt="Javascript" /></div>
                  <div className="col-sm-4"><img src={Html5Logo} alt="HTML5" /></div>
                  <div className="col-sm-4"><img src={CssLogo} alt="CSS3" /></div>
                </div>
                <div className="row">
                  <div className="col-sm-4"><img src={CppLogo} alt="C++" /></div>
                  <div className="col-sm-4"><img src={PythonLogo} alt="Python" /></div>
                  <div className="col-sm-4"><img src={SqlLogo} alt="SQL" /></div>
                </div>
                <div className="row">
                  <div className="col-sm-4"><img src={NodejsLogo} alt="Nodejs" /></div>
                  <div className="col-sm-4"><img src={ReactjsLogo} alt="Reactjs" /></div>
                  <div className="col-sm-4"><img src={GitLogo} alt="GIT" /></div>
                </div>
              </div>
            </div>
            <br></br>

            <h1>Some projects</h1>
            <hr className="yellow-continous"></hr>
            <div className="row">

              <div className="col-xl-4">
                <CardProject
                  title="Game of Life"
                  img={GameOfLifeImg}
                  url="https://github.com/mllimo/Game-of-life"
                  text="It is a zero-player game, meaning that its evolution is determined by its initial state"
                  languages={["javascript", "html", "css"]}>
                </CardProject>
              </div>

              <div className="col-xl-4">
                <CardProject
                  title="N queens"
                  img={NqueensImg}
                  url="https://github.com/mllimo/nQueens"
                  text="Is the problem of placing n chess queens on an n×n chessboard so that no two queens share the same row, column, or diagonal."
                  languages={["javascript", "html", "css"]}>
                </CardProject>
              </div>

              <div className="col-xl-4">
                <CardProject
                  title="Hand Tracking Open-CV"
                  img={HandTrackingImg}
                  url="https://github.com/mllimo/HandTraking-OPENCV"
                  text="Program that can recognize simple hand gestures and track it movement seeing the angle between the fingers."
                  languages={["c++"]}>
                </CardProject>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div className="col-xl-1"></div>
        </div>
      </div>
      <Footer
        items={[
          { src: "ar.mailto:guijarro.contreras@gmail.com", social: "email" },
          { src: "https://twitter.com/mllim0", social: "twitter" },
          { src: "https://www.instagram.com/mllimo/", social: "ig" },
          { src: "https://www.linkedin.com/in/antonio-ra%C3%BAl-guijarro-contreras/", social: "linkedin" },
          { src: "https://github.com/mllimo", social: "github" },
        ]}
      ></Footer>
    </div>
  );
}

export default App;
