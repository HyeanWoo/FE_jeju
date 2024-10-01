"use client";
import BottomSheet from "@/components/common/Modal/BottomSheet/BottomSheet";
import { useRouter } from "next/navigation";

interface ConfirmModalProps {
  onClose: () => void;
  summaryId: number;
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const { onClose, summaryId } = props;

  const { push } = useRouter();

  return (
    <BottomSheet onClose={onClose}>
      <div className="relative w-full rounded-t-2xl bg-white pl-4 pr-4">
        <div className="flex h-full flex-col items-start justify-between text-left">
          <div className="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="mb-4 h-8 w-8"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path
                fillRule="evenodd"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="flex h-[116px] flex-col justify-center">
            <p className="mb-1 text-lg font-bold">
              코스 인증을 모두 완료하셨네요!
            </p>

            <p className="mb-6 text-sm text-gray-600">
              회원님을 위한 특별한 트래블컷을 선물해드릴게요.
            </p>
          </div>

          <button
            className="w-full rounded-md bg-[#F43C60] py-3 text-white"
            onClick={() => {
              push(`/download?id=${summaryId}&tab=mountain`);
            }}
          >
            확인하러 가기
          </button>
        </div>
      </div>
    </BottomSheet>
  );
};

export default ConfirmModal;
