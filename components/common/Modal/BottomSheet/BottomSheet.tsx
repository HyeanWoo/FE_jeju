"use client";
import { PropsWithChildren } from "react";
import ModalPortal from "../ModalPortal";

interface BottomSheetProps extends PropsWithChildren {
  onClose: () => void;
}

const BottomSheet = (props: BottomSheetProps) => {
  const { onClose, children } = props;
  return (
    <ModalPortal>
      <div className="fixed inset-0 z-50 flex items-end justify-center">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>
        <div className="relative h-[317px] w-full max-w-[390px] rounded-t-2xl bg-white p-4 pt-[46px]">
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default BottomSheet;
