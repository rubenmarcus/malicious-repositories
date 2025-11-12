import LegendaryImg from "../images/Legendary.png";
import { AnimatedSection } from "./AnimatedSection";
export const Legendary = () => {
  const getFadeRightStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1.5s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateX(100%)",
  });
  return (
    <div className="Legendary">
      <div class="gradient gradient--6"></div>
      <AnimatedSection getStyles={getFadeRightStyles}>
        <div className="topTitle">
          <div id="line1"></div>

          <div>
            <div className="text">
              <span className="title title1">
                <span style={{ color: "rgba(95, 61, 255, 1)" }}>Legendary</span>{" "}
                Market Place
              </span>
            </div>
          </div>

          <div id="line2"></div>
        </div>
      </AnimatedSection>

      <div className="bottomImg">
        <div className="rightText">
          <div>
            <span className="type2 lgText">
              Trade <span className="type1 lgText">Legendary</span> Items For
              Cryptocurrency On The In-Game And Web Marketplace.
            </span>
          </div>
          <div>
            <span className="type3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore mmpor incididunt ut
              labore et dolore mLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eius{" "}
              <span className="type4">Read More.</span>
            </span>
          </div>
          <div className="bottom_">
            <div className="bottomBtn">COMING SOON</div>
          </div>
        </div>
        <div
          className="daoImg"
          style={{
            backgroundImage: `url(${LegendaryImg})`,
          }}
        ></div>
      </div>
    </div>
  );
};
