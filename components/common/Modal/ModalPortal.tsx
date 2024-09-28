"use client";
import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const ModalPortal = (props: PropsWithChildren) => {
  const { children } = props;
  const el = document.getElementById("modal") as HTMLElement;
  return createPortal(children, el);
};

export default ModalPortal;
