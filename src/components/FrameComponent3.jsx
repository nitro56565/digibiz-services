import ActionPairsOne from "./ActionPairsOne";

const FrameComponent3 = ({ className = "" }) => {
  return (<>
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-20 box-border max-w-full text-center text-13xl text-gray-400 font-h300-bold mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[100px] max-w-full mq750:gap-[50px] mq450:gap-[25px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[707px] relative leading-[48px] font-extrabold inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
            Our Expertise in Action
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[35px] max-w-full mq750:gap-[17px]">
          <ActionPairsOne
            virtual105695042="/weather-534564-2@2x.png"
            callToActionOptimization="Effective CTAs"
            ourCarefullyCraftedCTAsGu=" See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency."
            propPadding="unset"
            propMinWidth="406px"
            propHeight="108px"
          />
          <ActionPairsOne
            virtual105695042="/mass-9984040-2@2x.png"
            callToActionOptimization="Conversion-Optimized Landing Pages"
            ourCarefullyCraftedCTAsGu="Explore a case study where our landing page optimization increased property lead conversion rates by 30%"
            propPadding="unset"
            propMinWidth="406px"
            propHeight="108px"
          />
        </div>
      </div>
    </section>
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-20 pb-[57.5px] box-border max-w-full text-center text-5xl text-gray-400 font-h300-bold mq750:pl-10 mq750:pr-10 mq750:box-border mq450:pb-[37px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[35px] max-w-full mq750:gap-[17px]">
        <ActionPairsOne
          virtual105695042="/3dmodel-9040866-3@2x.png"
          callToActionOptimization="Trust Building with Social Proof"
          ourCarefullyCraftedCTAsGu="Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project"
          propPadding="unset"
          propMinWidth="404px"
          propHeight="108px"
        />
        <ActionPairsOne
            virtual105695042="/medal-2439078-1-1@2x.png"
            callToActionOptimization="Mobile-First Success:"
            ourCarefullyCraftedCTAsGu="Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency."
            propPadding="unset"
            propMinWidth="406px"
            propHeight="108px"
          />
      </div>
    </section>
  </>);
};


export default FrameComponent3;
