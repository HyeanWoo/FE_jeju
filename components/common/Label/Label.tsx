import { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return (
    <div className="inline-flex items-center rounded-full bg-black bg-opacity-40 px-3 py-2 text-center text-white">
      {children}
    </div>
  );
};

export default Label;
