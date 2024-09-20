"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { useSummaries } from "@/components/api/queries";
import Image from "next/image";
import { IMAGE_SERVER_URL } from "@/components/common/constants";
import { Summary } from "@/components/api/types";

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

  const tags = signatureSummary?.tag?.split(",") ?? [];

  const checkLastTag = (currentIndex: number, tagLength: number) => {
    return tagLength - 1 === currentIndex;
  };

  if (!signatureSummary) {
    return <div>loading...</div>;
  }

  return (
    <section className="container relative mx-auto">
      <div>
        <Image
          src={`${IMAGE_SERVER_URL}${signatureSummary?.image.imageUrl ?? ""}`}
          alt="main-image"
          width={350}
          height={400}
          style={{ width: 350, height: 400 }}
          className="sm:hidden"
        />
        <Image
          src={`${IMAGE_SERVER_URL}${signatureSummary?.image.imageUrl ?? ""}`}
          alt="main-image"
          width={704}
          height={450}
          style={{ width: 704, height: 450 }}
          className="hidden sm:flex"
        />
      </div>
      <div className="absolute bottom-5 left-5 flex flex-col space-y-2">
        <Image
          src="/image/logo/temp-main-program-logo.svg"
          alt="temp-main-program-logo"
          width={133}
          height={37}
          style={{ width: 133, height: 37 }}
        />
        <h3 className="bg-black bg-opacity-25 text-bodyRegular text-white">
          {signatureSummary.title}
        </h3>
        <div className="flew-col flex space-x-1.5 text-label text-white">
          {tags.map((tag, index) => (
            <Fragment key={tag}>
              <h5 className="text-label text-neutral-400">{tag}</h5>
              {checkLastTag(index, tags.length) && (
                <span className="tag-divider-gray" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHeroBanner;
