import "bootstrap-icons/font/bootstrap-icons.css";
import { AnimatedSection } from "./AnimatedSection";
export const Munityadd = () => {
  const getFadeTopStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateY(40px)",
  });
  const getFadeRightStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateX(100%)",
  });
  const getFadeLeftStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateX(-100%)",
  });
  return (
    <div className="Munityadd">
      <div class="gradient gradient--8"></div>
      <div class="gradient gradient--9"></div>
      <AnimatedSection getStyles={getFadeTopStyles}>
        <div className="topTitle">
          <div id="line"></div>
          <div>
            <div className="text">
              <span className="title title1">Additional</span>{" "}
              <span className="title title2">MUNITY</span>{" "}
              <span className="title title1">Resources</span>
            </div>
          </div>

          <div id="line"></div>
        </div>
      </AnimatedSection>
      <AnimatedSection getStyles={getFadeTopStyles}>
        <div className="middleTitle">
          <span>
            Download the{" "}
            <span style={{ color: "rgba(95, 61, 255, 1)" }}>MUNITY</span> as
            well as the{" "}
            <span style={{ color: "rgba(95, 61, 255, 1)" }}>MUNITY</span> Press
            Kit for branding assets.
          </span>
        </div>
      </AnimatedSection>
      <div className="bottomImg">
        <AnimatedSection getStyles={getFadeLeftStyles}>
          <div className="leftImg titleImg">
            <div className="download Ldown">
              <div className="Ltext">
                <span>Whitepaper</span>
              </div>
              <div className="Rdown">
                Download{" "}
                <span>
                  <i className="bi bi-download"></i>
                </span>{" "}
              </div>
            </div>{" "}
            <div className="borderTitle"></div>
          </div>
        </AnimatedSection>
        <AnimatedSection getStyles={getFadeRightStyles}>
          <div className="rightImg titleImg">
            <div className="download Rdown">
              <div className="Ltext">
                <span>Brand Asset</span>
              </div>
              <div className="Rdown">
                Download{" "}
                <span>
                  <i className="bi bi-download"></i>
                </span>
              </div>
            </div>
            <div className="borderTitle"></div>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection getStyles={getFadeTopStyles}>
        <div className="munityUpdate">
          <div className="updateDiv">
            <div className="Ltext">
              <span>Whitepaper</span>
            </div>
            <div className="Rdown">
              Download{" "}
              <span>
                <i className="bi bi-download"></i>
              </span>{" "}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
