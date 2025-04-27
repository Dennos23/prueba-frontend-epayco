import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ className = "", ...props }: InputProps) => (
  <input
    {...props}
    className={[
      "border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300",
      className,
    ].join(" ")}
  />
);

export default Input;
