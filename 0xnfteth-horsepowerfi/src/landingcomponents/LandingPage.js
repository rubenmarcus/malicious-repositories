import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { IphoneContent } from "../iphonecomponents/IphoneContent.js";
export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Header />
      <div className="BContent">
        <Content />
      </div>
      <div className="IContent">
        <IphoneContent />
      </div>
      <Footer />
    </div>
  );
};
