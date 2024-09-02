import { ReactNode } from "react";
import clsx from "clsx";

type TypographyVariant =
  | "Display2"
  | "Title1"
  | "Title2"
  | "Title3"
  | "Heading1"
  | "Heading2"
  | "Headline1"
  | "Headline2"
  | "Body1Normal"
  | "Body1Reading"
  | "Body2Normal"
  | "Body2Reading"
  | "Label1Normal"
  | "Label1Reading"
  | "Label2"
  | "Caption1"
  | "Caption2";

const typographyStyles: { [key in TypographyVariant]: string[] } = {
  Display2: ["text-[40px]", "leading-[52px]", "tracking-[-0.0282em]"],
  Title1: ["text-[36px]", "leading-[48px]", "tracking-[-0.027em]"],
  Title2: ["text-[28px]", "leading-[38px]", "tracking-[-0.0236em]"],
  Title3: ["text-[24px]", "leading-[32px]", "tracking-[-0.023em]"],
  Heading1: ["text-[22px]", "leading-[30px]", "tracking-[-0.0194em]"],
  Heading2: ["text-[20px]", "leading-[28px]", "tracking-[-0.012em]"],
  Headline1: ["text-[18px]", "leading-[26px]", "tracking-[-0.002em]"],
  Headline2: ["text-[17px]", "leading-[24px]", "tracking-[0em]"],
  Body1Normal: ["text-[16px]", "leading-[24px]", "tracking-[0.0057em]"],
  Body1Reading: ["text-[16px]", "leading-[26px]", "tracking-[0.0057em]"],
  Body2Normal: ["text-[15px]", "leading-[22px]", "tracking-[0.0096em]"],
  Body2Reading: ["text-[15px]", "leading-[24px]", "tracking-[0.0096em]"],
  Label1Normal: ["text-[14px]", "leading-[20px]", "tracking-[0.0145em]"],
  Label1Reading: ["text-[14px]", "leading-[22px]", "tracking-[0.0145em]"],
  Label2: ["text-[13px]", "leading-[18px]", "tracking-[0.0194em]"],
  Caption1: ["text-[12px]", "leading-[16px]", "tracking-[0.0252em]"],
  Caption2: ["text-[11px]", "leading-[14px]", "tracking-[0.0311em]"],
};

interface TypographyProps {
  variant: TypographyVariant;
  children: ReactNode;
  className?: string;
}

const Typography = (props: TypographyProps) => {
  const { variant, children, className } = props;

  return (
    <div className={clsx(typographyStyles[variant], className)}>{children}</div>
  );
};

export default Typography;
