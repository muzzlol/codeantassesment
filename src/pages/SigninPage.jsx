import { useState } from 'react';
// Reusable components
const StatsCard = ({ value, label }) => (
  <div className="flex flex-col items-start justify-start">
    <b className="relative leading-[27px] z-[1]">{value}</b>
    <div className="relative leading-[20px] text-sm text-gray-300 z-[1]">
      {label}
    </div>
  </div>
);


// Main components
const StatsPanel = () => {
  return (
    <div className="hidden lg:flex w-1/2 bg-white p-8 flex-col border-r border-component-colors-utility-gray-utility-gray-200">
      <div className="absolute bottom-0 left-0 w-[284px] h-[319px]">
      <img src="/subtract-1.svg" alt="" className="w-full h-full object-contain opacity-40" style={{ fill: '#818181' }} />
    </div>
      <div className="flex flex-col items-end justify-start relative">
        <div className="shadow-[0px_0px_24px_rgba(8,_23,_53,_0.16)] rounded-3xl bg-white flex flex-col items-start justify-start pt-[21px] px-0 pb-[28.5px] gap-[21.3px] max-w-full">
          <div className="flex flex-row items-start justify-start px-[22px]">
            <div className="flex flex-row items-start justify-start gap-2">
              <img className="h-[31px] w-7 relative z-[1]" src="/subtract.svg" />
              <b className="relative leading-[27px] z-[1]">{`AI to Detect & Autofix Bad Code`}</b>
            </div>
          </div>
          <div className="self-stretch h-px relative border-aliceblue-200 border-t-[1px] border-solid z-[1]" />
          <div className="w-[425.5px] flex flex-row items-start justify-start px-5 max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
              <StatsCard value="30+" label="Language Support" />
              <StatsCard value="10K+" label="Developers" />
              <StatsCard value="100K+" label="Hours Saved" />
            </div>
          </div>
        </div>

        <div className="shadow-[0px_0px_24px_rgba(8,_23,_53,_0.16)] rounded-3xl bg-white flex flex-row items-start justify-start p-[15px] gap-[29px] mt-[-12px]">
          <div className="flex flex-col items-start justify-start gap-4">
            <img className="w-14 h-[56.8px]" alt="" src="/group-4.svg" />
            <div className="flex flex-col gap-2">
              <b className="text-sm leading-[20px]">Issues Fixed</b>
              <b className="text-4xl leading-[32px] text-gray-200">500K+</b>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2 text-royalblue-300">
            <div className="flex items-center gap-2">
              <img className="h-6 w-6" alt="" src="/ui-iconarrowsmall-right-2@2x.png" />
              <b className="leading-[20px]">14%</b>
            </div>
            <div className="text-xs text-gray-300">This week</div>
          </div>
        </div>
      </div>
    </div>
  );
}


const AuthPanel = () => {
  const [selectedTab, setSelectedTab] = useState('SAAS');

  const renderContent = () => {
    if (selectedTab === 'SAAS') {
      return (
        <div className="p-6 flex flex-col gap-4">
          <SocialSignInButton icon="/icon@2x.png" text="Sign in with Github" />
          <SocialSignInButton icon="/icon-1@2x.png" text="Sign in with Bitbucket" />
          <SocialSignInButton icon="/icon-2@2x.png" text="Sign in with Azure Devops" />
          <SocialSignInButton icon="/icon-3@2x.png" text="Sign in with GitLab" />
        </div>
      );
    }
    return (
      <div className="p-6 flex flex-col gap-4">
        <SocialSignInButton icon="/icon-3@2x.png" text="Self Hosted GitLab" />
        <button className="w-full h-[48px] flex items-center justify-center gap-2 border rounded-lg">
          <img className="w-5 h-5" src="/link-icon.svg" alt="" />
          <span className="text-sm font-semibold">Sign in with SSO</span>
        </button>
      </div>
    );
  };

  return (
    <div className="w-full lg:w-1/2 bg-component-colors-utility-gray-utility-gray-50 flex flex-col items-center justify-center p-8">
      <div className="w-[480px] shadow-[0px_1px_2px_rgba(10,_13,_18,_0.05)] rounded-xl bg-white border border-component-colors-utility-gray-utility-gray-200 overflow-hidden flex flex-col items-center justify-start">
        {/* Header */}
        <div className="border-b border-lightgray flex flex-col items-center justify-start p-9 gap-5 w-full">
          <div className="flex flex-col items-center justify-center gap-9">
            <div className="flex items-center gap-3.5">
              <img className="h-10 w-[35.6px]" alt="" src="/logo.svg" />
              <h1 className="text-2xl leading-[110%]">CodeAnt AI</h1>
            </div>
            <h1 className="text-3xl leading-[48px] font-semibold">Welcome to CodeAnt AI</h1>
          </div>
          
          {/* Plan Selection */}
          <div className="flex gap-1 p-1 bg-component-colors-utility-gray-utility-gray-50 border rounded-md w-[320px]">
            <button 
              onClick={() => setSelectedTab('SAAS')}
              className={`flex-1 rounded-lg py-3 px-6 text-center text-sm font-semibold transition-colors ${
                selectedTab === 'SAAS' 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-gray-50'
              }`}
            >
              SAAS
            </button>
            <button 
              onClick={() => setSelectedTab('SELF_HOSTED')}
              className={`flex-1 rounded-lg py-3 px-6 text-center text-sm font-semibold transition-colors ${
                selectedTab === 'SELF_HOSTED' 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-gray-50'
              }`}
            >
              Self Hosted
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[320px] w-full">
          {renderContent()}
        </div>
      </div>
      
      {/* Privacy Policy */}
      <div className="mt-8 text-sm leading-[24px] text-center">
        <span>By signing up you agree to the </span>
        <b>Privacy Policy</b>
        <span>.</span>
      </div>
    </div>
  );
};

const SocialSignInButton = ({ icon, text }) => (
  <button className="w-full h-[48px] flex items-center justify-center gap-3 border rounded-lg hover:bg-gray-50">
    <img className="w-5 h-5" alt="" src={icon} />
    <span className="text-sm font-semibold text-gray-900">{text}</span>
  </button>
);


const SigninPage = ({ className = "" }) => {
  return (
    <div className={`flex min-h-screen w-full ${className}`}>
      <StatsPanel />
      <AuthPanel />
    </div>
  );
};

export default SigninPage;