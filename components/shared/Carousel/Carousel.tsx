"use client";

import {
  DRAG_THRESHOLD,
  TRANSLATE_X_THRESHOLD,
} from "@/components/common/constants";
import {
  useState,
  useEffect,
  useRef,
  ReactNode,
  MouseEvent,
  TouchEvent,
} from "react";

interface CarouselItem {
  content: ReactNode;
  onClick: () => void;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPosition, setStartPosition] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  const itemCount = items.length;
  const itemWidth = document.body.clientWidth < 765 ? 350 : 704;

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
    };
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval.current = setInterval(() => {
      handleNext();
    }, 500000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemCount - 1 : prevIndex - 1,
    );
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
    stopAutoSlide();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const currentPosition = e.clientX;
    const movedBy = currentPosition - startPosition;
    setTranslateX(movedBy);

    if (Math.abs(movedBy) > DRAG_THRESHOLD) {
      setDragging(true);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX > TRANSLATE_X_THRESHOLD) {
      handlePrev();
    } else if (translateX < -TRANSLATE_X_THRESHOLD) {
      handleNext();
    }

    if (!dragging) {
      const clickedIndex = currentIndex;
      items[clickedIndex].onClick && items[clickedIndex].onClick();
    }

    setTranslateX(0);
    setDragging(false);
    startAutoSlide();
  };

  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true);
    setStartPosition(e.touches[0].clientX);
    stopAutoSlide();
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const currentPosition = e.touches[0].clientX;
    const movedBy = currentPosition - startPosition;
    setTranslateX(movedBy);

    if (Math.abs(movedBy) > DRAG_THRESHOLD) {
      setDragging(true);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX > 50) {
      handlePrev();
    } else if (translateX < -50) {
      handleNext();
    }

    if (!dragging) {
      const clickedIndex = currentIndex;
      items[clickedIndex].onClick && items[clickedIndex].onClick();
    }

    setTranslateX(0);
    setDragging(false);
    startAutoSlide();
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative h-[200px] w-[350px] cursor-pointer overflow-hidden sm:w-[704px]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => isDragging && handleMouseUp()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * itemWidth}px + ${translateX}px))`,
            width: `${itemWidth * itemCount}px`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex h-[200px] w-[350px] flex-shrink-0 items-center justify-center sm:w-[704px]"
            >
              <div
                className="flex h-full w-full items-center justify-center"
                onClick={(e) => {
                  if (dragging) {
                    e.stopPropagation();
                  }
                }}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`cursor-pointer transition-all duration-300 ${
              currentIndex === index
                ? "h-[6px] w-[16px] rounded-full bg-neutral-300"
                : "h-[6px] w-[6px] rounded-full bg-neutral-100"
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
