/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const boxStyle = css`
  width: 630px;
  height: 56px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  color: #444444;
  margin: 20px;
`;

function Alert(props) {
  if (props.type === "error") {
    return (
      <div
        css={css`
          ${boxStyle}
          background-color: #f9c8c8;
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#ED5050"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16"
            stroke="#ED5050"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 9H9.01"
            stroke="#ED5050"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 9H15.01"
            stroke="#ED5050"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        This is error alert box
      </div>
    );
  } else if (props.type === "warning") {
    return (
      <div
        css={css`
          ${boxStyle};
          background-color: #f9d9c8;
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_910_5915)">
            <path
              d="M10.29 3.85999L1.82002 18C1.64539 18.3024 1.55299 18.6453 1.55201 18.9945C1.55103 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7238C2.83871 20.9009 3.18082 20.9962 3.53002 21H20.47C20.8192 20.9962 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0127 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.4471 18.6453 22.3547 18.3024 22.18 18L13.71 3.85999C13.5318 3.5661 13.2807 3.32311 12.9812 3.15447C12.6817 2.98584 12.3438 2.89725 12 2.89725C11.6563 2.89725 11.3184 2.98584 11.0188 3.15447C10.7193 3.32311 10.4683 3.5661 10.29 3.85999V3.85999Z"
              stroke="#EA712D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 17H12.01"
              stroke="#EA712D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 9V13"
              stroke="#EA712D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_910_5915">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        This is warning alert box
      </div>
    );
  } else if (props.type === "info") {
    return (
      <div
        css={css`
          ${boxStyle};
          background-color: #f9ebc8;
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_910_5910)">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#F29811"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 8V12"
              stroke="#F29811"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 16H12.01"
              stroke="#F29811"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_910_5910">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        This is warning alert box
      </div>
    );
  } else if (props.type === "success") {
    return (
      <div
        css={css`
          ${boxStyle};
          background-color: #cef7cd;
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86"
            stroke="#14944F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 4L12 14.01L9 11.01"
            stroke="#14944F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        This is warning alert box
      </div>
    );
  }
}

export default Alert;
