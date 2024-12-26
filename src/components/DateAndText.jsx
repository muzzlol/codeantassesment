import PropTypes from "prop-types";

const DateAndText = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center py-0 px-[127px] gap-9 text-left text-11xl text-gray-100 font-satoshi mq750:gap-[18px] mq750:pl-[63px] mq750:pr-[63px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[13.8px]">
        <img
          className="h-10 w-[35.6px] relative"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <h1 className="m-0 relative text-inherit leading-[110%] font-normal font-[inherit] mq450:text-lg mq450:leading-[20px] mq1050:text-5xl mq1050:leading-[26px]">
          CodeAnt AI
        </h1>
      </div>
      <h1 className="m-0 relative text-13xl leading-[48px] font-semibold font-text-xs-medium1 mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
        Welcome to CodeAnt AI
      </h1>
    </div>
  );
};

DateAndText.propTypes = {
  className: PropTypes.string,
};

export default DateAndText;
