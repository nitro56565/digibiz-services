import TrendCards from "./TrendCards";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`mq750:pb-[700px] mq450:pb-[900px] self-stretch flex flex-row items-start justify-center pt-0 px-20 pb-[72px] box-border max-w-full text-center text-13xl text-gray-400 font-h300-bold mq750:pl-10 mq750:pr-10 mq750:pb-[31px] mq750:box-border mq1050:pb-[47px] mq1050:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[64px] max-w-full mq750:gap-[32px] mq450:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
              Navigating Real Estate's Digital Landscape
            </b>
            <div className="self-stretch h-11 relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 flex items-center justify-center shrink-0 mq450:text-lgi mq450:leading-[29px]">
              Insights for Real Estate Marketing Advantage
            </div>
          </div>
        </div>
        <div className="self-stretch h-[736px] flex flex-row flex-wrap items-center justify-center relative left-[-320px] lg:left-0  max-w-full text-left text-5xl font-poppins mq750:h-auto mq750:min-h-[736]">
          <div className="z-[10] w-[586px] !m-[0] absolute top-[38px] mq1050:left-[0px] left-[60px] flex flex-col items-start justify-start gap-[16px] max-w-full">
            <TrendCards
              group116="/group-116.svg"
              marketTrendsAnalysis="Market Trends Analysis"
              predictiveInsightsToGuide="Predictive insights to guide real estate strategies."
            />
            <TrendCards
              group116="/group-116-1.svg"
              marketTrendsAnalysis="Targeted Buyer Persona"
              predictiveInsightsToGuide="Understand and connect with your ideal property buyers."
              propPadding="43px 31px"
              propMargin="unset"
            />
            <TrendCards
              group116="/group-116-2.svg"
              marketTrendsAnalysis="Competitor Insights"
              predictiveInsightsToGuide="Stand out in the property market with informed strategies."
              propPadding="43px 31px"
              propMargin="0"
            />
            <TrendCards
              group116="/group-116-3.svg"
              marketTrendsAnalysis="Visual Content Appeal"
              predictiveInsightsToGuide="Captivate buyers with appealing visuals and immersive experiences."
              propPadding="31px"
              propMargin="0"
            />
          </div>
          <div className="lg:collapse mq450::collapse h-[736px] w-[793px] !m-[0] absolute top-[0px] left-[487px] rounded-13xl bg-whitesmoke-100 flex flex-row items-start justify-start py-[50px] pr-[18px] pl-7 box-border max-w-full z-[1] text-13xl text-white font-lato">
            <div className="h-[556px] flex-1 relative max-w-full">
              <div className="absolute top-[0px] left-[0px] w-full h-[517px]">
                <img src="/man-board.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
