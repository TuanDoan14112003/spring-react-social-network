/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Radio } from "@mui/material";
import { useState } from "react";
import "../styles.css";

function ChoiceDialog({
  title,
  options,
  isComfirmButton,
  closePopUp,
  onValueChange,
}: {
  title?: string;
  options: any[];
  isComfirmButton: boolean;
  closePopUp: () => void;
  onValueChange: (value: string) => void;
}) {
  const [dialogState, changeDialogState] = useState(false);
  const hideInformationDialog = () => {
    if (value) changeDialogState(true);
  };
  const [value, changeValue] = useState("");
  const handleChange = (option: string) => {
    changeValue(option);
    onValueChange(option);
    closePopUp();
  };
  return (
    <div
      className={`choice-dialog-container ${
        dialogState && "hide-dialog"
      } dialog`}
    >
      <div className="choice-dialog-title">{title}</div>
      <div className="choice-dialog-options-container">
        {options.map((option) => {
          return (
            <div className="choice-dialog-option">
              <Radio
                onChange={() => handleChange(option)}
                checked={option == value ? true : false}
              />
              <span className="choice-dialog-option-description">{option}</span>
            </div>
          );
        })}
      </div>
      {isComfirmButton && (
        <button
          className="choice-dialog-confirm-button"
          onClick={hideInformationDialog}
        >
          Confirm
        </button>
      )}
    </div>
  );
}

export default ChoiceDialog;
