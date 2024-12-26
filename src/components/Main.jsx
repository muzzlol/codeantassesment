import PropTypes from "prop-types";

const Main = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-white flex flex-row items-start justify-start max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-center pt-6 px-28 pb-[23.9px] box-border gap-4 max-w-full mq750:pl-14 mq750:pr-14 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-3.5 px-32 bg-white h-[58.6px] rounded-lg box-border flex flex-row items-center justify-center gap-4 hover:bg-gainsboro-100 hover:border-silver hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-[25.6px] w-[25px] relative overflow-hidden shrink-0 object-cover"
            alt=""
            src="/icon@2x.png"
          />
          <div className="relative text-base leading-[24px] font-semibold font-text-xs-medium1 text-gray-300 text-left">
            Sign in with Github
          </div>
        </button>
        <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-3.5 px-[117px] bg-white h-[58.6px] rounded-lg box-border flex flex-row items-center justify-center gap-4 hover:bg-gainsboro-100 hover:border-silver hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-[25.6px] w-[25px] relative overflow-hidden shrink-0 object-cover"
            alt=""
            src="/icon-1@2x.png"
          />
          <div className="relative text-base leading-[24px] font-semibold font-text-xs-medium1 text-gray-300 text-left">
            Sign in with Bitbucket
          </div>
        </button>
        <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-3.5 px-[100px] bg-white h-[58.6px] rounded-lg box-border flex flex-row items-center justify-center gap-4 hover:bg-gainsboro-100 hover:border-silver hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-[25.6px] w-[25px] relative overflow-hidden shrink-0 object-cover"
            alt=""
            src="/icon-2@2x.png"
          />
          <div className="relative text-base leading-[24px] font-semibold font-text-xs-medium1 text-gray-300 text-left">
            Sign in with Azure Devops
          </div>
        </button>
        <button className="cursor-pointer border-gainsboro-200 border-[1px] border-solid py-3.5 px-32 bg-white h-[58.6px] rounded-lg box-border flex flex-row items-center justify-center gap-4 hover:bg-gainsboro-100 hover:border-silver hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-[25.6px] w-[25px] relative overflow-hidden shrink-0 object-cover"
            alt=""
            src="/icon-3@2x.png"
          />
          <div className="relative text-base leading-[24px] font-semibold font-text-xs-medium1 text-gray-300 text-left">
            Sign in with GitLab
          </div>
        </button>
      </div>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
