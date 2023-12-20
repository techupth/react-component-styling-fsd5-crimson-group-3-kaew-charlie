// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  const styleList = {
    primary: "#074EE8",
    secondary: "#07A4E8",
  };
  return (
    <button
      css={css`
        padding: 0px, 16px, 0px, 16px;
        background-color: ${styleList[props.style] ?? "black"};
        font-size: 16px;
        border-radius: 4px;
        color: white;
      `}
    >
      Button
    </button>
  );
}

export default Button;
