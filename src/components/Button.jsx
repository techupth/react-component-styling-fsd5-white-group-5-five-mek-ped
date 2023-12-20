/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  wideth: 171.19;
  height: 50px;
  padding: 0px 16px;
  border-radius: 4px;
  color: white;
  gap: 8px;
  margin: 10px;
`;

function Button(props) {
  if (props.type === "primary") {
    return (
      <button
        css={css`
          ${buttonStyle}
          background-color: #074ee8;
        `}
      >
        Button
      </button>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        css={css`
          ${buttonStyle}
          background-color: #07a4e8;
        `}
      >
        Button
      </button>
    );
  }
}

export default Button;
