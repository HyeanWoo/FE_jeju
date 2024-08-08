"use client";

import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";

interface SectionProps extends PropsWithChildren {
  title: string;
  isDetail?: boolean;
}

const Section = ({ title, children, isDetail }: SectionProps) => {
  const onClickMore = () => {
    console.log(`${title} - 더보기 클릭됨`);
  };

  return (
    <section className="container flex flex-col space-y-3">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-neutral-900">{title}</h2>
        {isDetail && (
          <button className="flex items-center" onClick={onClickMore}>
            <h5 className="text-sm leading-[17.5px] text-neutral-400">
              더보기
            </h5>
            <img
              src="/image/icon/arrow-drop-right-line.svg"
              alt="arrow-drop-right-line"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      {children}
    </section>
  );
};

interface SectionItemListProps {
  items: any[];
  renderItem: (item: any) => ReactNode;
}

const SectionItemList = ({ items, renderItem }: SectionItemListProps) => {
  return (
    <div className="flex space-x-3 overflow-x-auto">
      {items.map(renderItem)}
    </div>
  );
};

interface SectionListItemProps {
  item: any;
  titleKey: string;
  subtitleKey: string;
  imageKey: string;
}

const SectionListItem = ({
  item,
  titleKey,
  subtitleKey,
  imageKey,
}: SectionListItemProps) => {
  return (
    <div className="flex-none flex-col space-y-2">
      <Image
        src={item[imageKey]}
        alt={item[titleKey]}
        width={140}
        height={140}
        className="h-[140px] w-[140px] rounded-[4px] object-cover"
      />
      <div className="flex flex-col space-y-1">
        <h3 className="font-bold text-neutral-800">{item[titleKey]}</h3>
        <h5 className="text-xs font-semibold text-neutral-400">
          {item[subtitleKey]}
        </h5>
        <h4 className="text-sm font-medium text-neutral-700">
          {item.location}
        </h4>
      </div>
    </div>
  );
};

Section.ItemList = SectionItemList;
Section.ListItem = SectionListItem;

export default Section;
