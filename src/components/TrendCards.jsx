import { useMemo } from "react";

const TrendCards = ({
  className = "",
  group116,
  marketTrendsAnalysis,
  predictiveInsightsToGuide,
  propPadding,
  propMargin,
}) => {
  const trendCardsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const predictiveInsightsToStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div
      className={`self-stretch shadow-[-2px_4px_32px_rgba(235,_235,_235,_0.6)] rounded-2xl bg-white box-border flex flex-row items-center justify-center py-[43px] px-[31px] gap-[16px] max-w-full text-left text-5xl text-gray-400 font-poppins border-[1px] border-solid border-whitesmoke-300 mq750:flex-wrap ${className}`}
      style={trendCardsStyle}
    >
      <img
        className="h-[52px] w-[52px] relative"
        loading="lazy"
        alt=""
        src={group116}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[295px] max-w-full">
        <div className="self-stretch relative leading-[31.2px] font-semibold mq450:text-lgi mq450:leading-[25px]">
          {marketTrendsAnalysis}
        </div>
        <div
          className="self-stretch relative text-base tracking-[-0.02em] leading-[24px] font-h200-blod text-darkslategray-200"
          style={predictiveInsightsToStyle}
        >
          {predictiveInsightsToGuide}
        </div>
      </div>
    </div>
  );
};
export default TrendCards;
