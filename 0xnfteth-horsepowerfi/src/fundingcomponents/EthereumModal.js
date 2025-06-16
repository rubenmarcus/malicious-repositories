import React, { useState, useEffect, useContext } from "react";
import ethereumIcon from "../images/ethereumIcon.png";
import {
  getStakeBalance,
  getWalletBalance,
  getTotalStaked,
  getRemainTimeToStake,
  getAvailableStakeBalance,
  unstake,
  emergencyUnstake,
  getAccumulatedPoint,
  stake,
} from "../utils/Contract";
import { MyContext } from "../landingcomponents/MyContext";
import { StakeSettingModal } from "./StakeSettingModal";
import { useAccount, useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Countdown from "react-countdown";

export const EthereumModal = (props) => {
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isDisconnected, isConnecting } = useAccount();
  const [stakedAmount, setstakedAmount] = useState(0);
  const [walletBalance, setwalletBalance] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const [remainTimeToStake, setRemainTimeToStake] = useState(0);
  const [availableStakeBalance, setAvailableStakeBalance] = useState(0);
  const [stakeValue, setStakeValue] = useState(0);
  const [accumulatedPoint, setAccumulatedPoint] = useState(0);
  const [defaultDay, setDefaultDay] = useState(30);
  const AlertContext = useContext(MyContext);
  const [modalShow, setModalShow] = useState(false);
  const [stakeType, setStakeType] = useState("");
  const [futureDateString, setFutureDateString] = useState("");
  const onSetModal = (visible) => {
    setModalShow(visible);
  };

  const today = new Date();

  const futureDate = new Date(today);
  futureDate.setDate(futureDate.getDate() + defaultDay);
  let changeDate = futureDate.toISOString().slice(0, 10);
  // setFutureDateString(changestring);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", (chainID) => {
        if (
          !(
            chainID == 5 ||
            chainID == 11155111 ||
            chainID == 1 ||
            chainID == 137
          )
        )
          disconnect();
      });
      // window.ethereum.on("accountsChanged", () => {
      //   window.location.reload();
      // });
    }
  });
  useEffect(() => {
    (async () => {
      if (!address) return;
      let staked = await getStakeBalance(address);
      setstakedAmount(staked);
    })();
  }, [address]);
  useEffect(() => {
    (async () => {
      if (!address) return;
      let balance = await getWalletBalance(address);
      setwalletBalance(balance);
    })();
  }, [address]);
  useEffect(() => {
    (async () => {
      if (!address) return;
      let staked = await getTotalStaked(address);
      setTotalStaked(staked);
    })();
  }, [address]);
  useEffect(() => {
    (async () => {
      if (!address) return;
      let balance = await getAvailableStakeBalance(address);
      setAvailableStakeBalance(balance);
    })();
  }, [address]);
  useEffect(() => {
    (async () => {
      if (!address) return;
      let timetoStake = await getRemainTimeToStake(address);
      setRemainTimeToStake(timetoStake);
    })();
  }, [address]);
  useEffect(() => {
    (async () => {
      if (!address) return;
      let point = await getAccumulatedPoint(address);
      setAccumulatedPoint(point);
    })();
  }, [address]);

  const onChangeDay = (pDay) => {
    setDefaultDay(pDay);
  };
  const changeStakeValue = (e) => {
    setStakeValue(e.target.value);
  };

  const onStake = async () => {
    let ret = await stake(
      defaultDay === 15 ? 0 : defaultDay === 30 ? 1 : 2,
      stakeValue * 1e9,
      address
    );
    AlertContext.setAlert(ret);
    setModalShow(false);
  };
  // const onModal = async () => {
  //   onSetModal(true);
  // };

  const onUnstake = async () => {
    let ret = await unstake(address);
    AlertContext.setAlert(ret);
    setModalShow(false);
  };

  const onEmergencyUnstake = async () => {
    let ret = await emergencyUnstake(address);
    AlertContext.setAlert(ret);
    setModalShow(false);
  };
  return (
    <div className="EthereumModal">
      <StakeSettingModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onStake={onStake}
        onUnstake={onUnstake}
        onEmergencyUnstake={onEmergencyUnstake}
        stakeType={stakeType}
        stakeValue={stakeValue}
        defaultDay={defaultDay}
      />
      {/* <p
        style={{ color: "white" }}
      >{`${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes`}</p> */}

      <div className="centerModal">
        <div className="btnGroup firstGroup">
          <div className="ethBtn ethBtn1 ethIconBtn">
            <img src={ethereumIcon} alt="my" />
            {"Sepolia"}
          </div>
          <div className=" ethBtn1">Coming Soon</div>
          <div className=" ethBtn1">Coming Soon</div>
        </div>
        <div className="btnGroup">
          <div
            className="ethBtn ethBtn1 prefix1"
            onClick={() => {
              onChangeDay(15);
            }}
            style={
              defaultDay === 15
                ? { backgroundColor: "#8b38e4", color: "white" }
                : {}
            }
          >
            <span>1X</span>15 Days
          </div>
          <div
            className="ethBtn ethBtn1 prefix1 prefix2"
            onClick={() => {
              onChangeDay(30);
            }}
            style={
              defaultDay === 30
                ? { backgroundColor: "#8b38e4", color: "white" }
                : {}
            }
          >
            <span style={{ left: "1.8px" }}>1.5X</span>30 Days
          </div>
          <div
            className="ethBtn ethBtn1 prefix1"
            onClick={() => {
              onChangeDay(90);
            }}
            style={
              defaultDay === 90
                ? { backgroundColor: "#8b38e4", color: "white" }
                : {}
            }
          >
            <span>3X</span>90 Days
          </div>
        </div>
        <div className="btnGroup">
          <span className="cover1">
            <span className="cover3">X%</span>{" "}
            <span className="cover2">ETH</span> APR,{" "}
            <span className="cover3">1x</span> Multiplier On Seed Staking Points
            Generation Per <span className="cover2">ETH</span>
          </span>
        </div>
        <div className="btnGroup">
          <div className=" ethBtn2 infoBtn">
            <span className="iSpan">Staked amount</span>
            <span className="cSpan">{stakedAmount}</span>
          </div>
        </div>
        <div className="btnGroup">
          <div className=" ethBtn2 infoBtn">
            <span className="iSpan">Wallet Balance</span>
            <span className="cSpan">{walletBalance}</span>
          </div>
          <div className=" ethBtn2 infoBtn">
            <span className="iSpan">Total ETH Staked</span>
            <span className="cSpan">{totalStaked}</span>
          </div>
        </div>
        <div className="btnGroup">
          <div className=" ethBtn2 infoBtn">
            <span className="iSpan">Maturity Date</span>
            <span className="cSpan">{changeDate}</span>
          </div>
          <div className=" ethBtn2 infoBtn">
            <span className="iSpan">Munity Medals</span>
            <span className="cSpan">{accumulatedPoint}</span>
          </div>
          {/* <div className=" ethBtn2 ethBtn3">
            <span className="iSpan">Reward Balance</span>
            <span className="cSpan">---</span>
          </div> */}
        </div>
        <div className="btnGroup amountGroup">
          <div className="wSpan">Enter Stake Amount</div>
          <div style={{ display: "flex" }}>
            <input
              placeholder="Type In The Stake Amount"
              className="ethBtn2 ethBtn4 inputBtn"
              value={stakeValue < 0 ? 0 : stakeValue}
              onChange={(event) => {
                changeStakeValue(event);
              }}
              type="number"
            />
            <div
              className="maxBtn"
              onClick={() => {
                setStakeValue(walletBalance);
              }}
            ></div>
          </div>
        </div>
        <div className="btnGroup">
          <div
            className=" ethBtn5"
            onClick={() => {
              setStakeType("stake");
              onSetModal(true);
            }}
          >
            Stake
          </div>
        </div>
        <div className="btnGroup">
          <div className="setNumberGroup">
            <div class=" availStake">
              <span class="iSpan">Available Staked Amount:</span>
              <span class="cSpan">{availableStakeBalance}</span>
            </div>
          </div>

          <div
            className=" ethBtn2 unstakeBtn"
            onClick={() => {
              setStakeType("unstake");
              onSetModal(true);
            }}
          >
            Unstake
          </div>
        </div>
        <div className="btnGroup" style={{ marginBottom: "20px" }}>
          <div className="setNumberGroup">
            <div class="availStake ">
              <span class="iSpan">Total Staked Amount:</span>
              <span class="cSpan">{stakedAmount}</span>
            </div>
          </div>
          <div
            className=" ethBtn2  unstakeBtn"
            onClick={() => {
              setStakeType("emergencyUnstake");
              onSetModal(true);
            }}
          >
            Emergency Unstake
          </div>
        </div>

        {remainTimeToStake ? (
          <Countdown
            date={Date.now() + remainTimeToStake * 1000}
            intervalDelay={0}
            renderer={(props) => (
              <div>
                {
                  <div className="btnGroup">
                    <div className=" ethBtn2 ethBtn6">
                      <span className="iSpan">You Are On Cool Down For:</span>
                      <span className="cSpan">{props.hours}</span>
                      <span className="iSpan">Hours</span>

                      <span className="cSpan">{props.minutes}</span>
                      <span className="iSpan">Minutes</span>
                      <span className="cSpan">{props.seconds}</span>
                      <span className="iSpan">Seconds</span>
                    </div>
                  </div>
                }
              </div>
            )}
          />
        ) : (
          ""
        )}
        {!isDisconnected ? (
          <div className="disconnetGp">
            {!isConnecting && !isDisconnected ? (
              <div className="wallnetBtn" onClick={() => open()}>
                Disconnect
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
