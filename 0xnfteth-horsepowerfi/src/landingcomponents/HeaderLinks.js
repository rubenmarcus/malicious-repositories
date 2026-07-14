import React, { useState } from "react";
// import gameIcon from "../images/game.svg";
import gameIcon1 from "../images/game-1.png";
import gameIcon2 from "../images/game-2.png";
import gameIcon3 from "../images/game-3.png";
// import ChangegameIcon from "../images/game2.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
// import { Funding } from "../fundingcomponents/Funding";
export const HeaderLinks = () => {
  const [gameIconIndex, setGameIconIndex] = useState(0);
  const handleGameEnter = (gameIndex) => {
    setGameIconIndex(gameIndex);
  };

  const handleGameLeave = () => {
    setGameIconIndex(0);
  };
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <NavDropdown title="Games">
                <Link
                  to="/"
                  className="dropTag"
                  onMouseEnter={() => {
                    handleGameEnter(1);
                  }}
                  onMouseLeave={handleGameLeave}
                >
                  {" "}
                  <div style={{ height: "52px" }}>
                    <img
                      // src={gameIconIndex === 1 ? ChangegameIcon : gameIcon}
                      src={gameIcon1}
                      alt="My"
                      id="logoTop"
                    />
                    Stutengarden
                  </div>
                  <div>
                    <span>
                      {gameIconIndex === 1 ? "Play Now" : "Coming Soon"}
                    </span>
                  </div>
                </Link>

                <NavDropdown.Divider />
                <Link
                  to="/"
                  className="dropTag"
                  onMouseEnter={() => {
                    handleGameEnter(2);
                  }}
                  onMouseLeave={handleGameLeave}
                >
                  <div style={{ width: "192px", height: "52px" }}>
                    <img
                      // width={100}
                      // src={gameIconIndex === 2 ? ChangegameIcon : gameIcon}
                      src={gameIcon2}
                      alt="My"
                      id="logoTop"
                      style={{
                        width: "100px",
                        position: "relative",
                        margin: "-16px 12px -25px -1px",
                      }}
                    />
                    MetaHorse Unity
                  </div>
                  <div>
                    <span>
                      {gameIconIndex === 2 ? "Play Now" : "Coming Soon"}
                    </span>
                  </div>
                </Link>
                <NavDropdown.Divider />
                <Link
                  to="/"
                  className="dropTag"
                  onMouseEnter={() => {
                    handleGameEnter(3);
                  }}
                  onMouseLeave={handleGameLeave}
                >
                  <div style={{ width: "195px" }}>
                    <img
                      // src={gameIconIndex === 3 ? ChangegameIcon : gameIcon}
                      src={gameIcon3}
                      alt="My"
                      id="logoTop"
                      style={{
                        position: "relative",
                        margin: "-5px 0px 2px 19px",
                      }}
                    />
                    <div style={{ marginLeft: "33px" }}>M-Deed</div>
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <span style={{ width: "50px" }}>
                      {gameIconIndex === 3 ? "Play Now" : "Coming Soon"}
                    </span>
                  </div>
                </Link>
                <NavDropdown.Divider />
              </NavDropdown>

              {/* <Nav.Link> */}
              <Link to="/token" className="navTag">
                Token
              </Link>
              {/* Token */}
              {/* </Nav.Link> */}
              <Link to="/" className="navTag">
                Market Place
              </Link>
              {/* <Nav.Link href="#" to="token">
                Market Place
              </Nav.Link> */}
              <Link to="/" className="navTag">
                Profile
              </Link>
              {/* <Nav.Link href="#abc">Profile</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
