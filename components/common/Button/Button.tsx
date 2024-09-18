import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";

// 타입 정의
type ButtonVariant = "primary" | "secondary" | "link";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps
  extends Pick<
    ComponentPropsWithoutRef<"button">,
    "onClick" | "type" | "disabled" | "className"
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
    className = "",
  } = props;

  const baseStyles = "font-bold px-4 rounded-[8px]";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: outline
      ? "text-[#F43C60] border border-[#C6C7CB] bg-transparent"
      : "bg-[#F43C60] text-white",
    secondary: "bg-[#5A5D64] text-white",
    link: "text-[#F43C60] underline bg-transparent",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    small: "text-sm h-[38px]",
    medium: "text-base h-[48px]",
    large: "text-lg h-[56px]",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        outline && variant === "primary" && "border-1 border-[#C6C7CB]",
        className,
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
