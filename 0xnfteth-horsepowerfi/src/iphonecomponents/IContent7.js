import DaoImg from "../images/Arta.png";
import "bootstrap-icons/font/bootstrap-icons.css";
export const IContent7 = () => {
  return (
    <div className="IContent7">
      <div className="topTitle">
        <div id="line"></div>
        <div>
          <div className="text">
            <span className="title title1">WE ARE</span>
            <span className="title title2">MUNITY </span>{" "}
            <span className="title title1">Games</span>
          </div>
        </div>

        <div id="line"></div>
      </div>

      <div className="bottomImg">
        <div
          className="daoImg"
          style={{
            backgroundImage: `url(${DaoImg})`,
          }}
        ></div>
        <div className="rightText">
          <div>
            <span className="type1 lgText">
              MUNITY{" "}
              <span className="type2 lgText">
                Studios specializes in creating{" "}
              </span>
              <span className="type2 lgText">high-quality 3D</span>
              <span className="type2 lgText"> art and animations. </span>
            </span>
          </div>
          <div>
            <span className="type3">
              Since 2019, our seasoned team with 25+ years of management
              experience has been at the forefront of EMEA and Asia gaming. With
              our motto, "Feed Your Gaming Soul," we're your gateway to the
              immersive world of web3 gaming{" "}
              <span className="type4">Read More.</span>
            </span>
          </div>
          <div>
            <div className="bottomBtn">
              Visit Hungri Games{" "}
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
