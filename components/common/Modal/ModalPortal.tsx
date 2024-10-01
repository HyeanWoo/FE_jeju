import { useState, PropsWithChildren, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: PropsWithChildren) => {
  const [el, setEl] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    setEl(document.getElementById("modal"));
  }, []);

  if (!el) return null;

  return createPortal(children, el);
};

export default ModalPortal;
