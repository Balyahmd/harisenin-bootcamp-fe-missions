import React from "react";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyle =
    "w-full text-base font-semibold py-2 px-4 rounded-lg transition duration-200 text-center block";

  const variants = {
    primary: "bg-main-primary hover:bg-main-primary-400 text-white",
    secondary:
      "bg-main-primary-100 hover:bg-main-primary-200 text-main-primary",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
