"use client";
import Button from "@/components/common/Button/Button";
import Typography from "@/components/common/Typography/Typography";
import Image from "next/image";
import thirdImage from "../image/third.png";
import { useRouter } from "next/navigation";
const ThirdStep = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col items-center">
      <Typography
        className="flex flex-col items-center pb-[40px] font-bold text-neutral-900"
        variant="Title3"
      >
        <div>코스 인증을 모두 완료하면</div>
        <div>특별한 트래블컷이 완성돼요</div>
      </Typography>
      <Image
        className="h-[420px] w-[260px] object-cover pb-4"
        src={thirdImage}
        alt="first"
      />
      <div className="flex h-[14px] w-full justify-center pb-[37px]">
        <div className="flex items-center space-x-2">
          <div className="h-[6px] w-[6px] rounded-full bg-neutral-100"></div>
          <div className="h-[6px] w-[6px] rounded-full bg-neutral-100"></div>
          <div className="h-[6px] w-[16px] rounded-full bg-neutral-300"></div>
        </div>
      </div>
      <Button onClick={() => push("/")} className="w-full" size="medium">
        시작하기
      </Button>
    </div>
  );
};

export default ThirdStep;
