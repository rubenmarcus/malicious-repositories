import { Slide } from "./Slide";
import { Munityhub } from "./Munityhub";
import { Games } from "./Games";
import { Metahorse } from "./Metahorse";
import { Dao } from "./Dao";
import { Legendary } from "./Legendary";
import { Munityprog } from "./Munityprog";
import { Art } from "./Art";
import { Partners } from "./Partners";
import { Munitynew } from "./Munitynew";
import { Munityadd } from "./Munityadd";
import { DataFeed } from "./DataFeed";

export const Content = () => {
  return (
    <div className="stakeContent">
      {/* <div class="example__demo example__demo--radial-gradient"> */}

      {/* </div> */}
      <Slide />
      <DataFeed />
      <Munityhub />
      <Games />
      <Metahorse />
      <Dao />
      <Legendary />
      <Munityprog />
      <Art />
      <Partners />
      {/* <Munitynew /> */}
      <Munityadd />
    </div>
  );
};
