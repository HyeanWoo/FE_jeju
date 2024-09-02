import Image from "next/image";

const HomeHeroBanner = () => {
  return (
    <section className="container relative mx-auto">
      <div>
        <Image
          src="/image/temp/temp-main-image.png"
          alt="main-image"
          width={350}
          height={400}
          style={{ width: 350, height: 400 }}
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
        <h3 className="text-bodyRegular text-white">
          동진/다혜 커플이 걸었던 갈대밭
        </h3>
        <div className="flew-col text-label flex space-x-1.5 text-white">
          <h4 className="">설렘주의</h4>
          <span className="tag-divider"></span>
          <h4 className="">재회각</h4>
          <span className="tag-divider"></span>
          <h4 className="">가을</h4>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroBanner;
