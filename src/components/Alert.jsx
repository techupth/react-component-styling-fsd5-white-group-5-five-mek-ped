// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ErrorIcon from "../images/frown.svg";
import WarningIcon from "../images/alert-triangle.svg";
import InfoIcon from "../images/alert-circle.svg";
import SuccessIcon from "../images/check-circle.svg";

function Alert(props) {
  let color;
  let text;
  let icon;

  if (props.type === "error") {
    color = "#F9C8C8";
    text = "error";
    icon = <img src={ErrorIcon} />;
  } else if (props.type === "warning") {
    color = "#F9D9C8";
    text = "warning";
    icon = <img src={WarningIcon} />;
  } else if (props.type === "info") {
    color = "#F9EBC8";
    text = "info";
    icon = <img src={InfoIcon} />;
  } else if (props.type === "success") {
    color = "#CEF7CD";
    text = "success";
    icon = <img src={SuccessIcon} />;
  }

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        color: #444;
        font-family: Kanit;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: 650px;
        height: 76px;
        padding-left: 20px;
        margin: 10px;
        flex-shrink: 0;
        border-radius: 10px;
        background-color: ${color};
      `}
    >
      <div
        css={css`
          margin-right: 20px;
        `}
      >
        {icon}
      </div>
      This is {text} alert box
    </div>
  );
}

export default Alert;
