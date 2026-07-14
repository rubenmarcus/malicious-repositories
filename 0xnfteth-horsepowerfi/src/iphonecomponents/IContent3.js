import metahorseImg from "../images/Metahorse.png";
import Timeline0 from "../images/Timeline0.svg";
const handleEnter = (e) => {};
const handleLeave = () => {
  //setGameIconIndex(0);
};
export const IContent3 = () => {
  return (
    <div className="IContent3">
      <div className="topTitle">
        <div id="line"></div>

        <div className="text">
          <div>
            <span className="title title1">Race With A Wide Variety Of</span>
            <span className="title title2">METAHORSE</span>
            <span className="title title1">Classes</span>
          </div>
        </div>

        <div id="line"></div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="progressBar">
          <ul className="events">
            <li
              style={{
                position: "relative",
                bottom: "5px",
              }}
              onMouseEnter={() => {
                handleEnter(1);
              }}
              onMouseLeave={handleLeave}
            >
              <div className="timeLine">
                <div
                  className="timePointSVG"
                  style={{
                    background: `URL(${Timeline0})`,
                    width: "15px",
                    height: "15px",
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div className="timePointLine" style={{ width: "94px" }}></div>
              </div>
            </li>
            <li>
              <div className="timeLine">
                <div className="timePointSVG"></div>
                <div className="timePointLine" style={{ width: "48px" }}></div>
              </div>
            </li>

            <li>
              <div className="timeLine">
                <div className="timePointSVG"></div>
                <div className="timePointLine" style={{ width: "48px" }}></div>
              </div>
            </li>
            <li>
              <div className="timeLine">
                <div className="timePointSVG"></div>
                <div className="timePointLine" style={{ width: "64px" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="letterWrap">
        <div className="letter">
          Race With A Wide Variety Of METAHORSE Classes Against Your Opponents{" "}
        </div>
      </div>
      <div className="bottomImg">
        <div
          className="metahorseImg"
          style={{
            backgroundImage: `url(${metahorseImg})`,
          }}
        ></div>
      </div>
      <div className="letterWrap2">
        <div className="letter2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore mmpor incididunt ut
          labore et dolore mLorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eius
        </div>
      </div>
    </div>
  );
};
