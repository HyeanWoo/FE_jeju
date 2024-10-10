import Button from "@/components/common/Button/Button";
import BottomSheet from "@/components/common/Modal/BottomSheet/BottomSheet";
import Typography from "@/components/common/Typography/Typography";
import Link from "next/link";

interface CompletedModalProps {
  onClose: () => void;
}

const CompletedModal = ({ onClose }: CompletedModalProps) => {
  return (
    <BottomSheet onClose={onClose}>
      <div className="relative w-full rounded-t-2xl bg-white px-4 py-4">
        <div className="flex h-full flex-col items-start justify-between text-left">
          <div className="flex h-[116px] flex-col">
            <Typography
              variant="Title3"
              className="mb-1 pb-[20px] font-semibold"
            >
              사진을 저장했어요
            </Typography>

            <Typography variant="Body1Normal">
              다른 코스를 탐방하러 갈까요?
            </Typography>
          </div>

          <Link href={`/`} className="w-full">
            <Button
              className="w-full rounded-md bg-[#F43C60] py-3 font-semibold text-white"
              variant="secondary"
            >
              실물로 받아보기
            </Button>
          </Link>
          <Link href={`/`} className="w-full">
            <Button
              className="w-full py-3 font-semibold text-[#5A5D64]"
              variant="link"
            >
              괜찮아요
            </Button>
          </Link>
        </div>
      </div>
    </BottomSheet>
  );
};

export default CompletedModal;
