import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";

// 타입 정의
type ButtonVariant = "primary" | "secondary" | "link";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps
  extends Pick<
    ComponentPropsWithoutRef<"button">,
    "onClick" | "type" | "disabled"
  > {
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    size = "medium",
    outline = false,
    children,
    onClick,
    type = "button",
    disabled,
  } = props;

  const baseStyles = "font-bold py-2 px-4 rounded";

  const variantStyles = {
    primary: outline
      ? "text-[#F43C60] border border-[#C6C7CB] bg-transparent"
      : "bg-[#F43C60] text-white",
    secondary: "bg-[#5A5D64] text-white",
    link: "text-[#F43C60] underline bg-transparent",
  };

  const sizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        outline && variant === "primary" && "border-1 border-[#C6C7CB]",
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
