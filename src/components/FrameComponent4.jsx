import ActionPairsOne from "./ActionPairsOne";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`mq750:pt-[150px] mq450:pt-[250px] self-stretch flex flex-row items-start justify-end pt-0 pb-6 pr-[79px] pl-20 box-border max-w-full text-center text-13xl text-gray-400 font-h300-bold mq750:pl-10 mq750:pr-[39px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[64px] max-w-full mq750:gap-[32px] mq450:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
              {" "}
              Driving Property Inquiries to Conversions
            </b>
            <div className="self-stretch h-11 relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 flex items-center justify-center shrink-0 mq450:text-lgi mq450:leading-[29px]">
              Streamlined Strategies for Real Estate Success
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-left">
          <div className="flex-1 flex flex-row flex-wrap items-center justify-center py-0 pr-0.5 pl-0 box-border max-w-full gap-[20px]">
            <img
              className="w-[500px] relative max-h-full max-w-full"
              loading="lazy"
              alt=""
              src="/housesearchingbro.svg"
            />
            <div className="w-[682px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
              <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
                <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                  Optimized Path to Property Purchase
                </b>
                <p className="mq750:pb-[100px] m-0 self-stretch h-[216px] relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 inline-block mq450:text-lg mq750:text-xl">
                  In the dynamic realm of real estate, the journey from a
                  property inquiry to a successful conversion demands a
                  well-crafted approach. At Digibiz Technology, we specialize in guiding
                  potential buyers through this journey seamlessly, maximizing
                  inquiries-turned-conversions with expert strategies.
                </p>
              </div>
              <div className="mq750:flex mq750:w-full mq750:justify-center">
              <button className="mq750:flex mq750:justtify-center cursor-pointer [border:none] py-[16.5px] px-16 bg-royalblue rounded-13xl flex flex-row items-center justify-center gap-[4px] whitespace-nowrap hover:bg-cornflowerblue">
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
        <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
          Driving Property Inquiries to Conversions
        </b>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-0.5 pl-0 box-border gap-[35px_33px] max-w-full text-5xl mq750:gap-[16px]">
          <ActionPairsOne
            virtual105695042="/virtual-10569504-2@2x.png"
            callToActionOptimization="Call-to-Action Optimization"
            ourCarefullyCraftedCTAsGu="Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
          />
          <ActionPairsOne
            virtual105695042="/onlinestore-3929777-2@2x.png"
            callToActionOptimization="Landing Page Efficiency"
            ourCarefullyCraftedCTAsGu="Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
            propPadding="36px 0px"
            propMinWidth="335px"
            propHeight="108px"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-0.5 pl-0 box-border gap-[38px_36px] max-w-full mq750:gap-[18px]">
          <ActionPairsOne
            virtual105695042="/3d-9345318-2@2x.png"
            callToActionOptimization="Social Proof Utilization"
            ourCarefullyCraftedCTAsGu="Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action"
            propPadding="36px 0px"
            propMinWidth="335px"
            propHeight="108px"
          />
          <ActionPairsOne
            virtual105695042="/augmentedreality-7065057-2@2x.png"
            callToActionOptimization="Mobile-Friendly Experience"
            ourCarefullyCraftedCTAsGu="With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
            propPadding="unset"
            propMinWidth="335px"
            propHeight="180px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
