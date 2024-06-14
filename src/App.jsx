import HeroContainer from "./components/HeroContainer";
import FrameComponent7 from "./components/FrameComponent7";
import FrameComponent6 from "./components/FrameComponent6";
import FrameComponent5 from "./components/FrameComponent5";
import FrameComponent4 from "./components/FrameComponent4";
import FrameComponent3 from "./components/FrameComponent3";
// import FrameComponent2 from "./components/FrameComponent2";
import PeaceBtn from "./components/PeaceBtn";
import FrameComponent1 from "./components/FrameComponent1";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[38px] box-border gap-[136px] leading-[normal] tracking-[normal] mq750:gap-[68px] mq450:gap-[34px]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[47.5px] box-border top-[0] z-[99] sticky max-w-full">
        <header className="flex-1 [backdrop-filter:blur(32px)] bg-gray-600 flex flex-row items-start justify-between pt-2 px-20 pb-0 box-border max-w-full gap-[20px] z-[2] mq750:pl-10 mq750:pr-10 mq750:box-border">
          <img
            className="h-[100px] w-[172px] relative object-contain mq450:w-[100px]"
            loading="lazy"
            alt=""
            src="/osumare-logo01-2-4@2x.png"
          />
          <div className="w-[216px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border mq450:w-[130px]">
            <button className="cursor-pointer py-2 px-[23px] bg-[transparent] self-stretch rounded-13xl flex flex-row items-start justify-start gap-[4px] whitespace-nowrap border-[1px] border-solid border-gray-400 hover:bg-darkslategray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <a className="[text-decoration:none] flex-1 relative text-base leading-[24px] font-bold font-h200-blod text-gray-400 text-center">
                Contact us
              </a>
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/customerservice2fill.svg"
              />
            </button>
          </div>
        </header>
      </section>
      <HeroContainer />
      <FrameComponent7 />
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      {/* <FrameComponent2 /> */}
      <PeaceBtn />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border max-w-full text-center text-13xl text-gray-400 font-h300-bold">
        <div className="flex-1 [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#f9f9f9)] overflow-hidden flex flex-col items-start justify-start pt-[83px] pb-[72.2px] pr-[57px] pl-[103px] box-border gap-[64px] max-w-full z-[2] lg:pt-[54px] lg:pb-[47px] lg:box-border mq750:gap-[32px] mq750:pl-[51px] mq750:pr-7 mq750:box-border mq450:gap-[16px] mq450:pl-5 mq450:pt-[23px] mq450:pb-5 mq450:box-border mq1050:pt-[35px] mq1050:pb-[31px] mq1050:box-border">
          <div className="w-full flex flex-row items-start justify-center max-w-full">
            <div className="w-[1040px] flex flex-col items-start justify-start gap-[16px] max-w-full">
              <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                What Our Pharma Partners Say
              </b>
              <div className="self-stretch relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
                Driving Transformations, One Brand at a Time
              </div>
            </div>
          </div>
          <FrameComponent1 />
          <Faq />
        </div>
      </section>
      <div className="w-[381.9px] h-[630.4px] absolute !m-[0] right-[-119.52px] bottom-[2873.97px] [filter:blur(335px)] rounded-[50%] bg-tomato [transform:_rotate(-126deg)] [transform-origin:0_0] z-[1]" />
      <div className="w-[576px] h-[576px] absolute !m-[0] bottom-[3147.35px] left-[525.8px] [filter:blur(335px)] rounded-[50%] bg-dodgerblue-100 [transform:_rotate(140.5deg)] [transform-origin:0_0] z-[1]" />
      <section className="self-stretch flex flex-col items-end justify-start gap-[96px] max-w-full mq750:gap-[48px] mq450:gap-[24px]">
        <FormSection />
        <Footer />
      </section>
    </div>
  );
};

export default App;
