import GImg from "../images/G.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AnimatedSection } from "./AnimatedSection";
import Gate from "../images/Gate.svg";
import Mexc from "../images/Mexc.svg";
import Coin from "../images/Coin.svg";
import Market from "../images/Market.svg";

export const Munityhub = () => {
  const getFadeTopStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateY(100px)",
  });
  const getFadeLeftStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1.5s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateX(100%)",
  });
  return (
    <div className="Munityhub">
      <div class="gradient gradient--2"></div>
      <AnimatedSection getStyles={getFadeLeftStyles}>
        <div className="topTitle">
          <div id="line1"></div>

          <div>
            <div className="text">
              <span className="title title1">Explore</span>
              <span className="title title2">MUNITYHUB</span>
            </div>
            <div className="title3">
              <span>
                Embark on our Web3 mobile gaming mission within{" "}
                <span style={{ color: "white" }}>MUNITY</span>.Immerse yourself
                in the <span style={{ color: "white" }}>MUNITY</span> ecosystem,
                and get ready for a revolutionary mobile gaming experience.
              </span>
            </div>
          </div>

          <div id="line2"></div>
        </div>
      </AnimatedSection>

      <AnimatedSection getStyles={getFadeTopStyles}>
        <div className="imgTitle">
          <div class="border-gradient1">
            <div className="borderTitle leftTitle">
              <div className="MunityImage Img1"></div>
              <div className="bottomTitle1 bottomTitle">
                <div className="middleIconC">
                  <div className="middleIconText">
                    <span>Play Now</span>
                  </div>
                </div>
                <div className="middleText">
                  <span>
                    Embark on the thrilling journey of Stutengarden, the
                    horse-catching game, directly on your web browser.
                  </span>
                </div>
                <div className="buttonWrap">
                  <div className="bottomBtn">
                    Play Now
                    <span>
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border-gradient2">
            <div className="borderTitle centerTitle">
              <div className="MunityImage Img2"></div>
              <div className="bottomTitle2 bottomTitle">
                <div className="middleIconC">
                  <div className="middleIconText">
                    <span>Get</span>
                    <span style={{ color: "#5F3DFF" }}>MUNITY</span>
                    <span>Tokens</span>
                  </div>
                </div>
                <div className="middleText">
                  <span>
                    Learn about the{" "}
                    <span style={{ color: "white" }}>$MUNITY</span> governance
                    token and its utilities in the ecosystem.
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="bottomIcon">
                    <div
                      className="perIcon"
                      // style={{ gap: "10px", marginTop: "5px" }}
                    >
                      <div>
                        <img src={Gate} alt="Gate" />
                      </div>
                      <div>Gate.io</div>
                    </div>
                    <div className="perIcon">
                      <div>
                        {" "}
                        <img src={Mexc} alt="MEXC" />
                      </div>
                      <div style={{ position: "relative", top: "3px" }}>
                        MEXC
                      </div>
                    </div>
                    <div className="perIcon">
                      <div>
                        {" "}
                        <img src={Coin} alt="Coin" />
                      </div>
                      <div>CoinGecko</div>
                    </div>
                    <div className="perIcon">
                      <div>
                        {" "}
                        <img src={Market} alt="Market" />
                      </div>
                      <div>Coinmarketcap</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border-gradient3">
            <div className="borderTitle rightTitle">
              <div className="MunityImage Img3"></div>
              <div className="bottomTitle3 bottomTitle">
                <div className="middleIconC">
                  <div className="middleIconText">
                    <img src={GImg} alt="GImg" />
                    <span>Join The Airdrop</span>
                  </div>
                </div>
                <div className="middleText">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
