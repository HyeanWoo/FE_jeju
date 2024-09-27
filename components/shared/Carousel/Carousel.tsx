"use client";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  const itemCount = items.length;
  const dragThreshold = 10;

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
    }, 5000);
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

    if (Math.abs(movedBy) > dragThreshold) {
      setDragging(true);
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
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

    if (Math.abs(movedBy) > dragThreshold) {
      setDragging(true);
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
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
        className="relative h-[200px] w-[350px] cursor-pointer overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => isDragging && handleMouseUp({} as MouseEvent)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={carouselRef}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 350}px + ${translateX}px))`,
            width: `${350 * itemCount}px`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex h-[200px] w-[350px] flex-shrink-0 items-center justify-center"
              style={{ width: "350px", height: "200px" }}
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
