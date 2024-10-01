"use client";
import Button from "@/components/common/Button/Button";
import Typography from "@/components/common/Typography/Typography";

import DownloadTabs from "./DownloadTabs";
import { toPng } from "html-to-image";
import { useCallback, useRef, useState } from "react";
import TravelCut from "./TravelCut";
import CompletedModal from "./CompletedModal";

const Detail = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "travel-cut.png";
        link.href = dataUrl;
        link.click();
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-start">
        <Typography className="text-[#43464B]" variant="Body1Normal">
          세상에 단 하나뿐인
        </Typography>
        <Typography
          className="flex flex-col items-center pb-[40px] font-bold"
          variant="Title3"
        >
          <div>나만의 트래블컷을 만들었어요</div>
        </Typography>
      </div>
      <DownloadTabs />
      <TravelCut ref={ref} />
      <Button onClick={onButtonClick} className="w-[350px]" size="medium">
        저장하기
      </Button>
      {open && <CompletedModal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default Detail;
