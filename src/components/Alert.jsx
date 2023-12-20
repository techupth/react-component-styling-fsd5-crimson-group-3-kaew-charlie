// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  const styleList = {
    error: {
      icon: "../assets/frown.svg",
      bg: "#F9C8C8",
    },
    warning: {
      icon: "../assets/alert-triangle.svg",
      bg: "#F9D9C8",
    },
    info: {
      icon: "../assets/alert-circle.svg",
      bg: "#F9EBC8",
    },
    success: {
      icon: "../assets/check-circle.svg",
      bg: "#CEF7CD",
    },
  };
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        flex-shrink: 0;
        border-radius: 10px;
        background: ${styleList[props.topic]?.bg ?? "red"};
      `}
    >
      <img src={styleList[props.topic]?.icon ?? ""} />
      <h2>This is {props.topic} box</h2>
    </div>
  );
}

export default Alert;
