import DaoImg from "../images/Dao.png";
import "bootstrap-icons/font/bootstrap-icons.css";
export const IContent5 = () => {
  return (
    <div className="IContent5">
      <div className="topTitle">
        <div id="line"></div>
        <div>
          <div className="text">
            <span className="title title2">Legendary </span>{" "}
            <span className="title title1">Marketplace</span>
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
            <span className="type2 lgText">Trade </span>
            <span className="type1 lgText">Legendary </span>
            <span className="type2 lgText">
              Items For Cryptocurrency On The In-Game And Web Marketplace.
            </span>
          </div>
          <div>
            <span className="type3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempoLorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod <span className="type4">Read More.</span>
            </span>
          </div>
          <div>
            <div className="bottom_">
              <div className="bottomBtn">COMING SOON</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
