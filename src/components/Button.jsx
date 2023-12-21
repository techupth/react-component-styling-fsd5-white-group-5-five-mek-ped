/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  const styleButton = `height:50 px ;
        width:172 px ;
        display: flex;
        width: 171.19px;
        height: 50px;
        padding: 0px 16px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        border-radius: 4px;
        color:white;
        font-family: Sarabun;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        margin-top:15px;`;
  let backgroundColor = "";
  if (props.bgColor === "primary") {
    backgroundColor = "#074ee8";
  } else if (props.bgColor === "secondary") {
    backgroundColor = "#07A4E8";
  }

  return (
    <button
      css={css`
        ${styleButton};
        background-color: ${backgroundColor};
      `}
    >
      {props.text}
    </button>
  );
}
