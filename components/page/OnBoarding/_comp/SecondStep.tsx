"use client";
import Button from "@/components/common/Button/Button";
import Typography from "@/components/common/Typography/Typography";
import Image from "next/image";
import secondImag from "../image/second.png";
import { useRouter } from "next/navigation";

const SecondStep = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col items-center">
      <Typography
        className="flex flex-col items-center pb-[40px] font-bold"
        variant="Title3"
      >
        <div>장소 인증하고</div>
        <div>나만의 트래블로그 남기기!</div>
      </Typography>
      <Image className="pb-[16px]" src={secondImag} alt="first" />
      <div className="flex h-[14px] w-full justify-center pb-[37px]">
        <div className="flex items-center space-x-2">
          <div className="h-[6px] w-[6px] rounded-full bg-gray-300"></div>
          <div className="h-[6px] w-[16px] rounded-full bg-gray-400"></div>
          <div className="h-[6px] w-[6px] rounded-full bg-gray-300"></div>
        </div>
      </div>
      <Button
        onClick={() => push("/onboarding/third")}
        className="w-[350px]"
        size="medium"
      >
        다음
      </Button>
    </div>
  );
};

export default SecondStep;