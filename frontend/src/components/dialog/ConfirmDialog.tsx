/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from "react";
import "../styles.css";

function ConfirmDialog({
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
      className={`confirm-dialog-container ${
        dialogState && "hide-dialog"
      } dialog`}
    >
      <img src={iconSrc} alt="" />
      <div className="confirm-dialog-title">{title}</div>
      <div className="confirm-dialog-message">{message}</div>
      <div className="confirm-dialog-btn-opstions">
        <button
          className="confirm-dialog-button"
          onClick={hideInformationDialog}
        >
          OK
        </button>
        <button
          className="confirm-dialog-button"
          onClick={hideInformationDialog}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmDialog;
