import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProjectRows from "../components/ProjectRows";

const Root1 = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/signin-page");
  }, [navigate]);

  return (
    <div className="w-full relative flex flex-row items-start justify-start p-2.5 box-border leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-white overflow-hidden flex flex-row items-start justify-start max-w-full text-left text-5xl text-gray-100 font-satoshi mq1225:h-auto">
        <div className="self-stretch w-[242px] bg-white border-component-colors-utility-gray-utility-gray-200 border-r-[1px] border-solid box-border flex flex-row items-start justify-start mq1050:hidden">
          <div className="self-stretch flex-1 flex flex-col items-start justify-between">
            <div className="self-stretch h-[356px] flex flex-col items-start justify-start pt-spacing-3xl1 px-0 pb-0 box-border gap-spacing-xl1">
              <div className="self-stretch h-[92px] flex flex-col items-start justify-start py-0 px-spacing-2xl1 box-border gap-spacing-2xl1">
                <div className="flex flex-row items-center justify-start gap-[11px]">
                  <img
                    className="h-8 w-[28.5px] relative"
                    loading="lazy"
                    alt=""
                    src="/group-37110.svg"
                  />
                  <h3 className="m-0 relative text-inherit leading-[110%] font-normal font-[inherit] mq450:text-lgi mq450:leading-[21px]">
                    CodeAnt AI
                  </h3>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-spacing-md1 text-sm text-component-colors-utility-gray-utility-gray-700 font-text-xs-medium1">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-spacing-sm">
                    <div className="hidden flex-row items-center justify-start gap-spacing-xxs1">
                      <div className="relative leading-[20px] font-medium">
                        Search
                      </div>
                      <div className="relative leading-[20px] font-medium text-colors-text-text-brand-tertiary-600">
                        *
                      </div>
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/help-icon.svg"
                      />
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-spacing-sm">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-spacing-sm">
                        <div className="w-[46px] hidden flex-row items-start justify-start gap-spacing-xxs1">
                          <div className="relative leading-[20px] font-medium">
                            Share link
                          </div>
                          <div className="relative leading-[20px] font-medium text-colors-text-text-brand-tertiary-600 hidden min-w-[8px] shrink-0">
                            *
                          </div>
                        </div>
                        <div className="self-stretch flex-1 shadow-[0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-radius-md1 bg-white border-lightgray border-[1px] border-solid flex flex-row items-center justify-start py-1.5 px-[11px] gap-spacing-md1 text-base text-gray-100">
                          <div className="flex-1 flex flex-row items-center justify-start">
                            <div className="w-[157.5px] relative leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                              UtkarshDhairyaPanwar
                            </div>
                          </div>
                          <img
                            className="h-[7.2px] w-[13.5px] relative"
                            loading="lazy"
                            alt=""
                            src="/chevrondown.svg"
                          />
                        </div>
                      </div>
                      <div className="relative leading-[20px] text-colors-text-text-tertiary-600 hidden">
                        This is a hint text to help user.
                      </div>
                    </div>
                  </div>
                  <div className="relative leading-[20px] text-colors-text-text-tertiary-600 hidden">
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-spacing-xl1 text-base text-component-colors-utility-gray-utility-gray-700 font-text-xs-medium1">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0 text-white">
                  <div className="self-stretch shadow-[0px_0px_0px_1px_rgba(10,_13,_18,_0.18)_inset,_0px_-2px_0px_rgba(10,_13,_18,_0.05)_inset,_0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-radius-md bg-royalblue-100 border-gray-400 border-[2px] border-solid flex flex-row items-center justify-center py-[7px] px-3 gap-spacing-xs">
                    <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[52px] gap-spacing-md1">
                      <img
                        className="h-2.5 w-2.5 relative hidden"
                        alt=""
                        src="/-dot.svg"
                      />
                      <img
                        className="h-6 w-6 relative"
                        loading="lazy"
                        alt=""
                        src="/home.svg"
                      />
                      <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit]">
                        Repositories
                      </a>
                    </div>
                    <div className="rounded-radius-full1 bg-component-colors-utility-gray-utility-gray-50 border-component-colors-utility-gray-utility-gray-200 border-[1px] border-solid hidden flex-row items-center justify-start py-spacing-xxs1 px-spacing-md1 text-center text-xs text-component-colors-utility-gray-utility-gray-700">
                      <div className="h-[18px] w-3.5 relative leading-[18px] font-medium inline-block">
                        10
                      </div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/chevrondown1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
                  <div className="flex-1 rounded-radius-sm bg-white flex flex-row items-center justify-start py-spacing-md1 px-spacing-lg1 gap-spacing-lg1">
                    <div className="flex flex-row items-center justify-start py-0 pl-0 pr-8 gap-spacing-md1">
                      <img
                        className="h-2.5 w-2.5 relative hidden"
                        alt=""
                        src="/-dot.svg"
                      />
                      <img
                        className="h-6 w-6 relative"
                        loading="lazy"
                        alt=""
                        src="/code.svg"
                      />
                      <div className="relative leading-[24px] font-semibold">
                        AI Code Review
                      </div>
                    </div>
                    <div className="rounded-radius-full1 bg-component-colors-utility-gray-utility-gray-50 border-component-colors-utility-gray-utility-gray-200 border-[1px] border-solid hidden flex-row items-center justify-start py-spacing-xxs1 px-spacing-md1 text-center text-xs">
                      <div className="h-[18px] w-3.5 relative leading-[18px] font-medium inline-block">
                        10
                      </div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/chevrondown1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
                  <div className="flex-1 rounded-radius-sm bg-white flex flex-row items-center justify-start py-spacing-md1 px-spacing-lg1 gap-spacing-lg1">
                    <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[38px] gap-spacing-md1">
                      <img
                        className="h-2.5 w-2.5 relative hidden"
                        alt=""
                        src="/-dot.svg"
                      />
                      <img
                        className="h-6 w-6 relative"
                        loading="lazy"
                        alt=""
                        src="/cloud.svg"
                      />
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[116px]">
                        Cloud Security
                      </div>
                    </div>
                    <div className="rounded-radius-full1 bg-component-colors-utility-gray-utility-gray-50 border-component-colors-utility-gray-utility-gray-200 border-[1px] border-solid hidden flex-row items-center justify-start py-spacing-xxs1 px-spacing-md1 text-center text-xs">
                      <div className="h-[18px] w-3.5 relative leading-[18px] font-medium inline-block">
                        10
                      </div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/chevrondown1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
                  <div className="flex-1 rounded-radius-sm bg-white flex flex-row items-center justify-start py-spacing-md1 px-spacing-lg1 gap-spacing-lg1">
                    <div className="flex flex-row items-center justify-start py-0 pl-0 pr-16 gap-spacing-md1">
                      <img
                        className="h-2.5 w-2.5 relative hidden"
                        alt=""
                        src="/-dot.svg"
                      />
                      <img
                        className="h-6 w-6 relative"
                        loading="lazy"
                        alt=""
                        src="/docs.svg"
                      />
                      <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[90px]">
                        How to Use
                      </a>
                    </div>
                    <div className="rounded-radius-full1 bg-component-colors-utility-gray-utility-gray-50 border-component-colors-utility-gray-utility-gray-200 border-[1px] border-solid hidden flex-row items-center justify-start py-spacing-xxs1 px-spacing-md1 text-center text-xs">
                      <div className="h-[18px] w-3.5 relative leading-[18px] font-medium inline-block">
                        10
                      </div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/chevrondown1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
                  <div className="flex-1 rounded-radius-sm bg-white flex flex-row items-center justify-start py-spacing-md1 px-spacing-lg1 gap-spacing-lg1">
                    <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[88px] gap-spacing-md1">
                      <img
                        className="h-2.5 w-2.5 relative hidden"
                        alt=""
                        src="/-dot.svg"
                      />
                      <img
                        className="h-6 w-6 relative"
                        loading="lazy"
                        alt=""
                        src="/settings.svg"
                      />
                      <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit]">
                        Settings
                      </a>
                    </div>
                    <div className="rounded-radius-full1 bg-component-colors-utility-gray-utility-gray-50 border-component-colors-utility-gray-utility-gray-200 border-[1px] border-solid hidden flex-row items-center justify-start py-spacing-xxs1 px-spacing-md1 text-center text-xs">
                      <div className="h-[18px] w-3.5 relative leading-[18px] font-medium inline-block">
                        10
                      </div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/chevrondown1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-spacing-xl1 pb-spacing-3xl1 text-base text-component-colors-utility-gray-utility-gray-700 font-text-xs-medium1">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
                  <div className="flex-1 rounded-radius-sm bg-white flex flex-row items-center justify-start py-spacing-md1 px-spacing-lg1 gap-spacing-lg1">
                    <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[90px] gap-spacing-md1">
                      <img
                        className="h-2.5 w-2.5 relative hidden"
                        alt=""
                        src="/-dot.svg"
                      />
                      <img
                        className="h-6 w-6 relative"
                        loading="lazy"
                        alt=""
                        src="/phone.svg"
                      />
                      <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit]">
                        Support
                      </a>
                    </div>
                    <div className="rounded-radius-full1 bg-component-colors-utility-gray-utility-gray-50 border-component-colors-utility-gray-utility-gray-200 border-[1px] border-solid hidden flex-row items-center justify-start py-spacing-xxs1 px-spacing-md1 text-center text-xs">
                      <div className="h-[18px] w-3.5 relative leading-[18px] font-medium inline-block">
                        10
                      </div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/chevrondown1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-spacing-xxs1 px-0">
                  <div className="flex-1 rounded-radius-sm bg-white flex flex-row items-center justify-start py-spacing-md1 px-spacing-lg1 gap-spacing-lg1">
                    <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[98px] gap-spacing-md1">
                      <img
                        className="h-2.5 w-2.5 relative hidden"
                        alt=""
                        src="/-dot.svg"
                      />
                      <img
                        className="h-6 w-6 relative"
                        loading="lazy"
                        alt=""
                        src="/logout.svg"
                      />
                      <a
                        className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[56px] cursor-pointer"
                        onClick={onTextClick}
                      >
                        Logout
                      </a>
                    </div>
                    <div className="rounded-radius-full1 bg-component-colors-utility-gray-utility-gray-50 border-component-colors-utility-gray-utility-gray-200 border-[1px] border-solid hidden flex-row items-center justify-start py-spacing-xxs1 px-spacing-md1 text-center text-xs">
                      <div className="h-[18px] w-3.5 relative leading-[18px] font-medium inline-block">
                        10
                      </div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/chevrondown1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="flex-1 bg-component-colors-utility-gray-utility-gray-50 flex flex-row items-start justify-start p-6 box-border max-w-[calc(100%_-_242px)] text-left text-5xl text-gray-100 font-text-xs-medium1 mq1050:pt-5 mq1050:pb-5 mq1050:box-border mq1050:max-w-full">
          <div className="h-[912px] flex-1 relative shadow-[0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-radius-xl bg-white border-component-colors-utility-gray-utility-gray-200 border-[1px] border-solid box-border overflow-hidden max-w-full mq1225:h-auto mq1225:min-h-[912]">
            <div className="absolute top-[0px] left-[0px] bg-white border-component-colors-utility-gray-utility-gray-200 border-b-[1px] border-solid box-border w-full flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-spacing-2xl px-spacing-3xl pb-20 box-border max-w-full">
                <div className="self-stretch flex flex-row items-center justify-between [row-gap:20px] max-w-full gap-0 mq1225:flex-wrap">
                  <div className="w-[805px] flex flex-col items-start justify-start pt-0 pb-6 pl-0 pr-5 box-border max-w-full">
                    <a className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit] mq450:text-lgi mq450:leading-[26px]">
                      Repositories
                    </a>
                  </div>
                  <div className="h-10 flex flex-row items-center justify-start gap-3">
                    <button className="cursor-pointer border-lightgray border-[1px] border-solid py-2 px-[13px] bg-white self-stretch shadow-[0px_0px_0px_1px_rgba(10,_13,_18,_0.18)_inset,_0px_-2px_0px_rgba(10,_13,_18,_0.05)_inset,_0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-center gap-spacing-xs">
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/cycle.svg"
                      />
                      <div className="flex flex-row items-center justify-center py-0 px-px">
                        <div className="relative text-sm leading-[20px] font-text-xs-medium1 text-component-colors-utility-gray-utility-gray-700 text-left">
                          Refresh All
                        </div>
                      </div>
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder.svg"
                      />
                    </button>
                    <button className="cursor-pointer border-gray-400 border-[2px] border-solid py-[7px] px-3 bg-royalblue-100 self-stretch flex-1 shadow-[0px_0px_0px_1px_rgba(10,_13,_18,_0.18)_inset,_0px_-2px_0px_rgba(10,_13,_18,_0.05)_inset,_0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-center gap-spacing-xs">
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/plus.svg"
                      />
                      <div className="flex flex-row items-center justify-center py-0 px-px">
                        <div className="relative text-sm leading-[20px] font-text-xs-medium1 text-white text-left">
                          Add Repository
                        </div>
                      </div>
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder1.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[56px] left-[0px] w-full flex flex-col items-start justify-start gap-[18px] max-w-full text-sm text-component-colors-utility-gray-utility-gray-700">
              <div className="flex flex-row items-start justify-start py-0 pl-6 pr-[23px]">
                <div className="relative leading-[20px]">
                  33 total repositories
                </div>
              </div>
              <div className="w-[414px] h-11 flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                <div className="self-stretch flex-1 shadow-[0px_0px_0px_1px_rgba(10,_13,_18,_0.18)_inset,_0px_-2px_0px_rgba(10,_13,_18,_0.05)_inset,_0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-radius-md bg-white border-lightgray border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-2 px-3.5 gap-spacing-xs max-w-full">
                  <img
                    className="h-6 w-6 relative"
                    alt=""
                    src="/serach.svg"
                  />
                  <input
                    className="w-[155px] [border:none] [outline:none] bg-[transparent] flex flex-col items-start justify-start pt-0.5 px-0.5 pb-0 box-border font-text-xs-medium1 text-base text-component-colors-utility-gray-utility-gray-700"
                    placeholder="Search Repositories"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full text-xl text-gray-100">
                <div className="self-stretch border-lightgray border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-6 px-0 pb-[22px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-6 box-border gap-[12.5px] max-w-full mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-3">
                      <div className="flex flex-row items-start justify-start gap-2">
                        <div className="relative leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
                          design-system
                        </div>
                        <div className="h-6 rounded-radius-full bg-aliceblue-100 border-lightskyblue border-[1px] border-solid box-border flex flex-row items-start justify-start py-0 pl-spacing-md pr-[7px] text-center text-sm text-royalblue-200">
                          <div className="relative leading-[20px] inline-block min-w-[42px]">
                            Public
                          </div>
                        </div>
                      </div>
                      <div className="w-[183.5px] flex flex-row items-start justify-between gap-5 text-base">
                        <div className="flex flex-row items-start justify-start gap-2">
                          <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[45px]">
                            React
                          </a>
                          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                            <div className="w-2 h-2 relative rounded-[50%] bg-royalblue-100" />
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                            <img
                              className="w-[10.5px] h-3 relative"
                              loading="lazy"
                              alt=""
                              src="/database.svg"
                            />
                          </div>
                          <div className="relative leading-[24px] inline-block min-w-[66px]">
                            7320 KB
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-9 px-0 pb-0 text-base">
                      <div className="relative leading-[24px]">
                        Updated 1 day ago
                      </div>
                    </div>
                  </div>
                </div>
                <ProjectRows
                  codeantCiApp="codeant-ci-app"
                  text="Private"
                  javascript="Javascript"
                  kB="5871 KB"
                  updated2DaysAgo="Updated 2 days ago"
                />
                <div className="self-stretch border-lightgray border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-6 px-0 pb-[22px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-6 box-border gap-2 max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-3">
                      <div className="relative leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
                        analytics-dashboard
                      </div>
                      <div className="w-[191.5px] flex flex-row items-start justify-between gap-5 text-base">
                        <div className="flex flex-row items-start justify-start gap-2">
                          <div className="relative leading-[24px] inline-block min-w-[55px]">
                            Python
                          </div>
                          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                            <div className="w-2 h-2 relative rounded-[50%] bg-royalblue-100" />
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                            <img
                              className="w-[10.5px] h-3 relative"
                              loading="lazy"
                              alt=""
                              src="/database.svg"
                            />
                          </div>
                          <div className="relative leading-[24px] inline-block min-w-[64px]">
                            4521 KB
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-3 text-center text-sm text-royalblue-200">
                      <div className="h-6 rounded-radius-full bg-aliceblue-100 border-lightskyblue border-[1px] border-solid box-border flex flex-row items-start justify-start py-0 pl-spacing-md pr-[7px]">
                        <div className="relative leading-[20px] inline-block min-w-[48px]">
                          Private
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pl-[25px] pr-0 text-left text-base text-gray-100">
                        <div className="relative leading-[24px]">
                          Updated 5 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ProjectRows
                  projectRowsBackgroundColor="unset"
                  frameDivWidth="421.5px"
                  codeantCiApp="mobile-app"
                  codeantCiAppDisplay="inline-block"
                  codeantCiAppMinWidth="111px"
                  text="Public"
                  textMinWidth="42px"
                  javascript="Swift"
                  javascriptDisplay="unset"
                  javascriptMinWidth="unset"
                  kB="3096 KB"
                  kBDisplay="inline-block"
                  kBMinWidth="67px"
                  updated2DaysAgo="Updated 3 days ago"
                  frameDivJustifyContent1="space-between"
                  frameDivGap1="20px"
                  frameDivAlignSelf1="stretch"
                />
                <div className="self-stretch border-lightgray border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-6 px-0 pb-[22px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-6 box-border gap-[1.5px] max-w-full mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-3">
                      <div className="relative leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
                        e-commerce-platform
                      </div>
                      <div className="w-[173.5px] flex flex-row items-start justify-between gap-5 text-base">
                        <div className="flex flex-row items-start justify-start gap-2">
                          <div className="relative leading-[24px] inline-block min-w-[37px]">
                            Java
                          </div>
                          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                            <div className="w-2 h-2 relative rounded-[50%] bg-royalblue-100" />
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                            <img
                              className="w-[10.5px] h-3 relative"
                              loading="lazy"
                              alt=""
                              src="/database.svg"
                            />
                          </div>
                          <div className="relative leading-[24px] inline-block min-w-[64px]">
                            6210 KB
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-3 text-center text-sm text-royalblue-200">
                      <div className="flex flex-row items-start justify-start py-0 px-1.5">
                        <div className="h-6 flex-1 rounded-radius-full bg-aliceblue-100 border-lightskyblue border-[1px] border-solid box-border flex flex-row items-start justify-start py-0 pl-spacing-md pr-[7px]">
                          <div className="relative leading-[20px] inline-block min-w-[48px]">
                            Private
                          </div>
                        </div>
                      </div>
                      <div className="relative text-base leading-[24px] text-gray-100 text-left">
                        Updated 6 days ago
                      </div>
                    </div>
                  </div>
                </div>
                <ProjectRows
                  projectRowsBackgroundColor="unset"
                  frameDivWidth="unset"
                  codeantCiApp="blog-website"
                  codeantCiAppDisplay="inline-block"
                  codeantCiAppMinWidth="128px"
                  text="Public"
                  textMinWidth="42px"
                  javascript="HTML/CSS"
                  javascriptDisplay="inline-block"
                  javascriptMinWidth="85px"
                  kB="1876 KB"
                  kBDisplay="unset"
                  kBMinWidth="unset"
                  updated2DaysAgo="Updated 4 days ago"
                  frameDivJustifyContent1="flex-start"
                  frameDivGap1="40px"
                  frameDivAlignSelf1="unset"
                />
                <ProjectRows
                  projectRowsBackgroundColor="unset"
                  frameDivWidth="414.5px"
                  codeantCiApp="social-network"
                  codeantCiAppDisplay="unset"
                  codeantCiAppMinWidth="unset"
                  text="Private"
                  textMinWidth="48px"
                  javascript="PHP"
                  javascriptDisplay="inline-block"
                  javascriptMinWidth="34px"
                  kB="5432 KB"
                  kBDisplay="inline-block"
                  kBMinWidth="67px"
                  updated2DaysAgo="Updated 7 days ago"
                  frameDivJustifyContent1="space-between"
                  frameDivGap1="20px"
                  frameDivAlignSelf1="stretch"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Root1;
