import { useMemo } from "react";

const ActionPairsOne = ({
  className = "",
  virtual105695042,
  callToActionOptimization,
  ourCarefullyCraftedCTAsGu,
  propPadding,
  propMinWidth,
  propHeight,
}) => {
  const actionPairsOneStyle = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propPadding, propMinWidth]);

  const ourCarefullyCraftedStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start py-9 px-0 box-border gap-[29px] min-w-[335px] max-w-full text-center text-5xl text-gray-400 font-h300-bold mq450:pt-[23px] mq450:pb-[23px] mq450:box-border ${className}`}
      style={actionPairsOneStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="w-[190px] flex flex-row items-start justify-start">
          <div className="h-[190px] flex-1 relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-200 w-full h-full" />
            <img
              className="absolute top-[31px] left-[31.5px] w-32 h-32 object-contain z-[2]"
              loading="lazy"
              alt=""
              src={virtual105695042}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[38px]">
          {callToActionOptimization}
        </b>
        <p
          className="m-0 self-stretch h-[108px] relative leading-[36px] font-body300-rg text-darkslategray-200 inline-block mq450:text-lgi mq450:leading-[29px]"
          style={ourCarefullyCraftedStyle}
        >
          {ourCarefullyCraftedCTAsGu}
        </p>
      </div>
    </div>
  );
};
export default ActionPairsOne;
