
const FrameComponent7 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-20 pb-[96.5px] box-border max-w-full text-center text-13xl text-gray-400 font-h300-bold mq750:pl-10 mq750:pr-10 mq750:pb-[63px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[64px] max-w-full mq750:gap-[32px] mq450:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
          <b className="w-[839px] relative leading-[48px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
            Real Estate-Focused Digital Mastery
          </b>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center gap-[39px] max-w-full text-left lg:flex-wrap mq750:gap-[19px]">
          <img
            className="w-[507.1px] relative max-h-full max-w-full lg:flex-1"
            loading="lazy"
            alt=""
            src="/directingthearrowupcuate.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[476px] max-w-full mq750:gap-[16px] mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <b className="w-[646px] h-24 relative leading-[48px] inline-block max-w-full mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                Unlock the Potential of Digital Real Estate Excellence
              </b>
              <p className="text-lg	m-0 self-stretch h-[170px] relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 inline-block mq450:text-lgi mq450:leading-[29px] mq750:h-[260px] mq450:h-[260px]">
                At Digibix Technology, we understand that the real estate landscape demands
                a digital presence that aligns with the intricacies of property
                marketing. Our range of specialized services is meticulously
                designed to catapult your brand's success in the ever-evolving
                digital property market.
              </p>
            </div>
            <div className="w-full flex justify-center">
            <button className="cursor-pointer [border:none] py-[16.5px] px-16 bg-royalblue rounded-13xl flex flex-row items-center justify-center gap-[4px] whitespace-nowrap hover:bg-cornflowerblue">
              <b className="relative text-lg leading-[28px] font-semibold font-h300-bold text-white text-center">
                Get started
              </b>
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/customerservice2fill1.svg"
              />
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
