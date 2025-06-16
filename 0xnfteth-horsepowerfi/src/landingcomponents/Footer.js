import logo from "../images/logo.png";
import footer2 from "../images/footer2.svg";
import footer3 from "../images/footer3.svg";
import footer4 from "../images/footer4.svg";
import footer5 from "../images/footer5.svg";
import footer6 from "../images/footer6.svg";
import footer7 from "../images/footer7.svg";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="leftFooter">
        <div className="markFooter">
          <a href="#" target="_blank">
            <img src={logo} alt="footermark" width={90} />
          </a>
          <span style={{ color: "white" }}>© 2024 Metahorse Unity</span>
        </div>
        <div className="iconFooter1">
          <a href="#" target="_blank">
            <img src={footer2} alt="footermark" className="iconF" />
          </a>
          <a href="#" target="_blank">
            <img src={footer3} alt="footermark" className="iconF" />
          </a>

          <a href="#" target="_blank">
            <img src={footer4} alt="footermark" className="iconF" />
          </a>
          <a href="#" target="_blank">
            <img src={footer5} alt="footermark" className="iconF" />
          </a>

          <a href="#" target="_blank">
            <img src={footer6} alt="footermark" className="iconF" />
          </a>
          <a href="#" target="_blank">
            <img src={footer7} alt="footermark" className="iconF" />
          </a>
        </div>
        <div className="iconFooter2">
          <div>
            <a href="#" target="_blank">
              <img src={footer2} alt="footermark" className="iconF" />
            </a>
            <a href="#" target="_blank">
              <img src={footer3} alt="footermark" className="iconF" />
            </a>
          </div>
          <div>
            <a href="#" target="_blank">
              <img src={footer4} alt="footermark" className="iconF" />
            </a>
            <a href="#" target="_blank">
              <img src={footer5} alt="footermark" className="iconF" />
            </a>
          </div>
          <div>
            <a href="#" target="_blank">
              <img src={footer6} alt="footermark" className="iconF" />
            </a>
            <a href="#" target="_blank">
              <img src={footer7} alt="footermark" className="iconF" />
            </a>
          </div>
        </div>
      </div>
      <div className="linkFooter">
        <span>About US</span>
        <span>White paper</span>
        <span>Terms of Use</span>
        <span>Code of Conduct</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};
