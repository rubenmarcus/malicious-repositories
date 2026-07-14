import ArtImg from "../images/Art.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AnimatedSection } from "./AnimatedSection";
export const Art = () => {
  const getFadeTopStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateY(40px)",
  });
  const getFadeRightStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1.8s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateX(-100%)",
  });
  return (
    <div className="Art">
      <AnimatedSection getStyles={getFadeRightStyles}>
        <div className="topTitle">
          <div id="line1"></div>
          <div>
            <div className="text">
              <span className="title title1">
                WE ARE
                <span className="title title2"> HUNGRI </span> GAMES
              </span>
            </div>
          </div>

          <div id="line2"></div>
        </div>
      </AnimatedSection>

      <div className="bottomImg">
        <div className="rightText">
          <AnimatedSection getStyles={getFadeTopStyles}>
            <div>
              <span className="type2 lgText">
                <span className="type1 lgText">MUNITY</span> Studios specializes
                in creating high-quality 3D art and animations.
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection getStyles={getFadeTopStyles}>
            <div>
              <span className="type3">
                Since 2019, our seasoned team with 25+ years of management
                experience has been at the forefront of EMEA and Asia gaming.
                With our motto, "Feed Your Gaming Soul," we're your gateway to
                the immersive world of web3 gaming.
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection getStyles={getFadeTopStyles}>
            <div>
              <div className="bottomBtn">
                Visit Hungri Games
                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection getStyles={getFadeRightStyles}>
          <div
            className="daoImg"
            style={{
              backgroundImage: `url(${ArtImg})`,
            }}
          ></div>
        </AnimatedSection>
      </div>
    </div>
  );
};
