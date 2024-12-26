import PropTypes from "prop-types";

const TabButtonBase = ({ className = "" }) => {
  return (
    <div
      className={`h-[60px] flex-[0.4957] shadow-[0px_0px_0px_1px_rgba(10,_13,_18,_0.18)_inset,_0px_-2px_0px_rgba(10,_13,_18,_0.05)_inset,_0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-lg bg-royalblue-100 border-gray-400 border-[2px] border-solid box-border overflow-hidden flex flex-row items-center justify-center py-[13px] px-[125px] gap-spacing-xs text-left text-xl text-white font-text-xs-medium1 ${className}`}
    >
      <div className="h-7 w-14 relative leading-[28px] font-semibold inline-block shrink-0 mq450:text-base mq450:leading-[22px]">
        SAAS
      </div>
      <div className="rounded-radius-full bg-component-colors-utility-gray-utility-gray-50 border-component-colors-utility-gray-utility-gray-200 border-[1px] border-solid hidden flex-row items-center justify-start py-spacing-xxs px-spacing-md text-center text-xs text-component-colors-utility-gray-utility-gray-700 font-text-xs-medium">
        <div className="relative leading-[18px] font-medium">2</div>
      </div>
    </div>
  );
};

TabButtonBase.propTypes = {
  className: PropTypes.string,
};

export default TabButtonBase;
