import { useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { FundingContext } from "./FundingContext";

export const AvailableStaked = () => {
  const [isconnect, SetIsconnect] = useState(false);
  const { availableNfts, stakedNfts } = useContext(FundingContext);
  const { address, isConnecting, isDisconnected } = useAccount();
  useEffect(() => {
    (async () => {
      if (!isConnecting && !isDisconnected) SetIsconnect(true);
      else SetIsconnect(false);
    })();
  }, [isConnecting, isDisconnected]);
  return (
    <div>
      {isconnect !== true ? (
        ""
      ) : (
        <div className="AvailableStaked">
          <div className="nftModals">
            <div className="nftModal1">
              <div className="topTitle">
                <div id="line"></div>
                <div>
                  <div className="text">
                    <span className="title title1">
                      <span style={{ color: "#5F3DFF" }}>Available</span> NFTS
                    </span>
                  </div>
                </div>

                <div id="line"></div>
              </div>

              <div className="bottomTitle">
                {availableNfts.map((item, index) => {
                  if (index % 2 === 1) return;
                  return (
                    <div className="imgTitles">
                      <video
                        src={item}
                        className="imgTitle"
                        alt="horse"
                        autoPlay={false}
                        muted
                        playsInline
                      >
                        <source src={item} />
                      </video>
                      {availableNfts.length !== index ? (
                        <video
                          src={availableNfts[index + 1]}
                          className="imgTitle"
                          alt="horse"
                          autoPlay={false}
                          muted
                          playsInline
                        >
                          <source src={availableNfts[index + 1]} />
                        </video>
                      ) : availableNfts.length % 2 == 1 ? (
                        <div></div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="nftModal1">
              <div className="topTitle">
                <div id="line"></div>
                <div>
                  <div className="text">
                    <span className="title title1">
                      <span style={{ color: "#5F3DFF" }}>Staked</span> NFTS
                    </span>
                  </div>
                </div>

                <div id="line"></div>
              </div>
              <div className="bottomTitle">
                {stakedNfts.map((item, index) => {
                  if (index % 2 === 1) return;
                  return (
                    <div className="imgTitles">
                      <video
                        src={item}
                        className="imgTitle"
                        alt="horse"
                        autoPlay={false}
                        muted
                        playsInline
                      >
                        <source src={item} />
                      </video>
                      {stakedNfts.length !== index ? (
                        <video
                          src={stakedNfts[index + 1]}
                          className="imgTitle"
                          alt="horse"
                          autoPlay={false}
                          muted
                          playsInline
                        >
                          <source src={stakedNfts[index + 1]} />
                        </video>
                      ) : stakedNfts.length % 2 == 1 ? (
                        <div></div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
