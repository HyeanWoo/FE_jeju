"use client";

import { Content } from "@/components/api/types";
import {
  DRAG_THRESHOLD,
  TRANSLATE_X_THRESHOLD,
} from "@/components/common/constants";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";
import Image from "next/image";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

export default function FullSizeImageGallery({
  close,
  currentIndex,
  isOpen,
  content,
  setImageIndex,
}: {
  content: Content;
  currentIndex: number;
  isOpen: boolean;
  close: () => void;
  setImageIndex: Dispatch<SetStateAction<number>>;
}) {
  const { imageList } = content;
  const itemCount = imageList.length;

  const galleryRef = useRef<HTMLDivElement>(null);

  const [translateX, setTranslateX] = useState<number>(0);
  const [startPosition, setStartPosition] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(0);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragging, setDragging] = useState<boolean>(false);

  useEffect(() => {
    const { clientWidth } = document.body;

    setItemWidth(clientWidth);
  }, []);

  const slideToPrev = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? itemCount - 1 : prevIndex - 1,
    );
  };

  const slideToNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % itemCount);
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) {
      return;
    }
    setIsDragging(false);

    if (translateX > TRANSLATE_X_THRESHOLD) {
      slideToPrev();
    } else if (translateX < -TRANSLATE_X_THRESHOLD) {
      slideToNext();
    }

    setTranslateX(0);
    setDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) {
      return;
    }

    const currentPosition = e.clientX;
    const movedBy = currentPosition - startPosition;
    setTranslateX(movedBy);

    if (Math.abs(movedBy) > DRAG_THRESHOLD) {
      setDragging(true);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 z-10 h-full w-full bg-black py-[11px]">
          <div className="flex w-full items-center justify-between px-2">
            <div className="flex items-center">
              <div className="p-3" onClick={close}>
                <Image
                  src="/image/icon/ph_caret-left.svg"
                  alt="ph_caret-left"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </div>
              <h3 className="text-heading text-white">{content.title}</h3>
            </div>
            <p className="px-3 text-caption text-neutral-400">{`${currentIndex + 1}/${itemCount}`}</p>
          </div>

          <div
            ref={galleryRef}
            className="relative flex h-5/6 cursor-pointer items-center overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => isDragging && handleMouseUp()}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex * itemWidth}px + ${translateX}px))`,
                width: `${itemWidth * itemCount}px`,
              }}
            >
              {imageList.map((item) => (
                <div
                  key={item.id}
                  className="flex h-5/6 w-screen flex-shrink-0"
                >
                  <div
                    className="flex h-full w-full"
                    onClick={(e) => {
                      if (dragging) {
                        e.stopPropagation();
                      }
                    }}
                  >
                    <div className="relative w-full">
                      <ThumbnailImage
                        src={item?.imageUrl}
                        alt={item?.imageName}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-full w-full object-contain"
                      />
                      <div className="absolute left-0 top-0 z-20 h-full w-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col space-y-2 px-5 pb-10 pt-6">
            <h5 className="text-caption text-neutral-100">
              {content.category}
            </h5>
            <h4 className="text-label text-white">{content.description}</h4>
          </div>
        </div>
      )}
    </>
  );
}
