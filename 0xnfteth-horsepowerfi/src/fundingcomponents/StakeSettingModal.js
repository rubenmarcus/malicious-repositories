import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const StakeSettingModal = (props) => {
  const { stakeType, stakeValue, defaultDay } = props;

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="stakesettingModal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">CONFIRM</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {stakeType === "emergencyUnstake" ? (
          <div className="middleText">
            <span>The Staking Is Not Matured</span>
            <span>You Will Forfeit Points Accumulated If You </span>
            <span>Unstake Now</span>
          </div>
        ) : stakeType === "stake" ? (
          <div className="middleText">
            <span>
              Do you confirm to stake{" "}
              <span
                style={{ color: "rgba(95, 61, 255, 1)", fontWeight: "900" }}
              >
                {stakeValue}
              </span>
            </span>
            <span>
              Points for{" "}
              <span
                style={{ color: "rgba(95, 61, 255, 1)", fontWeight: "900" }}
              >
                {defaultDay}
              </span>{" "}
              days ?
            </span>
          </div>
        ) : stakeType === "unstake" ? (
          <div className="middleText">
            <span>Are You Sure To You Want Continue?</span>
          </div>
        ) : stakeType === "nftStake" ? (
          <div className="middleText">
            <span>Do you confirm to stake?</span>
          </div>
        ) : stakeType === "nftUnstake" ? (
          <div className="middleText">
            <span>Do you confirm to unstake?</span>
          </div>
        ) : (
          ""
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">
          Cancel
        </Button>
        <Button
          onClick={() => {
            stakeType === "stake" ? props.onStake()
            : stakeType === "unstake" ? props.onUnstake()
            : stakeType === "emergencyUnstake" ? props.onEmergencyUnstake()
            : stakeType === "nftStake" ? props.onNftStake()
            : props.onNftUnstake()
          }}
          // onClick={}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
