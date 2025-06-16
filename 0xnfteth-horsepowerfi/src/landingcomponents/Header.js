import { HeaderLeft } from "./HeaderLeft";
import { HeaderLinks } from "./HeaderLinks";
import "./styleTop.css";
import { Wallnetbtn } from "../fundingcomponents/Walletbtn";
import { Main } from "../fundingcomponents/Main";

export const Header = () => {
  return (
    <div>
      <div className="stakeHeader">
        <HeaderLeft />
        <HeaderLinks />
        <Main />
        <Wallnetbtn />
      </div>
    </div>
  );
};
