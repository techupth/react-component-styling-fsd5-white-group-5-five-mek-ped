/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import frownIcon from "/src/assets/frown.svg";
import alertCircle from "/src/assets/alert-circle.svg";
import alertTriangle from "/src/assets/alert-triangle.svg";
import checkCircle from "/src/assets/check-circle.svg";

export function Alert(props) {
  const boxStyle = `
    width: 650px;
    height: 76px;
    flex-shrink: 0;
    border-radius: 10px;
`;
  const textStyle = `
    color: #444;
    font-family: Kanit;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;`;

  const iconStyle = `
    width: 24px;
    height: 24px;
    flex-shrink: 0;`;

  let changeColor;
  //let iconColor;
  let showIcon;
  if (props.alertBox === "error") {
    changeColor = `#F9C8C8;`;
    // iconColor = `#ED5050`;
    showIcon = frownIcon;
  } else if (props.alertBox === "warning") {
    changeColor = `#F9D9C8;`;
    // iconColor = `#EA712D`;
    showIcon = alertTriangle;
  } else if (props.alertBox === "info") {
    changeColor = `#F9EBC8;`;
    //   iconColor = `#F29811`;
    showIcon = alertCircle;
  } else if (props.alertBox === "success") {
    changeColor = `#CEF7CD;`;
    //  iconColor = `#14944F`;
    showIcon = checkCircle;
  }

  return (
    <div
      className="alert-container"
      css={css`
        display: flex;
        align-items: center;
        ${boxStyle};
        background-color: ${changeColor};
      `}
    >
      <img
        src={`${showIcon}`}
        alt="icon-alert"
        css={css`
          ${iconStyle};
          margin-left: 20px;
        `}
      />
      <span
        css={css`
          ${textStyle};
          margin-left: 15px;
        `}
      >
        {props.alertText}
      </span>
    </div>
  );
}
