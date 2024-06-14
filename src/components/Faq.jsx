import { useState } from "react";

const Faq = ({ className = "" }) => {

const [selected, setSelected] = useState(null);
  
const toggle= (i)=>{
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }

const data = [
    {
        question: "Optimized Path to Property Purchase",
        answer: "At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market."
    },
    {
        question: "Optimized Path to Property Purchase",
        answer: "At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market."
    },
    {
        question: "Optimized Path to Property Purchase",
        answer: "At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market."
    },
]  
let after = "h-auto max-h-9999"
let before = "max-h-0 overflow-hidden transition-all duration-500"
    return (
        <div
        className={`self-stretch flex flex-col items-center justify-start gap-[64px] max-w-full text-center text-13xl text-gray-400 font-h300-bold mq750:gap-[32px] mq450:gap-[16px] ${className}`}
      >
        <div className="w-[1030px] flex flex-col items-center justify-center gap-[16px] max-w-full">
          <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
            Frequently Asked Questions
          </b>
          <p className="m-0 w-[984px] h-[72px] relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 inline-block max-w-full mq450:text-lgi mq450:leading-[29px]">
            Pinpoint your audience with precision, ensuring your marketing efforts
            reach those most likely to engage with your brand.
          </p>
        </div>
        <div className="w-[1280px] overflow-x-auto flex flex-col items-center justify-start py-0 px-5 box-border max-w-full text-left text-lg text-gray-500">
                {data.map((item,i) =>(<>
                    <div className="cursor-pointer w-[800px] shadow-[0px_10px_15px_rgba(0,_120,_255,_0.35)] bg-white flex flex-col items-start justify-start py-5 pr-[49px] pl-[45px] box-border">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <div className="relative leading-[28px] font-semibold" onClick={()=> toggle(i)}>
                        {item.question}
                        </div>
                    <div className="flex flex-row items-center justify-end text-xl font-roboto">
                        <div className="relative leading-[20px] [transform:_rotate(180deg)] mq450:text-base mq450:leading-[16px]">
                        ˇ
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="w-[800px] shadow-[0px_10px_15px_rgba(0,_0,_0,_0.1)] bg-white flex flex-col items-start justify-start">
                    </div>
                    <div className="w-[800px] shadow-[0px_10px_15px_rgba(0,_0,_0,_0.1)] rounded-t-none rounded-b-lg bg-white flex flex-col items-start justify-start text-base text-dimgray font-body300-rg">
                    <div className={`${selected === i ? after : before} max-h-0 self-stretch flex flex-row items-start justify-start pt-7 pb-[27.8px] pr-[51px] pl-[45px] box-border max-h-[200px] max-w-full`}>
                    <p className="m-0 h-[117px] flex-1 relative leading-[24px] inline-block max-w-full">
                        {item.answer}
                    </p>
                    </div>
                    </div>
                    </>))}
        </div>
      </div>
  )};
  
  export default Faq;
  