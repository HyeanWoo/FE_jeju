"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { useSummaries } from "@/components/api/queries";
import Image from "next/image";
import { Summary } from "@/components/api/types";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";

const HomeHeroBanner = () => {
  const { data } = useSummaries();

  const summaries = useMemo(
    () => data?.map((summary) => summary.summary) ?? [],
    [],
  );

  const [signatureSummary, setSignatureSummary] = useState<Summary>();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * summaries.length);
    setSignatureSummary(summaries[randomIndex]);
  }, [summaries]);

  const tags = signatureSummary?.tags?.split(",") ?? [];

  const checkLastTag = (currentIndex: number, tagLength: number) => {
    return tagLength - 1 !== currentIndex;
  };

  if (!signatureSummary) {
    return <div>loading...</div>;
  }

  return (
    <section className="container relative z-0 mx-auto cursor-default">
      <div>
        <ThumbnailImage
          src={signatureSummary?.image.imageUrl}
          alt="main-image"
          width={350}
          height={400}
          className="h-[400px] w-[350px] rounded-lg object-cover sm:hidden"
        />
        <ThumbnailImage
          src={signatureSummary?.image.imageUrl}
          alt="main-image"
          width={704}
          height={450}
          className="hidden h-[450px] w-[704px] rounded-lg object-cover sm:flex"
        />
      </div>
      <div className="absolute left-0 top-0 z-10 h-full w-full rounded-lg bg-gradient-to-b from-[#00000000] to-[#0000004D]" />
      <div className="absolute bottom-5 left-5 z-20 flex flex-col space-y-2">
        {/* <Image
          src="/image/logo/temp-main-program-logo.svg"
          alt="temp-main-program-logo"
          width={133}
          height={37}
          style={{ width: 133, height: 37 }}
        /> */}
        <h3
          className="text-bodyRegular text-white"
          dangerouslySetInnerHTML={{ __html: signatureSummary.title }}
        ></h3>
        <div className="flew-col flex space-x-1.5 text-label text-white">
          {tags.map((tag, index) => (
            <Fragment key={tag}>
              <h5 className="text-label text-white">{tag}</h5>
              {checkLastTag(index, tags.length) && (
                <span className="tag-divider-white" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHeroBanner;
