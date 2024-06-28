import React from "react";

const Footer = ({ className = "" }) => {
  return (
    <div className={`w-full flex flex-row items-start justify-center py-0 px-16 box-border max-w-full lg:pl-8 lg:pr-8 lg:box-border ${className}`}>
      <footer className="w-[1408px] flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-5xl text-gray-400 font-h300-bold mq750:gap-[16px]">
        <div className="self-stretch backdrop-blur-md rounded-13xl bg-gradient-to-r from-blue-100 via-blue-100 to-blue-50 overflow-hidden flex flex-row items-start justify-between p-14 pb-28 box-border relative max-w-full gap-[20px] lg:pl-[21px] lg:box-border mq750:pt-9 mq750:pb-16 mq750:box-border mq1050:flex-wrap">
          <div className="w-[370px] flex flex-col items-start justify-start pr-[5px] box-border gap-[32px] text-base font-body300-rg mq450:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start pb-[15px] gap-[16px] text-darkslategray-200">
              <div className="h-[72px] rounded overflow-hidden shrink-0 flex flex-col items-start justify-center pr-3 box-border z-[1]">
                <img className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" loading="lazy" alt="" src="/transparent logo.png" />
              </div>
              <p className="m-0 self-stretch relative leading-[24px] z-[1]">
                The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.
              </p>
            </div>
            <div className="w-[196px] flex flex-col items-start justify-start gap-[8px] text-center text-lg font-h300-bold">
              <a className="relative tracking-[0.3px] leading-[27px] font-bold text-[inherit] z-[1]">Address</a>
              <p className="m-0 self-stretch relative text-base leading-[24px] font-body300-rg text-darkslategray-200 text-left z-[1]">
                Survey No. 95, Manjari Road, Near ABC Bank, Hadapsar, Pune-14, Maharastra, India.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px] z-[1] text-5xl font-h200-blod">
              <b className="relative leading-[36px] font-bold mq450:text-lgi mq450:leading-[29px]">Contacts</b>
              <div className="flex flex-col items-start justify-center gap-[16px] text-base text-darkslategray-200 font-body300-rg">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" loading="lazy" alt="" src="/mailfill.svg" />
                  <a className="relative leading-[24px] text-[inherit] inline-block shrink-0 [text-decoration:none] whitespace-nowrap" href="mailto:hello@osumare.in" target="_blank">
                    hello@digibiztech.in
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" alt="" src="/phonefill.svg" />
                  <div className="relative leading-[24px] whitespace-nowrap">+91 8459 1234 56</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px] text-center">
            <b className="relative leading-[48px] font-bold mq450:text-lgi mq450:leading-[38px]">Menu</b>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base text-darkslategray-200">
              <div className="relative leading-[24px] font-medium">Home</div>
              <a className="relative leading-[24px] font-medium text-[inherit]">About</a>
              <a className="relative leading-[24px] font-medium text-[inherit]">Services</a>
              <div className="relative leading-[24px] font-medium">Work</div>
              <div className="relative leading-[24px] font-medium">Blog</div>
              <div className="relative leading-[24px] font-medium">Career</div>
            </div>
          </div>
          <div className="w-[280px] flex flex-col items-start justify-start gap-[24px]">
            <b className="relative leading-[48px] font-bold mq450:text-lgi mq450:leading-[38px]">Social</b>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-16 relative gap-[24px]">
              <img className="h-10 w-10 relative rounded-13xl overflow-hidden shrink-0 min-h-[40px]" alt="" src="/pinterestfill.svg" />
              <img className="h-10 w-10 relative rounded-13xl overflow-hidden shrink-0 min-h-[40px]" alt="" src="/pinterestfill-2.svg" />
              <img className="h-10 w-10 relative rounded-13xl overflow-hidden shrink-0 min-h-[40px]" alt="" src="/pinterestfill-3.svg" />
              <img className="h-10 w-10 absolute bottom-0 left-0 rounded-13xl overflow-hidden shrink-0" loading="lazy" alt="" src="/whatsappfill.svg" />
              <img className="h-10 w-10 absolute bottom-0 left-16 rounded-13xl overflow-hidden shrink-0" alt="" src="/whatsappfill-1.svg" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-base">
          <div className="relative tracking-[0.3px] leading-[24px] font-medium">© 2024 Digibiz Technology. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
