import Partner1Img from "../images/Partner1.png";
import Partner2Img from "../images/Partner2.png";
import Partner3Img from "../images/Partner3.png";
import Partner4Img from "../images/Partner4.png";
import Partner5Img from "../images/Partner5.png";
import Partner6Img from "../images/Partner6.png";
import Partner7Img from "../images/Partner7.png";
import Partner8Img from "../images/Partner8.png";
import Partner9Img from "../images/Partner9.png";
import Partner10Img from "../images/Partner10.png";
import Partner11Img from "../images/Partner11.png";
import Partner12Img from "../images/Partner12.png";
import Partner13Img from "../images/Partner13.png";
import Partner14Img from "../images/Partner14.png";
import Partner15Img from "../images/Partner15.png";
import Partner16Img from "../images/Partner16.png";
import Partner17Img from "../images/Partner17.png";
import Partner18Img from "../images/Partner18.png";
import Partner19Img from "../images/Partner19.png";
import Partner20Img from "../images/Partner20.png";
import Partner21Img from "../images/Partner21.png";
import Partner22Img from "../images/Partner22.png";
import Partner23Img from "../images/Partner23.png";
import Partner24Img from "../images/Partner24.png";
import Partner25Img from "../images/Partner25.png";
import Partner26Img from "../images/Partner26.png";
import { AnimatedSection } from "./AnimatedSection";
export const Partners = () => {
  const getFadeTopStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateY(40px)",
  });
  const getFadeRightStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1.8s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateX(100%)",
  });
  const getFadeLeftStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1.8s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateX(-100%)",
  });
  return (
    <div className="Partners">
      <div class="gradient gradient--7"></div>
      <AnimatedSection getStyles={getFadeTopStyles}>
        <div className="topTitle">
          <div id="line"></div>
          <div>
            <div className="text">
              <span className="title title1">Word-Class </span>{" "}
              <span className="title title2">Partners</span>{" "}
            </div>
          </div>

          <div id="line"></div>
        </div>
      </AnimatedSection>
      <div className="classImg">
        <div className="allImg" id="allImg">
          <div className="rowImg">
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner1Img} alt="mark" className="Partner1Img" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg">
                <img
                  src={Partner2Img}
                  alt="mark"
                  // style={{ height: "40px" }}
                  className="Partner2Img"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg">
                <img src={Partner3Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img className="Partner4Img" src={Partner4Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner5Img} alt="mark" className="Partner5Img" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg">
                <img src={Partner6Img} alt="mark" className="Partner6Img" />
              </div>
            </AnimatedSection>
          </div>
          <div className="rowImg">
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner7Img} alt="mark" className="Partner7Img" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg">
                <img src={Partner8Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner9Img} alt="mark" className="Partner9Img" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg">
                <img src={Partner10Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg">
                <img src={Partner11Img} alt="mark" />
              </div>
            </AnimatedSection>
          </div>
          <div className="rowImg">
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner12Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg">
                <img src={Partner13Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner14Img} alt="mark" className="Partner14Img" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner15Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg">
                <img src={Partner16Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner17Img} alt="mark" />
              </div>
            </AnimatedSection>
          </div>

          <div className="rowImg">
            {" "}
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg">
                <img src={Partner18Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner19Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg ">
                <img src={Partner20Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner21Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner22Img} alt="mark" className="Partner22Img" />
              </div>
            </AnimatedSection>
          </div>
          <div className="rowImg">
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg ">
                <img src={Partner23Img} alt="mark" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner24Img} alt="mark" className="Partner24Img" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeLeftStyles}>
              <div className="colImg">
                <img src={Partner25Img} alt="mark" className="Partner25Img" />
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeRightStyles}>
              <div className="colImg">
                <img src={Partner26Img} alt="mark" className="Partner26Img" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};
