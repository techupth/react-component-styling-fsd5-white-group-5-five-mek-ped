// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  let color;

  if (props.style === "primary") {
    color = "#074EE8";
  } else if (props.style === "secondary") {
    color = "#07a4e8";
  }

  return (
    <button
      css={css`
        color: var(--Surface, #fff);
        font-family: Sarabun;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 112.5% */
        display: flex;
        width: 171.19px;
        height: 50px;
        padding: 0px 16px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        border-radius: 4px;
        background-color: ${color};
      `}
    >
      Large
    </button>
  );
}

export default Button;
