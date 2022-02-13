import React from "react";
import classnames from "classnames";

const Button = ({
  type,
  onClick,
  className,
  style,
  disabled,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
