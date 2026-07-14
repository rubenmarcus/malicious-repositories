import MunityprogImg from "../images/Munitypro.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AnimatedSection } from "./AnimatedSection";
export const Munityprog = () => {
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
    <div className="Munityprog">
      <div className="bottomImg">
        <div
          className="daoImg"
          style={{
            backgroundImage: `url(${MunityprogImg})`,
          }}
        >
          <div className="daoImg" style={{ position: "relative", left: "15%" }}>
            <AnimatedSection getStyles={getFadeTopStyles}>
              <div className="topTitle">
                <div>
                  <div className="text">
                    <span className="title title1">MUNITY</span>{" "}
                    <span className="title title1">Creator</span>{" "}
                    <span className="title title1">Program</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeTopStyles}>
              <div className="centerTitle1">Apply Our Creator Program</div>
            </AnimatedSection>
            <AnimatedSection getStyles={getFadeTopStyles}>
              <div className="centerTitle2">
                If you have a passion for{" "}
                <span style={{ color: "white" }}>MUNITY</span>, you can earn
                exclusive rewards through our Creator Program for making content
                on YouTube, X, TikTok and more. It is fast and easy to apply,
                and we are always accepting new creators into the program.
              </div>
            </AnimatedSection>
            <div className="bottomTitle">
              <span>
                Join Now
                <i className="bi bi-chevron-right"></i>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
