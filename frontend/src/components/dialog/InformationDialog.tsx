/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import "./styles.css";

function InformationDialog({
  iconSrc,
  title,
  message,
}: {
  iconSrc?: string;
  title?: string;
  message?: string;
}) {
  const [dialogState, changeDialogState] = useState(false);
  const hideInformationDialog = () => {
    changeDialogState(true);
  };
  return (
    <div
      className={`information-dialog-container ${
        dialogState && "hide-dialog"
      } dialog`}
    >
      <img src={iconSrc} alt="" />
      <div className="information-dialog-title">{title}</div>
      <div className="information-dialog-message">{message}</div>
      <button
        className="information-dialog-button"
        onClick={hideInformationDialog}
      >
        OK
      </button>
    </div>
  );
}

export default InformationDialog;
