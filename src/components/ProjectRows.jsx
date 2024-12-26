import { useMemo } from "react";

const ProjectRows = ({
  className = "",
  projectRowsBackgroundColor,
  frameDivWidth,
  codeantCiApp,
  codeantCiAppDisplay,
  codeantCiAppMinWidth,
  text,
  textMinWidth,
  frameDivJustifyContent,
  frameDivGap,
  frameDivAlignSelf,
  javascript,
  javascriptDisplay,
  javascriptMinWidth,
  kB,
  kBDisplay,
  kBMinWidth,
  updated2DaysAgo,
  frameDivJustifyContent1,
  frameDivGap1,
  frameDivAlignSelf1,
}) => {
  const projectRowsStyle = useMemo(() => {
    return {
      backgroundColor: projectRowsBackgroundColor,
    };
  }, [projectRowsBackgroundColor]);

  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const codeantCiAppStyle = useMemo(() => {
    return {
      display: codeantCiAppDisplay,
      minWidth: codeantCiAppMinWidth,
    };
  }, [codeantCiAppDisplay, codeantCiAppMinWidth]);

  const textStyle = useMemo(() => {
    return {
      minWidth: textMinWidth,
    };
  }, [textMinWidth]);

  const javascriptStyle = useMemo(() => {
    return {
      display: javascriptDisplay,
      minWidth: javascriptMinWidth,
    };
  }, [javascriptDisplay, javascriptMinWidth]);

  const kBStyle = useMemo(() => {
    return {
      display: kBDisplay,
      minWidth: kBMinWidth,
    };
  }, [kBDisplay, kBMinWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent1,
      gap: frameDivGap1,
      alignSelf: frameDivAlignSelf1,
    };
  }, [frameDivJustifyContent1, frameDivGap1, frameDivAlignSelf1]);

  return (
    <div
      className={`self-stretch bg-whitesmoke border-lightgray border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-6 px-0 pb-[22px] max-w-full text-left text-xl text-gray-100 font-text-xs-medium1 ${className}`}
      style={projectRowsStyle}
    >
      <div
        className="flex flex-col items-start justify-start py-0 px-6 box-border gap-3 max-w-full"
        style={frameDivStyle}
      >
        <div className="flex flex-row items-start justify-start gap-2">
          <div
            className="relative leading-[24px] font-medium mq450:text-base mq450:leading-[19px]"
            style={codeantCiAppStyle}
          >
            {codeantCiApp}
          </div>
          <div className="h-6 rounded-radius-full bg-aliceblue-100 border-lightskyblue border-[1px] border-solid box-border flex flex-row items-start justify-start py-0 pl-spacing-md pr-[7px] text-center text-sm text-royalblue-200">
            <div
              className="relative leading-[20px] inline-block min-w-[48px]"
              style={textStyle}
            >
              {text}
            </div>
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-start gap-10 text-base mq450:gap-5 mq750:flex-wrap"
          style={frameDiv1Style}
        >
          <div className="flex flex-row items-start justify-start gap-2">
            <div className="relative leading-[24px]" style={javascriptStyle}>
              {javascript}
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
            <div className="relative leading-[24px]" style={kBStyle}>
              {kB}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="relative leading-[24px]">{updated2DaysAgo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProjectRows;
