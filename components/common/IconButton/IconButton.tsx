import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type IconButtonSize = "large" | "medium" | "small";

interface IconButtonProps
  extends Pick<ComponentPropsWithoutRef<"button">, "type" | "onClick"> {
  size: IconButtonSize;
}

const IconButton = (props: IconButtonProps) => {
  const { size = "medium", type = "button", onClick } = props;

  const baseStyles = "border border-[#C6C7CB] flex items-center justify-center";

  const sizeStyles = clsx({
    "w-[56px] h-[56px] p-4 rounded-[14px]": size === "large",
    "w-[48px] h-[48px] p-3 rounded-[12px]": size === "medium",
    "w-[38px] h-[38px] p-2 rounded-[10px]": size === "small",
  });

  return (
    <button
      className={clsx(baseStyles, sizeStyles)}
      type={type}
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M16.05 4C18.7838 4 21 6.25 21 9.4C21 15.7 14.25 19.3 12 20.65C9.75 19.3 3 15.7 3 9.4C3 6.25 5.25 4 7.95 4C9.62397 4 11.1 4.9 12 5.8C12.9 4.9 14.376 4 16.05 4ZM12.8405 18.0434C13.6339 17.5437 14.349 17.046 15.0194 16.5126C17.7003 14.3797 19.2 12.0492 19.2 9.4C19.2 7.27668 17.8167 5.8 16.05 5.8C15.0817 5.8 14.0334 6.3122 13.2728 7.07279L12 8.34559L10.7272 7.07279C9.96661 6.3122 8.91831 5.8 7.95 5.8C6.20315 5.8 4.8 7.29085 4.8 9.4C4.8 12.0492 6.29964 14.3797 8.98063 16.5126C9.651 17.046 10.366 17.5437 11.1595 18.0434C11.4281 18.2127 11.695 18.3756 12 18.5577C12.305 18.3756 12.5719 18.2127 12.8405 18.0434Z"
          fill="#F43C60"
        />
      </svg>
    </button>
  );
};

export default IconButton;