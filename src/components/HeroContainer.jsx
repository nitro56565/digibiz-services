const HeroContainer = ({ className = "" }) => {
  return (
    <section className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[85px] pr-5 pl-[21px] box-border max-w-full text-center text-29xl text-gray-400 font-h300-bold mq750:pb-9 mq750:box-border mq1050:pb-[55px] mq1050:box-border ${className}`}>
      <div className="w-[899px] flex flex-col items-start justify-start gap-[83.5px] max-w-full mq450:gap-[21px] mq1050:gap-[42px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <h1 className="m-0 self-stretch h-36 relative text-inherit leading-[72px] inline-block z-[2] font-inherit mq450:text-10xl mq450:leading-[43px] mq1050:text-19xl mq1050:leading-[58px]">
              <span className="font-medium">{`Elevate `}</span>
              <b className="text-royalblue">Real Estate Success</b>
              <span className="font-medium">
                {" "}
                with Osumare's Digital Expertise
              </span>
            </h1>
            <div className="mq450:pb-[30px] self-stretch relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 z-[2] mq450:text-lgi mq450:leading-[29px]">
              Tailored Solutions for Thriving in the Digital Real Estate
              Landscape
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <button className="cursor-pointer [border:none] py-[13px] px-5 bg-royalblue w-[408px] rounded-13xl flex flex-row items-start justify-center box-border gap-[4px] whitespace-nowrap max-w-full z-[2] hover:bg-cornflowerblue">
              <b className="relative text-5xl leading-[30px] font-bold font-h300-bold text-white text-center">
                Get started
              </b>
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/customerservice2fill.svg"
              />
            </button>
          </div>
        </div>
        <div className="self-stretch h-[538px] flex flex-row items-start justify-start py-0 pr-[52px] pl-[51px] box-border max-w-full text-13xl text-white font-lato mq1050:pl-[25px] mq1050:pr-[26px] mq1050:box-border mq450:h-[350px]">
          <div className="">
            <img
              className="w-full h-full max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/header-image.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
