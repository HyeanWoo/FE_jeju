"use client";
import Button from "@/components/common/Button/Button";
import Typography from "@/components/common/Typography/Typography";
import Image from "next/image";
import firstImag from "../image/first.png";
import { useRouter } from "next/navigation";
const FirstStep = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col items-center">
      <Typography
        className="flex flex-col items-center pb-[40px] font-bold text-neutral-900"
        variant="Title3"
      >
        <div>방송에서 봤던 제주도 여행코스</div>
        <div>내 여행코스에 저장!</div>
      </Typography>
      <Image
        className="h-[420px] w-[260px] object-cover pb-4"
        src={firstImag}
        alt="first"
      />
      <div className="flex h-[14px] w-full justify-center pb-[37px]">
        <div className="flex items-center space-x-2">
          <div className="h-[6px] w-[16px] rounded-full bg-neutral-300"></div>
          <div className="h-[6px] w-[6px] rounded-full bg-neutral-100"></div>
          <div className="h-[6px] w-[6px] rounded-full bg-neutral-100"></div>
        </div>
      </div>
      <Button
        onClick={() => push("/onboarding/second")}
        className="w-full"
        size="medium"
      >
        다음
      </Button>
    </div>
  );
};

export default FirstStep;
