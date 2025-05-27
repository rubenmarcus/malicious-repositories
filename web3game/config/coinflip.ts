  import { CoinFlipType } from "@/lib/types/CoinFlip";
  import imperial from "@/public/assets/images/imperial.png";
  import empires from "@/public/assets/images/Empires.png";
  import mjolinir from "@/public/assets/images/mjolnir.png";
  import equity from "@/public/assets/images/equity.png";
  import pnc from "@/public/assets/images/pnc.png";
  import sal from "@/public/assets/images/sal.png";
import weapon1 from "@/public/assets/images/weapon1.png";
import weapon2 from "@/public/assets/images/weapon2.png";
import weapon3 from "@/public/assets/images/weapon3.png";

export const coinflipData: CoinFlipType[] = [
  {
    value: 5224,
    competitors: [
      {
        username: "imperial",
        image: imperial,
        coin: "black",
        balance:23182.56
      },
      {
        username: "imperial",
        image: "",
        coin: "red",
        balance:23182.56
      },
    ],
    completed: false,
    wapons: [
      weapon1,
      weapon2,
      weapon3,
      weapon1,
      weapon2,
      weapon3,
      weapon1,
      weapon2,
      weapon3,
    ],
    creator: {
      username: "imperial",
      image: imperial,
      coin: "black",
      balance:23182.56
    },
  },
  {
    value: 4624,
    competitors: [
      {
        username: "imperial",
        image: sal,
        coin: "black",
        balance:23182.56
      },
      {
        username: "imperial",
        image: mjolinir,
        coin: "red",
        balance:23182.56
      },
    ],
    completed: true,
    wapons: [
      weapon1,
      weapon2,
      weapon3,
      weapon1,
      weapon2,
      weapon3,
      weapon1,
      weapon2,
      weapon3,
      weapon1,
      weapon2,
      weapon3,
    ],
    creator: {
      username: "imperial",
      image: imperial,
      coin: "black",
      balance:23182.56
    },
    winner: {
      username: "mjolnir",
      image: imperial,
      coin: "black",
      balance:23182.56
    },
  },
  {
    value: 5124,
    competitors: [
      {
        username: "imperial",
        image: imperial,
        coin: "black",
        balance:23182.56
      },
      {
        username: "imperial",
        image: "",
        coin: "red",
        balance:23182.56
      },
    ],
    completed: false,
    wapons: [
      weapon1,
      weapon2,
      weapon3,
      weapon1,
      weapon2,
      weapon3,
      weapon1,
      weapon2,
      weapon3,
      weapon1,
      weapon2,
      weapon3,
    ],
    creator: {
      username: "imperial",
      image: imperial,
      coin: "black",
      balance:23182.56
    },
  },
  {
    value: 5124,
    competitors: [
      {
        username: "imperial",
        image: pnc,
        coin: "black",
        balance:23182.56
      },
      {
        username: "imperial",
        image: equity,
        coin: "red",
        balance:23182.56
      },
    ],
    completed: false,
    wapons: [
      weapon1,
      weapon2,
      weapon3,
      weapon1,
      weapon2,
      weapon3,
      weapon1,
      weapon2,
      weapon3,
      weapon1,
      weapon2,
      weapon3,
    ],
    creator: {
      username: "imperial",
      image: imperial,
      coin: "black",
      balance:23182.56
    },
    started:true,
  },
];
