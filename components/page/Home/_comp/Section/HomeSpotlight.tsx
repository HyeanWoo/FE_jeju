"use client";

import Section from "@/components/common/Section/Section";
import { useSummary, useSummaryContents } from "@/components/api/queries";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";

const HomeSpotlight = () => {
  const { data: { summary } = {} } = useSummary(5);
  const { data: { contents } = {} } = useSummaryContents(5);

  if (!summary || !contents) {
    return <div>로딩중...</div>;
  }

  return (
    <Section title="환승연애3에서 가장 주목받은 제주 스팟">
      <div className="flex flex-col space-y-3 rounded-[10px] bg-gradient-to-b from-main-500 to-main-300 p-4">
        <div className="flex space-x-3">
          <ThumbnailImage
            src={summary?.image.imageUrl ?? ""}
            alt={summary?.image.imageName ?? ""}
            width={96}
            height={136}
            className="h-[136px] w-[96px] rounded-lg object-cover"
          />
          <div className="flex w-full flex-col justify-center space-y-1">
            <h4 className="text-heading text-white">{summary?.title}</h4>
            <h5 className="text-caption text-white">{summary?.description}</h5>
          </div>
        </div>
        <p className="text-label text-white">
          방송 이후 관광 데이터 기준 가장 많은 주목을 받고 있는 제주 핫플을
          추천해 드려요.
        </p>
        <div className="flex flex-col">
          {contents.slice(0, 2).map(({ content }) => (
            <div key={content.id} className="flex space-x-3 py-3">
              <ThumbnailImage
                src={content.imageList[0].imageUrl}
                alt={content.imageList[0].imageName}
                width={70}
                height={70}
                className="h-[70px] w-[70px] rounded-[4px] object-cover"
              />
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col space-y-1 py-[3px]">
                  <h3 className="text-bodyBold text-white">{content.title}</h3>
                  <h5 className="text-caption text-white">
                    {content.category}
                  </h5>
                  <h4 className="text-label text-white">
                    {content.description}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HomeSpotlight;
