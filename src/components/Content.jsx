import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-center py-[319px] px-5 box-border relative max-w-full text-left text-lg text-gray-200 font-text-xs-medium1 mq750:pt-[135px] mq750:pb-[135px] mq750:box-border mq1050:pt-[207px] mq1050:pb-[207px] mq1050:box-border ${className}`}
    >
      <div className="h-[322px] w-[474px] relative max-w-full z-[unset] mq450:h-auto mq450:min-h-[322]">
        <div className="absolute top-[calc(50%_-_161px)] left-[calc(50%_-_237px)] shadow-[0px_0px_24px_rgba(8,_23,_53,_0.16)] rounded-3xl bg-white w-[447px] flex flex-col items-start justify-start pt-[21px] px-0 pb-[28.5px] box-border gap-[21.3px] max-w-full">
          <div className="self-stretch h-[170px] relative shadow-[0px_0px_24px_rgba(8,_23,_53,_0.16)] rounded-3xl bg-white hidden" />
          <div className="flex flex-row items-start justify-start py-0 px-[22px] box-border max-w-full z-[unset]">
            <div className="flex flex-row items-start justify-start gap-2 z-[1]">
              <img
                className="h-[31px] w-7 relative z-[1]"
                loading="lazy"
                alt=""
                src="/subtract.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 z-[unset]">
                <b className="relative leading-[27px] z-[1]">{`AI to Detect & Autofix Bad Code`}</b>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative border-aliceblue-200 border-t-[1px] border-solid box-border z-[1]" />
          <div className="w-[425.5px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full z-[unset]">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 z-[unset] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start z-[1]">
                <div className="flex flex-row items-start justify-start py-0 pl-[43px] pr-[42px] z-[unset]">
                  <b className="relative leading-[27px] z-[1]">30+</b>
                </div>
                <div className="relative text-sm leading-[20px] text-gray-300 inline-block min-w-[124px] z-[1]">
                  Language Support
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[11px] z-[unset]">
                <div className="flex flex-col items-start justify-start z-[1]">
                  <div className="flex flex-row items-start justify-start py-0 px-3.5 z-[unset]">
                    <b className="relative leading-[27px] inline-block min-w-[47px] z-[1]">
                      10K+
                    </b>
                  </div>
                  <div className="relative text-sm leading-[20px] text-gray-300 z-[1]">
                    Developers
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start z-[1]">
                <div className="flex flex-row items-start justify-start py-0 px-[13px] z-[unset]">
                  <b className="relative leading-[27px] inline-block min-w-[59px] z-[1]">
                    100K+
                  </b>
                </div>
                <div className="relative text-sm leading-[20px] text-gray-300 inline-block min-w-[86px] z-[1]">
                  Hours Saved
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[50.93%] w-[56.96%] top-[49.07%] right-[0%] bottom-[0%] left-[43.04%] z-[2] text-sm text-gray-300">
          <div className="absolute h-full w-full top-[0%] right-[1.85%] bottom-[0%] left-[0%] shadow-[0px_0px_24px_rgba(8,_23,_53,_0.16)] rounded-3xl bg-white z-[unset]" />
          <div className="absolute h-[81.34%] w-[75.56%] top-[9.27%] right-[12.67%] bottom-[9.39%] left-[11.78%] flex flex-row items-start justify-start gap-[29px] z-[1]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16.2px] z-[unset]">
              <img
                className="w-14 h-[56.8px] relative z-[3]"
                loading="lazy"
                alt=""
                src="/group-4.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 z-[unset]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8.4px] z-[unset]">
                  <b className="relative leading-[20px] z-[3]">Issues Fixed</b>
                  <b className="relative text-13xl leading-[32px] inline-block text-gray-200 min-w-[109px] z-[3] mq450:text-lgi mq450:leading-[19px] mq1050:text-7xl mq1050:leading-[26px]">
                    500K+
                  </b>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[9.1px] px-0 pb-0 z-[unset] text-royalblue-300">
              <div className="flex flex-col items-start justify-start z-[unset]">
                <div className="flex flex-row items-start justify-start shrink-0 z-[unset]">
                  <img
                    className="h-[24.3px] w-6 relative object-contain z-[3]"
                    loading="lazy"
                    alt=""
                    src="/ui-iconarrowsmall-right-2@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0 z-[unset]">
                    <b className="relative leading-[20px] inline-block min-w-[30px] z-[3]">
                      14%
                    </b>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-[7px] pr-0 z-[unset] mt-[-1px] text-xs text-gray-300">
                  <div className="relative leading-[16px] inline-block min-w-[59px] shrink-0 z-[3]">
                    This week
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[319px] w-[284px] absolute !m-[0] bottom-[0px] left-[0px] z-[4]"
        loading="lazy"
        alt=""
        src="/subtract-1.svg"
      />
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
