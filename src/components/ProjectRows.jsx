const ProjectRows = ({
  projectName,
  badge,
  language,
  memory,
  lastUpdated
}) => {
  return (
    <div className="self-stretch border-lightgray border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-6 px-0 pb-[22px] max-w-full hover:bg-gray-50">
      <div className="flex flex-row items-start justify-start py-0 px-6 box-border gap-2 max-w-full mq750:flex-wrap">
        {/* Left Column */}
        <div className="flex flex-col items-start justify-start gap-3">
          {/* Project Name */}
          <div className="relative leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
            {projectName}
          </div>
          
          {/* Language and Memory Section */}
          <div className="w-[191.5px] flex flex-row items-start justify-between gap-5 text-base">
            {/* Language with Dot */}
            <div className="flex flex-row items-start justify-start gap-2">
              <div className="relative leading-[24px] inline-block min-w-[55px]">
                {language}
              </div>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="w-2 h-2 relative rounded-[50%] bg-royalblue-100" />
              </div>
            </div>
            
            {/* Memory Usage */}
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
                {memory}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start justify-start gap-3 text-center text-sm text-royalblue-200">
          {/* Badge */}
          <div className="h-6 rounded-radius-full bg-aliceblue-100 border-lightskyblue border-[1px] border-solid box-border flex flex-row items-start justify-start py-0 pl-spacing-md pr-[7px]">
            <div className="relative leading-[20px] inline-block min-w-[48px]">
              {badge}
            </div>
          </div>
          
          {/* Last Updated */}
          <div className="flex flex-row items-start justify-start py-0 pl-[25px] pr-0 text-left text-base text-gray-100">
            <div className="relative leading-[24px]">
              {lastUpdated}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRows;