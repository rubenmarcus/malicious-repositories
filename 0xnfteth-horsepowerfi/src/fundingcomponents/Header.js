import { HeaderLeft } from "../landingcomponents/HeaderLeft";
import { HeaderLinks } from "../landingcomponents/HeaderLinks";
import { Wallnetbtn } from "../fundingcomponents/Walletbtn";
import { Main } from "./Main";
// import { Hamburger } from "./Hamburger";

export const Header = () => {
  return (
    <div className="Header">
      <div className="stakeHeader">
        <HeaderLeft />
        <HeaderLinks />
        <Main />
        <Wallnetbtn />
      </div>
    </div>
  );
};
