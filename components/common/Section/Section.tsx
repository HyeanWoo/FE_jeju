"use client";

import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";

interface SectionProps extends PropsWithChildren {
  title: string;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="container flex flex-col space-y-3">
      <div className="flex justify-between">
        <h2 className="text-heading text-neutral-900">{title}</h2>
      </div>
      {children}
    </section>
  );
};

interface SectionItemListProps {
  items: any[];
  isCursor?: boolean;
  renderItem: (item: any, index: number) => ReactNode;
}

const SectionItemList = ({
  items,
  renderItem,
  isCursor,
}: SectionItemListProps) => {
  return (
    <div
      className={`flex space-x-3 overflow-x-auto ${isCursor ? "cursor-pointer" : ""}`}
    >
      {items.map(renderItem)}
    </div>
  );
};

interface SectionListItemProps {
  item: any;
  titleKey: string;
  subtitleKey: string;
  imageKey: string;
  isCursor?: boolean;
}

const SectionListItem = ({
  item,
  titleKey,
  subtitleKey,
  imageKey,
}: SectionListItemProps) => {
  return (
    <div className={`flex-none flex-col space-y-2`}>
      <Image
        src={item[imageKey]}
        alt={item[titleKey]}
        width={140}
        height={140}
        className="h-[140px] w-[140px] rounded-[4px] object-cover"
        style={{ width: 140, height: 140 }}
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
