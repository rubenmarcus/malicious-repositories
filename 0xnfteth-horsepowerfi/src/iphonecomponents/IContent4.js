import DaoImg from "../images/Dao.png";
import "bootstrap-icons/font/bootstrap-icons.css";
export const IContent4 = () => {
  return (
    <div className="IContent4">
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
                Token Holders Will Be Able To Vote On Key Decisions Which Will
                Direct The Development Of The{" "}
              </span>
              <span className="type1 lgText">MUNITY </span>
              <span className="type2 lgText">
                Ecosystem, Including Current And Future Games.
              </span>
            </span>
          </div>
          <div>
            <span className="type3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempo <span className="type4">Read More.</span>
            </span>
          </div>
          <div>
            <div className="bottomBtn">
              View Governance{" "}
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
