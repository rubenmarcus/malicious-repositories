import { Footer } from "../landingcomponents/Footer";
import { Munityjoin } from "./Munityjoin";
import { Nfts } from "./Nfts";
import { SlideModal } from "./SlideModal";
import { Tabcontrol } from "./Tabcontrol";
import { AvailableStaked } from "./AvailableStaked";

export const Content = () => {
  return (
    <div className="contentFunding">
      <Munityjoin />
      <Tabcontrol />
      {/* <Nfts /> */}
      <SlideModal />
      <AvailableStaked />
      <Footer />
    </div>
  );
};
