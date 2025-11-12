import DaoImg from "../images/Dao.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AnimatedSection } from "./AnimatedSection";
export const Dao = () => {
  const getFadeTopStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateY(40px)",
  });
  const getFadeRightStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1.5s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateX(100%)",
  });
  return (
    <div className="Dao">
      <AnimatedSection getStyles={getFadeTopStyles}>
        <div className="topTitle">
          <div id="line"></div>
          <div>
            <div className="text">
              <span className="title title2">MUNITY </span>{" "}
              <span className="title title1">Governance</span>
            </div>
          </div>

          <div id="line"></div>
        </div>
      </AnimatedSection>

      <div className="bottomImg">
        <AnimatedSection getStyles={getFadeTopStyles}>
          <div
            className="daoImg"
            style={{
              backgroundImage: `url(${DaoImg})`,
            }}
          ></div>
        </AnimatedSection>
        <div className="rightText">
          <AnimatedSection getStyles={getFadeTopStyles}>
            <div>
              <span className="type1 lgText">
                MUNITY{" "}
                <span className="type2 lgText">
                  Token Holders Will Be Able To Vote On Key Decisions Which Will
                  Direct The Development Of The{" "}
                </span>
                <span className="type1 lgText">MUNITY </span>
                <span className="type2 lgText">
                  Ecosystem, Including Current And Future Games.
                </span>
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection getStyles={getFadeTopStyles}>
            <div>
              <span className="type3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore mmpor incididunt
                ut labore et dolore mLorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eius{" "}
                <span className="type4">Read More.</span>
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection getStyles={getFadeTopStyles}>
            <div>
              <div className="bottomBtn">
                View Governance{" "}
                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
