import MunityprogImg from "../images/Munitypro.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
export const IContent6 = () => {
  return (
    <div className="IContent6">
      <div className="bottomImg">
        <div
          className="daoImg"
          style={{
            backgroundImage: `url(${MunityprogImg})`,
          }}
        >
          <div className="topTitle">
            <div>
              <div className="text">
                <span className="title title1">MUNITY</span>{" "}
                <span className="title title1">Creator</span>{" "}
                <span className="title title1">Program</span>
              </div>
            </div>
          </div>

          <div className="centerTitle1">Apply Our Creator Program</div>
          <div className="centerTitle2">
            If you have a passion for{" "}
            <span style={{ color: "white" }}>MUNITY</span>, you can earn
            exclusive rewards through our Creator Program for making content on
            YouTube, X, TikTok and more. It is fast and easy to apply, and we
            are always accepting new creators into the program.
          </div>
          <div className="bottomTitle">
            <span>
              Join Now
              <i className="bi bi-chevron-right"></i>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
