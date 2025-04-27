import { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({ className = "", ...props }: TextareaProps) => (
  <textarea
    {...props}
    className={[
      "border rounded p-2 w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300",
      className,
    ].join(" ")}
  />
);

export default Textarea;
