import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({ children, type = "button", className = "" }: ButtonProps) => (
  <button
    type={type}
    className={[
      "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
      className,
    ].join(" ")}
  >
    {children}
  </button>
);

export default Button;
